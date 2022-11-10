require("dotenv").config();
const express = require("express");
const db = require("./db");
const app = express();

// app.use(cors());
//middleware takes req body and attach it to req
app.use(express.json());

//get all users
app.get("/user", async (req, res) => {
try {
  const results = await db.query(" SELECT * from users;");
  console.log(results, "check");

  res.status(200).json({
    status: "succes",
    results: results.rows.length,
    data: results.rows,
  });
}catch(err){
  console.log(err)
}
  
});



// app.get("/user/:id", (req, res) => {
//   console.log(req.params);
//   // res.status(200).json({
//   //   status:"succes",
//   //   data:{user:['user1','user2']}

//   // })
// });
app.get("/user/:id", async (req, res) => {
  try {
    const results = await db.query( `SELECT * from users WHERE id = $1;`,[req.params.id]);
    console.log(results, "check");
  
    res.status(200).json({
      status: "succes",
      results: results.rows.length,
      data: results.rows,
    });
  }catch(err){
    console.log(err)
  }
    
  });
// //create a user
// app.post("/user", async (req, res) => {
//   try {
//     const newUser =
//       await pool.query(`INSERT INTO users(name, code, profession, color, city, branch, assigned)
//     VALUES ('Kyle Lowry', 'F100', 'Drywall Installer', '#FF6600', 'Brampton', 'Abacus',true)`);

//     res.json(newUsers);
//   } catch (err) {
//     console.error(err.message);
//   }
// });
app.post("/user", async (req, res) => {
  try {
    const results = await db.query(`INSERT INTO users(name, code, profession, color, city, branch, assigned)
         VALUES ($1, $2, $3, $4, $5, $6, $7) ;`, [req.body.name, req.body.code, req.body.profession, req.body.color, req.body.city, req.body.branch, req.body.assigned]);
    
    console.log(results);
  
    res.status(201).json({
      status: "success",
      results: results.rows.length,
      data: results.rows[0],
    });
  }catch(err){
    console.log(err)
  }
    
  });
// //delete a user
// app.delete("/user/:id", (req, res) => {
//   res.status(204).json({
//     status: "success",
//   });
// });

// app.put("/user/:id", (req, res) => {
//   console.log("req.body.id");
//   console.log(req.body);
//   res.status(200).json({
//     status: "success",
//     data: {
//       user: 1,
//     },
//   });
// });

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`server is up and listening on port ${port}`);
});
