

const express = require('express');
const app = express();
const chalk = require('chalk');
const morgan = require('morgan');




// This is the middleware - does logging stuff

app.use(function (req, res, next) {
  console.log(chalk.blue('Something is running!!!!! And it is BLUUUUUUEEEEE'));
  next(); // gotta run next or else nothing else will run afterwards
})





app.get('/', function(req, res) {
  res.send('Hello World! Testing Nodemon!!!');
   });


app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
