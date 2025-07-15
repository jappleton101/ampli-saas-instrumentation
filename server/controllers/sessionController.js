const sessionController = {};

sessionController.createNewSession = async (req, res, next) => {
  try {
    const sessionData = { userId: res.locals.userId };

    req.session.regenerate((err) => {
      if (err) console.log(err);
      req.session.sessionData = sessionData;
      return next();
    });
    res.locals.sessionId = req.sessionID;
  } catch (e) {
    console.log(e);
    return next({ err: e });
  }
};

sessionController.checkSession = async (req, res, next) => {
  try {
    if (!req.session.sessionData) {
      res.locals.sessionValid = false;
      return next();
    }

    res.locals.sessionValid = true;

    return next();
  } catch (e) {
    console.log(e);
    return next({ message: { err: e } });
  }
};

sessionController.deleteSession = async (req, res, next) => {
  try {
    req.session.destroy((err) => {
      if (err) console.log(err);
    });
    return next();
  } catch (e) {
    console.log(e);
    return next({ message: { err: e } });
  }
};

module.exports = sessionController;
