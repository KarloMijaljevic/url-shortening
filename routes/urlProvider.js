// Import npm packages
const express = require("express");

// Object declarations
const router = express.Router();

// @route ==> GET url
// @description ==> Client sends the short URL and server has to respond with a redirect using the CACHed URL
router.get("/", (req, res) => {
   res.status(200).json({ "message": "Hello there :)" });
})

module.exports = router