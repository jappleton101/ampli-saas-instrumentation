const bcrypt = require('bcrypt');
const pool = require('../utilities/postgresclient')
const authenticationController = {};

authenticationController.loginUser = async (req, res, next) => {
  try {
    console.log('Login User')
    console.log(req.body.username)

    const query = `SELECT * FROM users WHERE (email = $1);`;

    const values = [req.body.username];

    const selectQuery = await pool.query(query, values);
    console.log(selectQuery.rows);

    const query2 = `SELECT * FROM tasks;`;
    const selectQuery2 = await pool.query(query2);
    console.log(selectQuery2.rows);

    return next();
  } catch (e) {
    return next({
      message: {
        err: e.toString(),
      },
    });
  }
};

authenticationController.createNewUser = async (req, res, next) => {
  try {
    console.log("Create User")
    console.log(req.body);

    const query = `INSERT INTO users (first_name, last_name, email)
      VALUES ($1, $2, $3)
      RETURNING *;`;

    const { firstName, lastName, username } = req.body

    const values = [firstName, lastName, username];
    const insertQuery = await pool.query(query, values);
    console.log(insertQuery);

    return next();
  } catch (e) {
    console.log(e.message);
    return next({
      message: {
        err: e.message,
      },
      status: 400
    });
  }
};

module.exports = authenticationController;
