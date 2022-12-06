import { express } from "express";
import { createConnection } from "mysql2";

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
connection.query("SELECT * FROM `users`", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  //   console.log(fields); // fields contains extra meta data about results, if available
});


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express)

app.get("/posts", (req, res) => {
  res.send([
    {
      id: 1,
      title: "first post",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
