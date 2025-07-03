const bcrypt = require('bcrypt');
const pool = require('../utilities/postgresclient')
// const models = require('../models/userModel'); Revisit if we want to do validation
const authenticationController = {};

authenticationController.loginUser = async (req, res, next) => {
  try {
    console.log('Login User')
    res.locals = { message: "user logged in" };
    // const user = await models.Users.find(
    //   { username: req.body.username },
    //   null,
    //   {}
    // );

    // if (user.length === 0) {
    //   return next({
    //     message: {
    //       err: 'Incorrect username/password combination.',
    //     },
    //     status: 401,
    //   });
    // }

    // const passwordMatch = await bcrypt.compare(
    //   req.body.password,
    //   user[0].password
    // );

    // if (!passwordMatch) {
    //   return next({
    //     message: {
    //       err: 'Incorrect username/password combination.',
    //     },
    //     status: 401,
    //   });
    // }

    // res.locals.userId = user[0]._id;

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
    res.locals = { message: "user created" };
    // const user = await models.Users.find(
    //   { username: req.body.username },
    //   null,
    //   {}
    // );

    // if (user.length > 0) {
    //   return next({
    //     message: {
    //       err: 'User already exists',
    //     },
    //     status: 400,
    //   });
    // }

    // const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // const newUser = await models.Users.create({
    //   username: req.body.username,
    //   password: hashedPassword,
    // });

    // res.locals.userId = newUser._id;

    // res.locals.message = 'User successfully created';
    return next();
  } catch (e) {
    console.log(e);
    return next({
      message: {
        err: e,
      },
    });
  }
};

module.exports = authenticationController;
