const express = require("express");
const taskController = require("../controllers/taskController");

const router = express.Router();

router.get("/", taskController.listarTarefas);
router.get("/:id", taskController.buscarTarefa);
router.post("/", taskController.criarTarefa);
router.put("/:id", taskController.atualizarTarefa);
router.delete("/:id", taskController.excluirTarefa);

module.exports = router;
