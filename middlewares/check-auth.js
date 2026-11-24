//function checkAuthStatus(req, res, next) {
// const uid = req.session.uid;

//if (!uid) {
//  return next();
//}

//res.locals.uid = uid;
//res.locals.isAuth = true;
//res.locals.isAdmin = req.session-isAdmin;
//next();
//}

//module.exports = checkAuthStatus;

function checkAuthStatus(req, res, next) {
  const session = req.session || {};
  const uid = session.uid;

  if (!uid) {
    return next();
  }

  res.locals.uid = uid;
  res.locals.isAuth = true;
  res.locals.isAdmin = !!session.isAdmin;
  next();
}

module.exports = checkAuthStatus;
