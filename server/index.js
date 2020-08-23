const express = require("express");
const db = require("../database/data.js");
const PORT = 8080;

const server = express();
server.use(express.json());

let users = {
  id: "a_unique_id", // hint: use the shortid npm package to generate it
  name: "Jane Doe", // String, required
  bio: "Not Tarzan's Wife, another Jane" // String, required
};

server.get("/", (req, res) => {
  res.json(users);
});

server.get("/users", (req, res) => {
  const allUsers = db.getUsers();

  try {
    res.json(allUsers);
  } catch (err) {
    console.log(err);
  }
});

server.listen(PORT, () => {
  console.log(`listening on port${PORT}`);
});
