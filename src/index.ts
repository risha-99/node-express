import express from "express";
import { createConnection } from "mysql2";
import path from "path";
import { json } from "body-parser";
const app = express();
const port = 3000;

// create the connection to database
const connection = createConnection({
  host: "localhost",
  user: "rebeccarisha",
  password: "Rubi@123",
  database: "west_river_academy",
});

// simple query

app.use(express.static("public"));
app.use(json());

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: path.join(__dirname, "../public") });
});

app.get("/api", (req, res) => {
  res.json({ foo: "bar" });
});

app.get("/api/posts", (req, res) => {
  res.status(200).json([
    {
      id: 1,
      title: "first post",
    },
    {
      id: 2,
      title: "first post",
    },
  ]);
});

app.get("/api/users", (req, res) => {
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    res.status(200).json(results);
  });
});

app.post("/api/users", (req, res) => {
  connection.query("SELECT * FROM `users`", function (err, results, fields) {
    res.status(200).json(results);
  });
});

app.get("/api/users/:id", (req, res) => {
  const id = req.params.id;
  connection.query(
    `SELECT * FROM users where id = ${id}`,
    function (err, results, fields) {
      res.status(200).json(results);
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
