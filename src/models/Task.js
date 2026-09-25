const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String
    },
    concluida: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", taskSchema);
