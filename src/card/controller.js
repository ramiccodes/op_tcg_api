const pool = require("../../db");
const queries = require("./queries");

const getCards = (req, res) => {
  pool.query(queries.getCards, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getCardById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getCardById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
module.exports = {
  getCards,
  getCardById,
};
