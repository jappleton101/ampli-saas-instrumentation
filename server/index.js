const express = require('express');
const path = require('path');
const session = require('express-session');
const redis = require('redis');
const connectRedis = require('connect-redis');
require('dotenv').config();


const redisClient = redis.createClient({ url: process.env.REDIS_URL });

const app = express();

let redisStore = new connectRedis.RedisStore({
  client: redisClient,
  prefix: 'amplisaas:',
});

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      maxAge: 3600000,
    },
    store: redisStore,
  })
);

redisClient.connect();

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

app.use('/', (err, req, res, next) => {
  console.log(err);
  const defaultError = {
    log: 'Express error handler caught unknown error',
    status: 500,
    message: { err: 'An error occurred.' },
  };
  const errorObject = Object.assign({}, defaultError, err);
  return res.status(errorObject.status).json(errorObject.message);
});

app.listen(3000, () => {
  console.log('App listening on port 3000');
});
