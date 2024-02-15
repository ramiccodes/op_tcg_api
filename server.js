const express = require("express");
const cardRoutes = require("./src/card/routes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/cards", cardRoutes);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
