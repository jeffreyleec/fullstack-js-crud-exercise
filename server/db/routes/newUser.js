const db = require('../db')
app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})

router.get('/:id', async (req,res) => {
  const {id} = req.params
  const{rows} = await db.query('Select * FROM Users WHERE id = $1', [id])
  res.send(rows[0])
})

app.post("/User/:id", (req, res) => {
  console.log(req.body)
});



