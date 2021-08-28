Simple URL shortening app
1. First step was to set up Linux Ubuntu WSL, node.js and npm.
2. Second step was to fix readme :D and install express and set up a simple endpoint
3. Third step is to add a POST HTTP rule for the url shortening service:
   1. Client sends json = {"url":"anyUrl"}
   2. Server checks if the URL valid (uses validator package to do so)
   3. If the URL is valid it caches it using a short url as a unique key and returns 
      the client a json = {"shortUrl":"shortUrl", "url":"anyUrl"}
   4. If the URL is not valid send a 400 Bad Request response
   5. Packages installed: node-cache, randomstring and validator