const router = require('express').Router();
const fs = require('fs')
const { readAndRemove, readFromFile, readAndAppend } = require('../helpers/fsUtils');


function randomId() {
    return (Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
    );
}



router.get('/notes', function (req, res) {
    readFromFile('./db/db.json').then(data => res.json(JSON.parse(data)))
})








module.exports = router