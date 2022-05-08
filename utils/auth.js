const checkAuth = (req, res, next) => {
    console.log(req.session);
    // If the user isn't logged in, redirect them to the login route
    if (!req.session.logged_in) {
      res.redirect('/login');
    } else {
      next(); // Carry on
    }
  };
  
  module.exports = checkAuth;
  