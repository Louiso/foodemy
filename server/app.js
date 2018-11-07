const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(logger('dev'));


app.post('/login',(req,res)=>{
  const { username , password } = req.body;
  req.json({
    mensaje: 'Hola Mundo'
  });
});

module.exports = app;
