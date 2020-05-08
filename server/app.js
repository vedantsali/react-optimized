var express = require('express')
var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

var tvShows = require('./routes/show')

app.set('port', 5000);

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin,X-Rqeuested-With,Content-Type,Accept, x-access-token");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
    next();
})

app.use('/api', tvShows)

app.listen(app.get('port'), function () {
    console.log('Rest Server running on port 5000');
})