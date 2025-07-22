const pool = require('../utilities/postgresclient')
const tasksController = {};

authenticationController.getUserTasks = async (req, res, next) => {
  try {
    const query = `SELECT * FROM tasks WHERE (email = $1);`;

    const values = [req.body.username];
    const selectQuery = await pool.query(query, values);

    res.locals.userId = selectQuery.rows[0].uuid;

    return next();
  } catch (e) {
    return next({
      message: {
        err: e.toString(),
      },
    });
  }
};

authenticationController.getTeamTasks = async (req, res, next) => {
  try {

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

module.exports = tasksController;
