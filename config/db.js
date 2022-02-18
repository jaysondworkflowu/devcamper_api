const mongoose = require('mongoose');
const { connect } = require('../routes/bootcamps');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
};
console.log(process.env.NODE);
module.exports = connectDB;
