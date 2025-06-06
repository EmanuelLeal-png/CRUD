const express = require("express");
const aulaController = require("../controllers/aulaController");
const router = express.Router();

router.get("/", aulaController.listarAulas); // GET /aulas → index.ejs
router.get("/new", aulaController.exibirFormularioCriacao); // GET /aulas/new → criar.ejs
router.post("/", aulaController.criarAula); // POST /aulas

router.get("/:id", aulaController.exibirDetalhesAula); // GET /aulas/:id → show.ejs
router.get("/:id/edit", aulaController.exibirFormularioEdicao); // GET /aulas/:id/edit → editar.ejs
router.post("/:id", aulaController.atualizarAula); // POST /aulas/:id
router.post("/:id/delete", aulaController.deletarAula); // POST /aulas/:id/delete

module.exports = router;
