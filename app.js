const express = require('express');
const bodyParser = require('body-parser');


const app = express();

// Database
const db = require('./config/db')


// Test DB
db.authenticate()
  .then(() => console.log('Database connected...'))
  .catch(err => console.log('Error: ' + err))

// middleware
app.use(express.json());

// User routes
app.use('/user', require('./routes/user'));

//auth route
app.use('/auth', require('./routes/auth'));

//client route
app.use('/client', require('./routes/client'));



app.listen(5000, () => {
    console.log("Server started on Port 5000");
})