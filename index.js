const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const estabelecimentoRoutes = require("./routes/estabelecimentoRoutes");
app.use("/", estabelecimentoRoutes);

app.listen(port, () => {
  console.log("Servidor rodando!");
});
