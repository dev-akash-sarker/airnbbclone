const express = require("express");
const routerOne = express.Router();

routerOne.get("/user", (req, res) => {
  res.json([
    {
      id: "3537c9a0-f85b-49f7-ab01-caa6b6fb0e6a",
      firstname: "Francisco ",
      lastname: "B. Sanchez",
      email: "FranciscoBSanchez@jourrapide.com",
      phone: "330-313-5248",
      password: "12121212",
      confirmPassword: "12121212",
      resetPassword: "",
      resetPasswordToken: "2023-09-28T07:48:12.259G",
      role: "user",
      avater:
        "https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      created: "2023-09-28",
    },
    {
      id: "3537c9a0-f85b-49f7-ab01-caa6b6fb0e6b",
      firstname: "Douglas ",
      lastname: "C. Samuel",
      email: "FranciscoBSanchez@jourrapide.com",
      phone: "720-275-7943",
      password: "12121224",
      confirmPassword: "12121224",
      resetPassword: "",
      resetPasswordToken: "2023-09-28T07:48:12.259G",
      role: "user",
      avater:
        "https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      created: "2023-09-28",
    },
    {
      id: "3537c9a0-f85b-49f7-ab01-caa6b6fb0e6c",
      firstname: "Dennis ",
      lastname: "D. Brandt",
      email: "DennisDBrandt@teleworm.us",
      phone: "508-568-5060",
      password: "12121258",
      confirmPassword: "12121258",
      resetPassword: "",
      resetPasswordToken: "2023-09-28T07:48:12.259G",
      role: "user",
      avater:
        "https://images.pexels.com/photos/4813340/pexels-photo-4813340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      created: "2023-09-28",
    },
  ]);
});

module.exports = routerOne;
