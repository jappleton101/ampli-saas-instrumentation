const bcrypt = require('bcrypt');
const pool = require('../utilities/postgresclient')
const authenticationController = {};

authenticationController.loginUser = async (req, res, next) => {
  try {
    const query = `SELECT * FROM users WHERE (email = $1);`;
    const values = [req.body.username];
    const selectQuery = await pool.query(query, values);

    if(selectQuery.rows.length === 0) {
      return next({
        message: {
          err: "User not found"
        },
        status: 400
      })
    }

    res.locals.userUuid = selectQuery.rows[0].uuid;
    res.locals.userId = selectQuery.rows[0].user_id;

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
    const query = `INSERT INTO users (first_name, last_name, email)
      VALUES ($1, $2, $3)
      RETURNING *;`;

    const { firstName, lastName, username } = req.body

    const values = [firstName, lastName, username];
    await pool.query(query, values);

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
