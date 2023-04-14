const express = require('express');
const router = express.Router();

const fs = require('fs');

const STORE_FILE = './data/store.json';

/* GET home page. */
  router.get('/', function (req, res, next) {
    fs.readFile(STORE_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        res.json(JSON.parse(data));
    });
});
  // res.send('respond with a resource');
  router.get('/:id', (req, res) => {
    fs.readFile(STORE_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        };
        const stores = JSON.parse(data);
        const store = store.find(store => store.id === req.params.id)
        if (!store) {
            res.status(404).send('Nothing found')
            return;
        }
        res.json(store)
    });
});

module.exports = router;
