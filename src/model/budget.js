const mongoose = require("mongoose");

const BudgetSchema = new mongoose.Schema({
  id_budget: { type: String },
  previsions: {
    type: Integer,
    required: [true, 'the prevision of the budget are required']
  },
  
});

const budgetModel = mongoose.model("Budget", BudgetSchema);

module.exports = budgetModel;
