const passport = require("passport");
const { ExtractJwt, Strategy: JWTStrategy } = require("passport-jwt");
const { Strategy: LocalStrategy } = require("passport-local");

const { User } = require("../models");

const jwtOtions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JWTStrategy(jwtOtions, async (payload, done) => {
    try {
      const user = User.findByPk(payload.id);
      if (user) return done(null, user);
    } catch (error) {
      return done(error);
    }
  })
);

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const user = await User.findOne({ username: username });

      if (!user) {
        return done(null, false);
      }

      if (!user.verifyPassword(password)) {
        return done(null, false);
      }

      return done(null, user);
    } catch (error) {
      done(error);
    }
  })
);

