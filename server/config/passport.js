import pkg from "passport-jwt";
const JwtStrategy = pkg.Strategy;
import * as dotenv from "dotenv";
import User from "../models/User.js";
const ExtractJwt = pkg.ExtractJwt;


dotenv.config();
let opts = {};


opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

export default (passport) => {
  passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
      try {
        const user = await User.findById(jwt_payload._id);
        
        if (user) {
          return done(null, user);
        } else {
          return done(null, false); // No user found
        }
      } catch (err) {
        return done(err, false); // Error occurred
      }
    })
  );
};
