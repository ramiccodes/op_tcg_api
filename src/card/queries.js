const getCards = "SELECT * FROM cards";
const getCardById = "SELECT * FROM cards WHERE id = $1";

module.exports = {
  getCards,
  getCardById,
};
