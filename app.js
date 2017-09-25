

const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');
const routes = require('./routes');
const fs = require('fs');
const path = require('path');
const mime = require('mime');

// templating boilerplate setup
// app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true});


// This is the middleware - does logging stuff
app.use(morgan('dev'));
// app.use(function (req, res, next) {
  //   console.log(chalk.blue('Something is running!!!!! And it is BLUUUUUUEEEEE'));
  //   next(); // gotta run next or else nothing else will run afterwards
  // })

app.use(express.static(__dirname + '/public'));
  

app.use('/', routes);
  
  
  
  
  app.get('/', function(req, res) {
    res.send('you got the the mother fucking root');
  });
 
  

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
