const db = require('./db');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
  passport.use(
    new localStrategy((email, password, done) => {
      const query = 'SELECT * FROM userTest.account where email = ?';
      db.query(query, [email], (err, rows) => {
        if (err) throw err;
        if (rows.length === 0) {
          return done(null, false);
        }
        bcrypt.compare(password, rows[0].password, (err, result) => {
          if (err) throw err;
          if (result === true) {
            return done(null, rows[0]);
          } else {
            return done(null, false);
          }
        });
      });
    })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    const query = 'SELECT * FROM userTest.account where id = ?';
    db.query(query, [id], (err, rows) => {
      if (err) throw err;
      const userInfo = {
        id: rows[0].id,
        email: rows[0].email,
      };
      done(null, userInfo);
    });
  });
};
