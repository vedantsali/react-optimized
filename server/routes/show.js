
var express = require('express')
var router = express.Router();
const fs = require('fs');
const path = require('path');
const { generateAuthToken, USERS, auth } = require('./jwt.js');

router.post('/login', function (req, res) {
  // save the bear and check for errors
  console.log(req.body);
  const username = req.body.username
  const password = req.body.password
  if (!USERS[username] || !USERS[username] === password) {
    return res.status(401).send({ 'error': 'Authentication failed. User not found.' });
  } else {
    return res.json({
      token: generateAuthToken(username)
    });
  }
});

/* 1) list of all TV Shows using GET*/
router.get('/getAllShows', auth, function (req, res, next) {

  // let rawdata = fs.readFileSync('D:\\Sample\\TV Show\\routes\\shows.json');
  const dirPath = path.join(__dirname, 'shows.json');
  let rawdata = fs.readFileSync(dirPath);
  let showsData = JSON.parse(rawdata);
  res.json(showsData);
});


router.get('/getShow/:id', auth, function (req, res, next) {
  const dirPath = path.join(__dirname, 'shows.json');
  let rawdata = fs.readFileSync(dirPath);
  let showsData = JSON.parse(rawdata);
  let foundShow = showsData.find(i => i.id == req.params.id);
  if (foundShow) {
    res.json(foundShow);
  } else {
    res.json("No TV Show found");
  }
});

router.get('/getFirstNShows/:id', auth, function (req, res, next) {
  const dirPath = path.join(__dirname, 'shows.json');
  let rawdata = fs.readFileSync(dirPath); let showsData = JSON.parse(rawdata);
  let id = parseInt(req.params.id);
  let foundShow = showsData.filter((i, index) => index <= id);
  if (foundShow) {
    res.json(foundShow);
  } else {
    res.json("No TV Show found");
  }
});

router.get('/getNextNShows/:id/:id1', auth, function (req, res, next) {
  const dirPath = path.join(__dirname, 'shows.json');
  let rawdata = fs.readFileSync(dirPath);
  let showsData = JSON.parse(rawdata);
  let id = parseInt(req.params.id);
  let id1 = parseInt(req.params.id1);
  let foundShow = showsData.filter((i, index) => index <= id1 && index >= id);
  if (foundShow) {
    res.json(foundShow);
  } else {
    res.json("No TV Show found");
  }
});

router.get('/list/search/:searchText', auth, function (req, res, next) {
  const dirPath = path.join(__dirname, 'shows.json');
  let rawdata = fs.readFileSync(dirPath);
  let showsData = JSON.parse(rawdata);
  let foundShow = showsData.filter(i => i.title && i.title.toString().toLowerCase().includes(req.params.searchText.toLowerCase()));
  if (foundShow) {
    res.json(foundShow);

  } else {
    res.json("No TV Show found");
  }
});

module.exports = router