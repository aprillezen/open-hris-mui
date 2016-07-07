import express from 'express'
import path from 'path'
import fs from 'fs'

var router = express.Router();

var db = path.join(__dirname,"db.json");

router.get('/', function(req, res){
  fs.readFile(db, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
})

module.exports = router