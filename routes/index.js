var express = require('express');
var router = express.Router();
const mongoClient = require('mongodb').MongoClient;
const assert  = require('assert');
const objectID = require('mongodb').ObjectID;
const fs = require("fs");
let count = 0;
const mongoose = require('mongoose');
let User = require('./user');
/* GET home page. */
router.get('/', function(req, res, next) {
  count = count+1;
  fs.writeFile("details/"+process.pid+".txt",count,(err,data)=>{
    if(err){
      return console.log(err);
    } else  {
      User.find({},(err,users)=>{
        if(err){
          console.log(err)
        } else {
          return res.status(200).json(users);
        }
      })
    }
  })

});

module.exports = router;
