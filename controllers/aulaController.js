const Aula = require("../models/aulaModel");

const aulaController = {
  criarAula: (req, res) => {
    const novaAula = req.body;
    Aula.create(novaAula, (err, id) => {
      if (err) {
        return res
          .status(500)
          .json({ erro: "Erro ao criar aula", detalhes: err });
      }
      res.redirect("/aulas");
    });
  },

  listarAulas: (req, res) => {
    Aula.getAll((err, aulas) => {
      if (err) {
        return res
          .status(500)
          .json({ erro: "Erro ao buscar aulas", detalhes: err });
      }
      res.render("aulas/index", { aulas });
    });
  },

  exibirFormularioCriacao: (req, res) => {
    res.render("aulas/criar");
  },

  exibirFormularioEdicao: (req, res) => {
    const id = req.params.id;
    Aula.findById(id, (err, aula) => {
      if (err || !aula) {
        return res.status(404).send("Aula não encontrada");
      }
      res.render("aulas/editar", { aula });
    });
  },

  exibirDetalhesAula: (req, res) => {
    const id = req.params.id;
    Aula.findById(id, (err, aula) => {
      if (err || !aula) {
        return res.status(404).send("Aula não encontrada");
      }
      res.render("aulas/show", { aula });
    });
  },

  atualizarAula: (req, res) => {
    const id = req.params.id;
    const dadosAtualizados = req.body;
    Aula.update(id, dadosAtualizados, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ erro: "Erro ao atualizar aula", detalhes: err });
      }
      res.redirect("/aulas");
    });
  },

  deletarAula: (req, res) => {
    const id = req.params.id;
    Aula.delete(id, (err) => {
      if (err) {
        return res
          .status(500)
          .json({ erro: "Erro ao deletar aula", detalhes: err });
      }
      res.redirect("/aulas");
    });
  },
};

module.exports = aulaController;
