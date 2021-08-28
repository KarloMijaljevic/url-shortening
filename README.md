Simple URL shortening app

The main fucntion of the app:
1. First step was to set up Linux Ubuntu WSL, node.js and npm.
2. Second step was to fix readme :D and install express and set up a simple endpoint
3. Third step is to add a POST HTTP rule for the url shortening service:
   1. Client sends json = {"url":"anyUrl"}
   2. Server checks if the URL valid (uses validator package to do so)
   3. If the URL is valid it caches it using a short url as a unique key and returns 
      the client a json = {"shortUrl":"shortUrl", "url":"anyUrl"}
   4. If the URL is not valid send a 400 Bad Request response
   5. Packages installed: node-cache, randomstring and validator
4. Final server setup step, added GET HTTP rule for the url shortening service:
   1. Client sends a GET request with json {"shortUrl", "shortUrl"}
   2. Server checks cache to chek if such short url has a corresponding url
   3. If it has, it redirects the user to the url page and send a 301 Redirect
   4. If it has no such short URL in its cache it sends back a 400 Bad Request response
5. This concludes the basic server functionalities

The test's the app covers:
1. A mock test of the GET and POST request's when the user sends GOOD data
2. A mock test of the GET and POST request's when the user sends BAD data

The app also has a dockerfile now which can be built to run the app