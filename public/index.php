<?php

declare(strict_types=1);

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$page = trim($path, '/') ?: 'home';
$pageTitle = match ($page) {
    'about' => 'About Us — Anne & Bryan',
    default => 'Anne & Bryan',
};

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($pageTitle) ?></title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <header>
        <nav>
            <a href="/" class="logo">Anne &amp; Bryan</a>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
            </ul>
        </nav>
    </header>

    <main>
<?php if ($page === 'home'): ?>
        <section class="hero">
            <h1>Anne &amp; Bryan</h1>
            <p>Welcome to our corner of the internet.</p>
        </section>

        <section class="weather" id="weather">
            <h2>Mountain View, CA</h2>
            <div class="weather-loading">Loading weather...</div>
        </section>

        <section class="game">
            <h2>Tic-Tac-Toe</h2>
            <p id="game-status">Your turn (X)</p>
            <div class="board" id="board">
                <button class="cell" data-index="0"></button>
                <button class="cell" data-index="1"></button>
                <button class="cell" data-index="2"></button>
                <button class="cell" data-index="3"></button>
                <button class="cell" data-index="4"></button>
                <button class="cell" data-index="5"></button>
                <button class="cell" data-index="6"></button>
                <button class="cell" data-index="7"></button>
                <button class="cell" data-index="8"></button>
            </div>
            <button class="reset-btn" id="reset">New Game</button>
        </section>
<?php elseif ($page === 'about'): ?>
        <section class="about">
            <h1>About Us</h1>
            <p>This is about Anne and Bryan — two people sharing one life, building something together, and having fun along the way. Whether it's adventures, projects, or just the everyday moments, this site is our little space to capture it all. Plus two.</p>
        </section>
<?php else: ?>
        <section class="hero">
            <h1>Page Not Found</h1>
            <p>Sorry, we couldn't find what you're looking for.</p>
        </section>
<?php endif; ?>
    </main>

<?php if ($page === 'home'): ?>
    <script src="/js/weather.js"></script>
    <script src="/js/tictactoe.js"></script>
<?php endif; ?>
    <footer>
        <p>&copy; <?= date('Y') ?> Anne &amp; Bryan St. Clair</p>
    </footer>
</body>
</html>
