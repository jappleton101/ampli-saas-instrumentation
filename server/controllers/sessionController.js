const sessionController = {};

sessionController.createNewSession = async (req, res, next) => {
  try {
    const sessionData = { userId: res.locals.userId, userUuid: res.locals.userUuid };

    req.session.regenerate((err) => {
      if (err) console.log(err);
      return next();
    });

    req.session.sessionData = sessionData;
    return next();
  } catch (e) {
    console.log(e);
    return next({ err: e });
  }
};

sessionController.checkSession = async (req, res, next) => {
  try {
    if (!req.session) {
      return next();
    }
    res.locals.sessionData = req.session.sessionData;
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
    delete res.locals.sessionData
    return next();
  } catch (e) {
    console.log(e);
    return next({ message: { err: e } });
  }
};

module.exports = sessionController;
