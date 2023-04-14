const express = require('express');
const router = express.Router();

const fs = require('fs');

const CUSTOMERS_FILE = './data/customers.json';

/* GET users listing. */
  router.get('/', function (req, res, next) {
    fs.readFile(CUSTOMERS_FILE, 'utf8', (err, data) => {
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
    fs.readFile(CUSTOMERS_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        };
        const customers = JSON.parse(data);
        const customer = customer.find(customer => customer.id === req.params.id)
        if (!customer) {
            res.status(404).send('Nothing found')
            return;
        }
        res.json(customers)
    });
});


module.exports = router;
