(() => {
    const cells = document.querySelectorAll('.cell');
    const status = document.getElementById('game-status');
    const resetBtn = document.getElementById('reset');
    const wins = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];

    let board, human, computer, gameOver;

    function init() {
        board = Array(9).fill('');
        human = 'X';
        computer = 'O';
        gameOver = false;
        cells.forEach(cell => {
            cell.textContent = '';
            cell.className = 'cell';
            cell.disabled = false;
        });
        status.textContent = 'Your turn (X)';
    }

    function checkWin(player) {
        return wins.find(combo => combo.every(i => board[i] === player)) || null;
    }

    function checkDraw() {
        return board.every(cell => cell !== '');
    }

    function endGame(message, winCombo) {
        gameOver = true;
        status.textContent = message;
        cells.forEach(cell => cell.disabled = true);
        if (winCombo) {
            winCombo.forEach(i => cells[i].classList.add('winner'));
        }
    }

    function computerMove() {
        // Try to win
        for (const combo of wins) {
            const empty = combo.filter(i => board[i] === '');
            const mine = combo.filter(i => board[i] === computer);
            if (mine.length === 2 && empty.length === 1) {
                return empty[0];
            }
        }
        // Try to block
        for (const combo of wins) {
            const empty = combo.filter(i => board[i] === '');
            const theirs = combo.filter(i => board[i] === human);
            if (theirs.length === 2 && empty.length === 1) {
                return empty[0];
            }
        }
        // Take center
        if (board[4] === '') return 4;
        // Take a corner
        const corners = [0, 2, 6, 8].filter(i => board[i] === '');
        if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
        // Take any open spot
        const open = board.map((v, i) => v === '' ? i : null).filter(v => v !== null);
        return open[Math.floor(Math.random() * open.length)];
    }

    function placeMove(index, player) {
        board[index] = player;
        cells[index].textContent = player;
        cells[index].classList.add(player.toLowerCase());
        cells[index].disabled = true;
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const i = parseInt(cell.dataset.index);
            if (gameOver || board[i] !== '') return;

            placeMove(i, human);

            const humanWin = checkWin(human);
            if (humanWin) return endGame('You win!', humanWin);
            if (checkDraw()) return endGame("It's a draw!", null);

            // Computer plays
            const move = computerMove();
            placeMove(move, computer);

            const compWin = checkWin(computer);
            if (compWin) return endGame('Computer wins!', compWin);
            if (checkDraw()) return endGame("It's a draw!", null);

            status.textContent = 'Your turn (X)';
        });
    });

    resetBtn.addEventListener('click', init);
    init();
})();
