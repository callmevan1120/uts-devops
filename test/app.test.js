const request = require("supertest");
const app = require("../app");
const path = require("path");
const fs = require("fs");

describe("Express App Routes", () => {
  it("GET / should return index.html content", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.type).toBe("text/html");

    // Opsional: validasi konten HTML
    const html = fs.readFileSync(
      path.join(__dirname, "../public/index.html"),
      "utf8"
    );
    expect(res.text).toContain("<h1>"); // Periksa ada heading
    expect(res.text).toContain("Hello"); // Pastikan ada kata Hello (atau sesuai isi file)
  });
});
