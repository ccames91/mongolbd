const mongoose = require('mongoose');


const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Connected to the database');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = { connectToDatabase };
