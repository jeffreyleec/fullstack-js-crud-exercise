const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

//middleware takes req body and attach it to req
app.use(express.json());

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