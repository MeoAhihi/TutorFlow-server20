const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { User } = require("../models");

// const opts = {
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.JWT_SECRET,
// };

// passport.use(
//   new Strategy(opts, async (payload, done) => {
//     try {
//       const user = User.findByPk(payload.id);
//       if (user) return done(null, user);
//     } catch (error) {
//       return done(error);
//     }
//   })
// );

router.post("/register", async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: bcrypt.hashSync(password, 10),
    });

    const accessToken = jwt.sign(
      {
        id: user.id,
        role: "tutor",
        firstName: user.firstName,
        lastName: user.lastName,
        avatarUrl: userExists.avatarUrl,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.status(201).json({
      message: "user registered successfully",
      accessToken: accessToken,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    //check if user exists
    const userExists = await User.findOne({ where: { email: req.body.email } });
    if (!userExists)
      return res.status(400).json({ message: "user does not exist" });

    // console.log(
    //   bcrypt.hashSync(req.body.password, "$2b$10$Nq9M2mDPIH07MKTH9Ez8v."),
    //   userExists
    // );
    // check if password is correct
    const isMatched = await bcrypt.compare(
      req.body.password,
      userExists.password
    );
    if (!isMatched)
      return res.status(400).json({ message: "incorrect password" });

    // var role = undefined;
    // if (await Tutor.count({ where: { id: userExists.id } })) role = "tutor";
    // if (await Student.count({ where: { id: userExists.id } })) role = "student";
    // if (await Parent.count({ where: { id: userExists.id } })) role = "parent";

    // generate access token
    const accessToken = jwt.sign(
      {
        id: userExists.id,
        role: "tutor",
        firstName: userExists.firstName,
        lastName: userExists.lastName,
        avatarUrl: userExists.avatarUrl,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res
      .status(200)
      .json({ message: "user logged in", accessToken: accessToken });
  } catch (error) {
    console.log(error);
    next(error);
  }
});

module.exports = router;
