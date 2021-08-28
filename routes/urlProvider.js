// Import npm packages
const express = require("express");
const validator = require("validator");
const NodeCache = require("node-cache");
const randomstring = require("randomstring");

// Object declarations
const router = express.Router();
const myCache = new NodeCache();

// @route ==> POST url
// @description ==> Client sends a URL and server has to respond with a short version and the old version
router.post("/", (req, res) => {
   var url = req.body.url;
   var shortUrl = "";
   // URL checking and shortening
   if (validator.isURL(url)) {
      // OK request response
      // Simple URL fix, only works for .com and regular www. web pages
      url = !url.includes("www") ? ("www." + url) : url;
      url = (!url.includes("https") && !url.includes("http")) ? ("https://" + url) : url;
      url = !url.includes("com") ? (url + ".com") : url;
      shortUrl = shortenUrl(url);
      res.status(200).json({ "shortUrl": shortUrl, "url": url });
   }
   else {
      // Bad request response
      res.status(400).json({ "error": "Given URL is NOT valid >_<" });
   }
})

// @route ==> GET url
// @description ==> Client sends the short URL and server has to respond with a redirect using the CACHed URL
router.get("/", (req, res) => {
   const shortUrl = req.body.shortUrl;
   var url = "";
   // Check if URL is already present in CACHE
   if (myCache.has(shortUrl)) {
      url = myCache.get(shortUrl);
   }
   if (url !== "") {
      // Simple redirect
      res.status(301).redirect(url);
   }
   else {
      // Bad request response
      res.status(400).json({ "error": "Given short URL is NOT present in the server >_<" });
   }
})

// @description ==> Used to shorten and cache given URL
function shortenUrl(url) {
   // Check if URL is already present in CACHE
   if (myCache.has(url)) {
      return myCache.get(url);
   }
   var rand = randomstring.generate(4);
   // CACHE the new short URL with the old one 
   myCache.set(rand, url);
   return rand;
}

module.exports = router