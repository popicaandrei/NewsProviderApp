const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config')

app.listen(3001);
const newsRoute = require('./routes/news');
app.use(cors());
app.use('/news', newsRoute);
app.use(bodyParser.json());

//connect to db
mongoose.connect(process.env.DB_CONNECTION,() => console.log("connected"));