const Task = require("../models/Task");

async function listarTarefas(req, res) {
  try {
    const tarefas = await Task.find();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
}

async function buscarTarefa(req, res) {
  try {
    const tarefa = await Task.findById(req.params.id);

    if (!tarefa) {
      return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    res.json(tarefa);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function criarTarefa(req, res) {
  try {
    const tarefa = await Task.create(req.body);
    res.status(201).json(tarefa);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function atualizarTarefa(req, res) {
  try {
    const tarefa = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!tarefa) {
      return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    res.json(tarefa);
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

async function excluirTarefa(req, res) {
  try {
    const tarefa = await Task.findByIdAndDelete(req.params.id);

    if (!tarefa) {
      return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(400).json({ mensagem: error.message });
  }
}

module.exports = {
  listarTarefas,
  buscarTarefa,
  criarTarefa,
  atualizarTarefa,
  excluirTarefa
};
