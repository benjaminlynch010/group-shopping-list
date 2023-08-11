const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// POST route

router.post('/', (req, res) => {
    
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

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM list`;
    pool.query(queryText)
    .then((result)=>{
        res.send(result.rows);
    }) .catch((error)=>{
        console.log("error in server GET", error);
        res.sendStatus(500);
    });
})

router.delete('/', (req, res) => {
  const queryText = `DELETE FROM "list"`
  pool.query(queryText)
    .then((response) => {
      res.sendStatus(200)
    }).catch((error) => {
      console.log("Error Deleting `list` | ", error)
      res.sendStatus(500)
    })
})

router.delete('/singleitem/:id', (req, res) => {
  const params = req.params.id
  const queryText = `DELETE FROM "list" WHERE "id"=$1;`
  pool.query(queryText, [params])
    .then((response) => {
      res.sendStatus(200)
    }).catch((error) => {
      console.log("Error Deleting `list` item | ", error)
      res.sendStatus(500)
    })
})

router.put('/', (req, res) => {
  const queryText = `
  UPDATE "list"  
  SET "purchased"=false`;

  pool.query(queryText)
    .then((response) => {
      console.log('Reset purchased status successful')
      res.sendStatus(200)
    }).catch((error) => {
      console.log('Error resetting `purchased` | ', error)
      res.sendStatus(500)
    })
})

router.put('/singleitem/:id', (req, res) => {
  const params = req.params.id
  const queryText = `
  UPDATE "list"  
  SET "purchased"= NOT "purchased"
  WHERE "id"=$1;`

  pool.query(queryText, [params])
    .then((response) => {
      console.log('Toggled purchased status successful')
      res.sendStatus(200)
    }).catch((error) => {
      console.log('Error toggling `purchased` | ', error)
      res.sendStatus(500)
    })
})

module.exports = router;