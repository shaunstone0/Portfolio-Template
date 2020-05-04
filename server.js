const express = require('express');
const dotenv = require('dotenv').config({ path: './config/config.env' });
const morgan = require('morgan');
const colors = require('colors');
const errorHandler = require('./middleware/errorHandler');
const bodyParser = require('body-parser');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const xssClean = require('xss-clean');
const connectDB = require('./config/db');
const path = require('path')
// Express variable
const app = express();

// Connect to DB
connectDB();

// Route files
const projects = require('./routes/projects');
// Body parser
app.use(bodyParser.json());

//Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Sanitize data
app.use(mongoSanitize());

// Set secuity headers
app.use(helmet());

// Prevent XSS attacks
app.use(xssClean());

// Mount Routes
app.use('/projects', projects);


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Must got Below Routes to Catch Errors
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit promise
  server.close(() => process.exit(1));
});
