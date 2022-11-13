require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

//middleware takes req body and attach it to req
app.use(express.json());

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