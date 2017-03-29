/**
 * Created by Denis on 29.03.2017.
 */
'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

/*
app.use('/', express.static('pages'));
app.use('/login', express.static('pages/index.html'));
app.use('/signup', express.static('pages/index.html'));
app.use('/leaderboard', express.static('pages/index.html'));
app.use('/about', express.static('pages/index.html'));
app.use('/profile', express.static('pages/index.html'));
app.use('/game', express.static('pages/index.html'));
app.use('/dist', express.static('dist'));
app.use('/src', express.static('src'));
app.use('/vendor', express.static('vendor'));*/

// Запускаем сервер
app.listen(PORT, function () {
    console.log(`Server listen ${PORT} port`);
});