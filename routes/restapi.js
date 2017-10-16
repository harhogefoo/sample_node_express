/**
 * Created by 01018521 on 2017/10/16.
 */
var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;

// MongoDB用ファイルを指定
var collection = require('../mongo');
var COL = 'hoge';

// For Cross Origin
router.all('/*', function (req, res, next) {
  res.contentType('json');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// GET find
router.get('/', function(req, res) {
  collection(COL).find().toArray(function(err, docs) {
    res.send(docs);
  })
});

// 写真のサンプルデータ
var photoList = [
  {
    id: "001",
    name: "photo001.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo001.jpg"
  },{
    id: "002",
    name: "photo002.jpg",
    type: "jpg",
    dataUrl: "http://localhost:3000/data/photo002.jpg"
  }
]

router.get("/hello", function(req, res, next){
  res.json({id: "001", name: "photo001.jpg"});
});

router.get("/photo/list", function(req, res, next) {
  res.json(photoList);
});

router.get("/photo/:photoId", function(req, res, next){
  var photo;
  for (var i = 0; i < photoList.length; i++) {
    if (photoList[i].id === req.params.photoId) {
      photo = photoList[i];
    }
  }
  res.json(photo)
});

module.exports = router;
