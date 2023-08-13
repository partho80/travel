import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
      photo: req.body.photo,
    });

    await newUser.save();
    res.status(200).json({ success: true, message: "Successfully Created" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed" });
  }
};
export const login = async (req, res) => {
  const email = req.body.email;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }
    const checkCorrectPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!checkCorrectPassword) {
      return res
        .status(402)
        .json({ success: false, message: "Password not correct" });
    }
    const { password, role, ...rest } = user._doc;
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );
    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn,
      })
      .status(200)
      .json({ token, success: true, message: "Loggedin", data: { ...rest } });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed" });
  }
};
