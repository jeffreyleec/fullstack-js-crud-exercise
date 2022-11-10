const { Pool } = require('pg')
// const pool = new Pool()
// const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

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
// module.exports = {
//   query: (text, params, callback) => {
//     const start = Date.now()
//     return pool.query(text, params, (err, res) => {
//       const duration = Date.now() - start
//       console.log('executed query', { text, duration, rows: res.rowCount })
//       callback(err, res)
//     })
//   },
// }
// // Database connections
// const { Pool } = require("pg");

// const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

// const pool = new Pool({
//   user: DB_USER,
//   host: DB_HOST,
//   password: DB_PASSWORD,
//   port: DB_PORT,
//   database: DB_DATABASE,
// });

// pool
//   .connect()
//   .then(() => {
//     console.log("Database connection established.");
//   })
//   .catch((e) => {
//     throw new Error(e);
//   });

// module.exports = {
//   query: (text, params, callback) => {
//     return pool.query(text, params, callback);
//   },
// };

// // module.exports = pool;
