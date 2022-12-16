const router = require("express").Router();
const User = require("../models/user");

router.post("/signUp", async (req, res) => {
  try {
    const preUser = await User.findOne({ email: req.body.email });
    if (!req.body.name.trim()) {
      return res.json({ msg: "Name is required" });
    }
    if (!req.body.id.trim()) {
      return res.json({ msg: "Id is required" });
    }
    if (!req.body.qualification.trim()) {
      return res.json({ msg: "Qualification is required" });
    }
    if (!req.body.subject.trim()) {
      return res.json({ msg: "Subject is required" });
    }
    if (!req.body.role.trim()) {
      return res.json({ msg: "Role is required" });
    }
    if (!req.body.email.trim()) {
      return res.json({ msg: "Email is required" });
    }
    if (!req.body.phoneNumber.trim()) {
      return res.json({ msg: "Phone number is required" });
    }
    if (!req.body.password.trim()) {
      return res.json({ msg: "Password is required" });
    }
    if (!req.body.confirmPassword.trim()) {
      return res.json({ msg: "Confirm Password is required" });
    }
    if (preUser) {
      return res.json({ msg: "User already Exists" });
    }
    if (req.body.password !== req.body.confirmPassword) {
      return res.json({ msg: "password do not match" });
    } else {
      const user = new User({
        name: req.body.name,
        id: req.body.id,
        qualification: req.body.qualification,
        subject: req.body.subject,
        role: req.body.role,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
      });
      await user.save();
      console.log(user);
      return res.json({ msg: "Successfully registered", user });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (user.password !== req.body.password) {
        return res.json({ msg: "Password do not match" });
      } else {
        return res.json({ msg: "login successfully", user });
      }
    } else {
      return res.json({ msg: "User not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
