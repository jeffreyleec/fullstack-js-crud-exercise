const db = require('../db')
app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})



app.delete("/User/:id", (req, res) => {
  res.status(204).json({
    status: "sucess",
  });

});