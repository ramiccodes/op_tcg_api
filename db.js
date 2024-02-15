const Pool = require('pg').Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "cardlist",
  password: "Akosinonoy1819",
  port: 5432
})

module.exports = pool;