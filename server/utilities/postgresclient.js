const dotenv = require('dotenv').config();
const pg = require('pg');

const db = new pg.Client(process.env.DATABASE_URL);

module.exports = db;

