const express = require('express');
const dotenv = require('dotenv');
const { send } = require('express/lib/response');
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// Load env variables
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Body Parser
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

// Dev logging middleware
if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));

// Mount routes

app.use('/api/v1/bootcamps', bootcamps);

app.use(errorHandler);

// // Sending a log
// app.get('/', (req, res) => {
//   res.send('Hello fron express');
// });

// // Creating Object into JSON
// app.get('/', (req, res) => {
//   res.send({ name: 'Jayson Diaz' });
// });

// Sending status 1
// app.get('/', (req, res) => {
//   res.sendStatus(400);
// });

// Creating Routes and Response in Express

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,

  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.blue
      .bold
  )
);
