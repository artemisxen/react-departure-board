var express = require('express');
var router = express.Router();
var request = require("request");
require('dotenv').config()
var data = null;

setInterval(function() {
  request("http://transportapi.com/v3/uk/train/station/CST/live.json?type=departure&app_id=" + process.env.APP_ID + "&app_key=" + process.env.APP_KEY, function(error, response, body) {
    data = body;
  });
}, 120000);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  if (data) {res.send(data)};
});

module.exports = router;
