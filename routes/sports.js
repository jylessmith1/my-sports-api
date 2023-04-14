const express = require('express');
const router = express.Router();
const fs = require('fs');

const SPORTS_FILE = './data/sports.json';

/* GET users listing. */
router.get('/', function (req, res, next) {
    fs.readFile(SPORTS_FILE, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        }
        res.json(JSON.parse(data));
    });
});

//Get Sports by id
router.get('/:id', (req, res) => {
    fs.readFile(SPORTS_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        };


        const sports = JSON.parse(data);
        const sport = sports.find(sport => sport.id === req.params.id)
        if (!sport) {
            res.status(404).send('Nothing found')
            return;
        }
        res.json(sport)
    });
});

router.post('/', (req, res) => {
    fs.readFile(SPORTS_FILE, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).send('There was a problem reading the file.')
            return;
        };

        const sports = JSON.parse(data);
        const newPlayer = {
            id: (sports.length + 1).toString(),
            name: req.body.name,
            position: req.body.position,
            team: req.body.team
        };
        sports.push(newPlayer);
        fs.writeFile(SPORTS_FILE, JSON.stringify(sports), err => {
            if (err) {
                console.error(err);
                res.status(500).send('There was a problem reading this file.')
                return;
            }

            res.json(newPlayer)
            console.log(newPlayer)
        })
    });

})

module.exports = router;
