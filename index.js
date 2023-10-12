const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/routes'); 
require('dotenv').config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
