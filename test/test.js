const request = require("supertest");
const app = require("../server");

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/demo").expect("Hello World!", done);
    })
});