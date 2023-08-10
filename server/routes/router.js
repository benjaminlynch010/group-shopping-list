const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST route

router.post('/', (req, res)=>{
    
    let listObject = req.body;
    console.log('POST req.body', req.body.item);

    let queryText = 'INSERT INTO list ("item", "quantity", "unit") VALUES ($1, $2, $3);'
    pool.query(queryText, [listObject.item, listObject.quantity, listObject.unit])
    .then((result)=>{
        res.sendStatus(200);
    }).catch((error)=>{
        console.log("error in server POST", error);
        res.sendStatus(500);
    });
});

router.get('/', (req, res) =>{

    const queryText = `SELECT * FROM list`;
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows);
    }) .catch((error)=>{
        console.log("error in server GET", error);
        res.sendStatus(500);
    });
})

module.exports = router;