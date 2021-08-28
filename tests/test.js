// Import npm packages
const app = require("../app.js");
const supertest = require("supertest");
const server = supertest(app);

// Mock request and response
const postRequest = {
   url: "https://www.google.com"
};
const getRequest = {
   shortUrl: "abc123"
};
const badPostRequest = {
   url: "google"
};
const badGetRequest = {
   shortUrl: ""
};

// Describe Good POST request
describe("Post Endpoint", () => {
   it("POST / should take url json and return url and short url", async () => {
      await server
         .post("/")
         .send(postRequest)
         .then((response) => {
            expect(response.type).toEqual(expect.stringContaining("json"));
            expect(response.body).toHaveProperty("shortUrl");
            expect(response.body).toHaveProperty("url");
            expect(200);
         })
   });
});

// Describe Good GET request
describe("Get Endpoint", () => {
   it("GET / should have a short json URL and redirect user", async () => {
      await server
         .get("/")
         .send(getRequest)
         .then((response) => {
            expect(response.type).toEqual(expect.stringContaining("json"));
            expect(301);
         })
   });
});

// Describe Bad POST request
describe("Post Endpoint", () => {
   it("POST / should take url json and return url and short url", async () => {
      await server
         .post("/")
         .send(badPostRequest)
         .then((response) => {
            expect(response.type).toEqual(expect.stringContaining("json"));
            expect(response.body).toHaveProperty("error");
            expect(400);
         })
   });
});

// Describe Bad GET request
describe("Get Endpoint", () => {
   it("GET / should have a short json URL and redirect user", async () => {
      await server
         .get("/")
         .send(badGetRequest)
         .then((response) => {
            expect(response.type).toEqual(expect.stringContaining("json"));
            expect(response.body).toHaveProperty("error");
            expect(400);
         })
   });
});