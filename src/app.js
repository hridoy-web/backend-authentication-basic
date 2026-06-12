const express = require('express')
const mongoose = require('mongoose')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hi, Server is Runing Fine')
})

module.exports = app;