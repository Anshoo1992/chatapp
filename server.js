// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const cors=require('cors');
const bodyParser = require('body-parser');
var mongoose = require('mongoose');
var mongoOptions = { db: { safe: true ,useMongoClient: true,useNewUrlParser: true }};
var dbUrl=process.env.MONGODB_URI || "mongodb://anshoo:anshoo123@ds215563.mlab.com:15563/angular-chat-app";//"mongodb://anshoo:anshoo@ds141078.mlab.com:41078/toapazdb"



const app = express();
// Get our API routes
const api = require('./server/routes/api');
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist`
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes

app.use(cors());

app.use(express.static('./server/assets'));

app.use('/api', api);
/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);
mongoose.connect(dbUrl, mongoOptions, function (err, res) {
  if (err) { 
    console.log ('ERROR connecting to: ' + dbUrl + '. ' + err);
  } else {
    console.log ('Successfully connected to: ' + dbUrl);
  }
});




/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));