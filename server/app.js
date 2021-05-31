const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.listen(3001);
app.use(cors());
app.use(express.json());
require('dotenv/config');

const newsRoute = require('./routes/news');
const authRoute = require('./routes/auth');

app.use('/api/news', newsRoute);
app.use('/api/user', authRoute);

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));