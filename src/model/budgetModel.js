const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema(
  {
    id_budget: { type: String },
    previsions: {
      type: Number,
      required: [true, "the prevision of the budget are required"],
    },
    real_budget: {
      type: Number,
      required: [true, "the real budget is required"],
    },
    period: {
      type: String,
      require: [true, "the period for a valid budget is needed"],
    },
  },
  {
    timestamps: true,
  }
);

const budgetModel = mongoose.model("Budget", BudgetSchema);

module.exports = budgetModel;
