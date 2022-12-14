require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router()


app.use(cors());

//middleware takes req body and attach it to req
app.use(express.json());

//get all users
router.get("/user", async (req, res) => {
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

module.exports = router
