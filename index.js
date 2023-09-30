const express = require("express");
const cors = require("cors");
const app = express();
// middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function (req, res) {
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
app.get("/hi", function (req, res) {
  res.send("hello world");
});
// app.get("/users", function (req, res) {
//   res.json([
//     {
//       id: "3537c9a0-f85b-49f7-ab01-caa6b6fb0e6a",
//       firstname: "Francisco ",
//       lastname: "B. Sanchez",
//       email: "FranciscoBSanchez@jourrapide.com",
//       phone: "330-313-5248",
//       password: "12121212",
//       confirmPassword: "12121212",
//       resetPassword: "",
//       resetPasswordToken: "2023-09-28T07:48:12.259G",
//       role: "user",
//       avater:
//         "https://images.pexels.com/photos/9950569/pexels-photo-9950569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       created: "2023-09-28",
//     },
//     {
//       id: "3537c9a0-f85b-49f7-ab01-caa6b6fb0e6b",
//       firstname: "Douglas ",
//       lastname: "C. Samuel",
//       email: "FranciscoBSanchez@jourrapide.com",
//       phone: "720-275-7943",
//       password: "12121224",
//       confirmPassword: "12121224",
//       resetPassword: "",
//       resetPasswordToken: "2023-09-28T07:48:12.259G",
//       role: "user",
//       avater:
//         "https://images.pexels.com/photos/6968548/pexels-photo-6968548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       created: "2023-09-28",
//     },
//     {
//       id: "3537c9a0-f85b-49f7-ab01-caa6b6fb0e6c",
//       firstname: "Dennis ",
//       lastname: "D. Brandt",
//       email: "DennisDBrandt@teleworm.us",
//       phone: "508-568-5060",
//       password: "12121258",
//       confirmPassword: "12121258",
//       resetPassword: "",
//       resetPasswordToken: "2023-09-28T07:48:12.259G",
//       role: "user",
//       avater:
//         "https://images.pexels.com/photos/4813340/pexels-photo-4813340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       created: "2023-09-28",
//     },
//   ]);
// });

// app.get("/rooms", function (req, res) {
//   res.json([
//     {
//       id: "dc82eea1-68d2-4bdd-abae-19fd44525e0d",
//       countryCity: "London,UK",
//       duration: "Oct 8-13",
//       price: "$72",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//       update: "",
//       created: "Oct 5 2023",
//     },
//     {
//       id: "b7639a0d-30da-4b70-b372-5d1d6b1b86d8",
//       countryCity: "Torino,Italy",
//       duration: "Oct 28-Nov 2",
//       price: "$49",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Oct 25 2023",
//     },
//     {
//       id: "8f505c1e-5815-42c8-9f7a-e7731aab73c7",
//       countryCity: "Milan,Italy",
//       duration: "Oct 12-17",
//       price: "$102",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Oct 8 2023",
//     },
//     {
//       id: "0e35851f-8a52-46b8-b2fa-064d560b5f33",
//       countryCity: "Lyon,France",
//       duration: "Jul 27-Aug 1",
//       price: "$78",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Jul 21 2023",
//     },
//     {
//       id: "004ae171-9061-49ff-9137-39449291cc76",
//       countryCity: "Bercelona,Spain",
//       duration: "Jul 28-Aug 2",
//       price: "$90",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Jul 22 2023",
//     },
//   ]);
// });
// app.get("/pools", function (req, res) {
//   res.json([
//     {
//       id: "79eaa45a-08e3-4d2f-bbba-01db4fbd4742",
//       countryCity: "London,UK",
//       duration: "Oct 8-13",
//       price: "$72",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//       update: "",
//       created: "Oct 5 2023",
//     },
//     {
//       id: "b8e79093-60cc-451d-96e6-a6b6fd242dd6",
//       countryCity: "Torino,Italy",
//       duration: "Oct 28-Nov 2",
//       price: "$49",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Oct 25 2023",
//     },
//     {
//       id: "0e029683-c5b4-4be2-a4ff-0f3dbeba90a4",
//       countryCity: "Milan,Italy",
//       duration: "Oct 12-17",
//       price: "$102",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Oct 8 2023",
//     },
//     {
//       id: "02c9bf29-3f25-4f17-bb55-e3424e50ecf4",
//       countryCity: "Lyon,France",
//       duration: "Jul 27-Aug 1",
//       price: "$78",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Jul 21 2023",
//     },
//     {
//       id: "0b7d6eaa-4c97-446c-8b7a-8add36e6ea8d",
//       countryCity: "Bercelona,Spain",
//       duration: "Jul 28-Aug 2",
//       price: "$90",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Jul 22 2023",
//     },
//   ]);
// });
// app.get("/countryside", function (req, res) {
//   res.json([
//     {
//       id: "c41bb523-f87d-4b17-a4e0-8d03822b41d0",
//       countryCity: "London,UK",
//       duration: "Oct 8-13",
//       price: "$72",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//       update: "",
//       created: "Oct 5 2023",
//     },
//     {
//       id: "c1342f59-6d03-4ee7-a691-e037dd0232d8",
//       countryCity: "Torino,Italy",
//       duration: "Oct 28-Nov 2",
//       price: "$49",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Oct 25 2023",
//     },
//     {
//       id: "5b878079-648c-413c-b503-76ad4d0512a8",
//       countryCity: "Milan,Italy",
//       duration: "Oct 12-17",
//       price: "$102",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Oct 8 2023",
//     },
//     {
//       id: "916ce67e-ab2d-4e8f-9cd6-e280310df034",
//       countryCity: "Lyon,France",
//       duration: "Jul 27-Aug 1",
//       price: "$78",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Jul 21 2023",
//     },
//     {
//       id: "4548a98a-d31b-49c1-a54c-c3bc9525d120",
//       countryCity: "Bercelona,Spain",
//       duration: "Jul 28-Aug 2",
//       price: "$90",
//       whenToStay: "night",
//       roomImage:
//         "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//       update: "",
//       created: "Jul 22 2023",
//     },
//   ]);
// });

app.get("*", function (req, res) {
  res.send("404 - Not Found");
});

app.listen(8000);
