const { Pool } = require('pg')
// const pool = new Pool()
require("dotenv").config();

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

const pool = new Pool({
	user: "jeffrey",
	host: "localhost",
	password: "jeffrey",
	port: 5432,
	database: "plexxis",
})


module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}
