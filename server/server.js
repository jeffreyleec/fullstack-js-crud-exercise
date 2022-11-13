require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();
const cors = require("cors");

app.use(cors());

//middleware takes req body and attach it to req
app.use(express.json());

//get all users
app.get("/user", async (req, res) => {
  try {
    const results = await db.query(" SELECT * from users;");
    console.log(results.rows[0]);

    res.status(200).json({
      status: "succes",
      results: results.rows.length,
      data: results.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//get one specific user
app.get("/user/:id", async (req, res) => {
  try {
    const results = await db.query(`SELECT * from users WHERE id = $1;`, [
      req.params.id,
    ]);
    console.log(results, "check");

    res.status(200).json({
      status: "succes",
      results: results.rows.length,
      data: results.rows,
    });
  } catch (err) {
    console.log(err);
  }
});

//create a user with json format obj
//{"name":"Kyle Lowry",
// "code": "F100",
// "profession": "Drywall Installer",
// "color": "#FF6600",
// "city": "Brampton",
// "branch": "Abacus",
// "assigned": true
// }
app.post("/user", async (req, res) => {
  try {
    const results = await db.query(
      `INSERT INTO users(name, code, profession, color, city, branch, assigned)
         VALUES ($1, $2, $3, $4, $5, $6, $7) returning * ;`,
      [
        req.body.name,
        req.body.code,
        req.body.profession,
        req.body.color,
        req.body.city,
        req.body.branch,
        req.body.assigned,
      ]
    );

    console.log(results);

    res.status(201).json({
      status: "success",
      results: results.rows.length,
      data: results.rows[0],
    });
  } catch (err) {
    console.log(err);
  }
});

//edit a user by id
app.put("/user/:id", async (req, res) => {
  try {
    const results = await db.query(
      `UPDATE users SET name = $1, code=$2, profession=$3, color=$4, city=$5, branch=$6, assigned=$7 WHERE id=$8`,
      [
        req.body.name,
        req.body.code,
        req.body.profession,
        req.body.color,
        req.body.city,
        req.body.branch,
        req.body.assigned,
        req.params.id,
      ]
    );

    console.log(results);

    res.status(201).json({
      status: "success",
      results: results.rows.length,
      data: results.rows[0],
    });
  } catch (err) {
    console.log(err);
  }
});

//delete a user by id
app.delete("/user/:id", async (req, res) => {
  try {
    const results = await db.query(`DELETE FROM users WHERE id = $1`, [
      req.params.id,
    ]);
    console.log(results, "check");

    res.status(200).json({
      status: "succes",
    });
  } catch (err) {
    console.log(err);
  }
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
