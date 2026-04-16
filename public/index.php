<?php

declare(strict_types=1);

$pageTitle = 'Anne & Bryan';

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
        <section class="hero">
            <h1>Anne &amp; Bryan</h1>
            <p>Welcome to our corner of the internet.</p>
        </section>
    </main>

    <footer>
        <p>&copy; <?= date('Y') ?> Anne &amp; Bryan St. Clair</p>
    </footer>
</body>
</html>
