const express = require("express");
const app = express();
const routes = require('./routes')
const { dbName, client } = require("./configs/mongodbConfig");
const morgan = require('morgan')
const PORT = process.env.PORT || 3001
 
app.use(morgan('tiny'))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

client.connect(err => {
  if (err) console.log(err);
  else console.log("connected mongodb succesfully");
  const db = client.db(dbName);

  app.use((req, res, next) => {
    req.db = db;
    next();
  });

  app.use('/',routes);
  app.use('*',(req, res) => {
    res.send('Entered to sukkariqu')
  });
  app.listen(PORT, () => {
    console.log("Server sukkariqu connected on port", PORT);
  });
});
