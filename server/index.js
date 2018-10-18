/*jshint esversion: 6 */

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({message: 'hello world!'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

