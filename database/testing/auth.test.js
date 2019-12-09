const request = require("supertest");
const server = require("../../server");

const db = require("../../config/dbConfig.js");
const Chapters = require("../../models/chapters-model.js");
const Volunteers = require("../../models/volunteer-model.js");

require("dotenv").config();

let token; //Global Variable token to be used all over test

beforeAll(done => {
  //Logging in with the volunteer credentials above
  request(server)
    .post("/api/volunteer/login")
    .send({
      email: "jsmith@.com",
      password: "password"
    })
    .end((err, response) => {
      token = response.body.token; // save the token!
      done();
    });
});

//Clears out volunteers database
afterAll(async () => {
  db.raw(`TRUNCATE TABLE volunteers RESTART IDENTITY CASCADE`);

  //register a volunteer
  await request(server)
    .post("/api/volunteer/register")
    .send({
      fname: "John2",
      lname: "Smith",
      email: "jsmith@.com",
      password: "password",
      phone: "+14802658966",
      city: "Los Angeles",
      state: "CA",
      country: "United States",
      comment: "No comment",
      volunteering: true,
      donating: true,
      joinmm: false,
      mediacoverage: false,
      somethingelse: "Hello"
    });
});

console.log(token);

//Tests for authentication
describe("GET /", () => {
  //Checks an authenticated route '/api/chapter'
  // token not being sent - should respond with a 401
  test("It should require authorization", () => {
    return request(server)
      .get("/api/chapter")
      .then(response => {
        expect(response.statusCode).toBe(401);
      });
  });
  // send the token - should respond with a 200
  test("It responds with JSON", () => {
    return request(server)
      .get("/")
      .set("Authorization", `Bearer ${token}`)
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.type).toBe("application/json");
      });
  });
});
