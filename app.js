

const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');
const nunjucks = require('nunjucks');

// templating boilerplate setup
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true});


// This is the middleware - does logging stuff
app.use(morgan('dev'));
// app.use(function (req, res, next) {
  //   console.log(chalk.blue('Something is running!!!!! And it is BLUUUUUUEEEEE'));
  //   next(); // gotta run next or else nothing else will run afterwards
  // })
  
  
  
  
  
  app.get('/', function(req, res) {
    res.send('you got the root');
  });

  

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
