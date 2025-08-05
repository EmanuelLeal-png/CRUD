const Aula = require("../models/aulaModel");

const aulaController = {
  criarAula: async (req, res) => {
    const novaAula = req.body;
    try {
      await Aula.create(req.body);
      res.redirect("/aulas");
    } catch (err) {
      res.status(500).json({ erro: "Erro ao criar aula", detalhes: err.message });
    }
  },

  listarAulas: async (req, res) => {
    try {
      const aulas = await Aula.findAll();
      res.render("aulas/index", { aulas });
    } catch (err) {
      res.status(500).json({ erro: "Erro ao buscar aulas", detalhes: err.message });
    }
  },

  exibirFormularioCriacao: (req, res) => {
    res.render("aulas/criar");
  },

  exibirFormularioEdicao: async (req, res) => {
    const id = req.params.id;
    try {
      const aula = await Aula.findByPk(req.params.id);
      if (!aula) {
        return res.status(404).send("Aula não encontrada");
      }
      res.render("aulas/editar", { aula });
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  exibirDetalhesAula: async (req, res) => {
    const id = req.params.id;
    try {
      const aula = await Aula.findByPk(req.params.id);
      if (!aula) {
        return res.status(404).send("Aula não encontrada");
      }
      res.render("aulas/show", { aula });
    } catch (err) {
      res.status(500).json({ erro: err.message });
    }
  },

  atualizarAula: async (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    try {
      const aula = await Aula.findByPk(req.params.id);
      if (!aula) {
        return res.status(404).send("Aula não encontrada");
      }
      await aula.update(req.body);
      res.redirect("/aulas");
    } catch (err) {
      res.status(500).json({ erro: "Erro ao atualizar aula", detalhes: err.message });
    }
  },

  deletarAula: async (req, res) => {
    const id = req.params.id;
    try {
      const aula = await Aula.findByPk(req.params.id);
      if (!aula) {
        return res.status(404).send("Aula não encontrada");
      }
      await aula.destroy();
      res.redirect("/aulas");
    } catch (err) {
      res.status(500).json({ erro: "Erro ao deletar aula", detalhes: err.message });
    }
  },
};

module.exports = aulaController;
