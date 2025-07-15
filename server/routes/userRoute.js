const express = require('express');
const authenticationController = require('../controllers/authenticationController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.post(
  '/register',
  authenticationController.createNewUser,
  sessionController.createNewSession,
  (req, res) => {
    res.status(200);
    return res.send(res.locals);
  }
);

router.post(
  '/login',
  authenticationController.loginUser,
  sessionController.createNewSession,
  (req, res) => {
    res.status(200);
    return res.send(res.locals);
  }
);

router.post('/logout', sessionController.deleteSession, (req, res) => {
  res.status(200);
  return res.send(res.locals);
});

router.get('/session', sessionController.checkSession, (req, res) => {
  res.status(200);
  return res.send(res.locals);
});

module.exports = router;
