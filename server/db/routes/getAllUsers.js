const db = require('../db')
app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})




app.get("/User", async (req, res) => {
 const results = await db.query("SELECT * FROM users;")
 console.log(results)
 res.status(200).json({
  status:"success",
  results:results.rows.length,
  data: {
    users:results[rows]
  },
 })
 
});