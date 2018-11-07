const { PORT, urlMongo } = require('./config');
const mongoose = require('mongoose');
const app = require('./app');
mongoose.connect(urlMongo, { useNewUrlParser : true});

const db = mongoose.connection;

db.on('open',()=>{
  console.log('Base de datos conectada');
  app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`);
  });
});