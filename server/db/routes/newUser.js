require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = express.Router()

app.use(cors());

//middleware takes req body and attach it to req
app.use(express.json());

//create a user with json format obj
//{"name":"Kyle Lowry",
// "code": "F100",
// "profession": "Drywall Installer",
// "color": "#FF6600",
// "city": "Brampton",
// "branch": "Abacus",
// "assigned": true
// }
router.post("/user", async (req, res) => {
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

module.exports = router
