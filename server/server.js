const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo app v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([
        {
            name: 'Lindsey',
            age: 38
        },
        {
            name: 'Carl Sagan',
            age: 150
        },
        {
            name: 'Henry VIII',
            age: 395
        }
    ])
})

app.listen(3000);

module.exports.app = app;