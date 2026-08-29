const express = require("express");

const estabelecimentoRoutes = express.Router();
const estabelecimentoController = require("../controllers/estabelecimentosController");

estabelecimentoRoutes.get("/", estabelecimentoController.listarEstabelecimentos);
estabelecimentoRoutes.get("/estabelecimento/:nome", estabelecimentoController.buscarEstabelecimentoPorNome);
estabelecimentoRoutes.post("/estabelecimento", estabelecimentoController.criarEstabelecimento);
estabelecimentoRoutes.put("/estabelecimento/:id", estabelecimentoController.atualizarEstabelecimento);
estabelecimentoRoutes.delete("/estabelecimento/:id", estabelecimentoController.deletarEstabelecimento);

module.exports = estabelecimentoRoutes;
