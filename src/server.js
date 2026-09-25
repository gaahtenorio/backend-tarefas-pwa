require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensagem: "API de tarefas funcionando" });
});

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;
const MONGODB_URI = "mongodb+srv://gaahtenorio:cmzpIhNC4WEylFZu@cluster0.m2v6ocp.mongodb.net/db_tarefas?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Erro ao conectar ao MongoDB:", error.message);
  });
