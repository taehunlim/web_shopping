const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

require('./db');

const userRouter = require('./route/user');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(morgan('dev'));

app.use('/user', userRouter);

const PORT =  process.env.PORT || 6000
app.listen(PORT, () => console.log(`server running on port ${PORT}`));