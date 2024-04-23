const Budget = require('../model/budgetModel')

// **************************
const addBudget = async (req, res) => {
    try {
      const { id_budget, previsions, real_budget, period } = req.body;
      if (!previsions || !real_budget || !period) {
        return res.status(400).json({ message: "All fields must be filled" });
      }
  
      const newBudget = new Budget({
        id_budget,
        previsions,
        real_budget,
        period
      });
  
      const savedBudget = await newBudget.save();
      res.status(201).json({ message: "Budget added successfully", data: savedBudget });
    } catch (error) {
      console.error("Error adding budget:", error);
      res.status(500).json({ message: "Internal server error" });
    }
}

// ********************** update Budget************************
const updateBudget = async (req, res) => {
  const { id_budget } = req.params;
  const { previsions, real_budget, period } = req.body;

  try {
    const updatedBudget = await Budget.findOneAndUpdate(
      { id_budget: id_budget },
      { $set: { previsions, real_budget, period }},
      { new: true, runValidators: true }
    );

    if (!updatedBudget) {
      return res.status(404).json({ message: "Budget not found" });
    }

    res.status(200).json({ message: "Budget updated successfully", data: updatedBudget });
  } catch (error) {
    console.error("Error updating budget:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//********************delete budget******************** */
const deleteBudget = async (req, res) => {
    const { id_budget } = req.params;
  
    try {
      const deletedBudget = await Employee.findByIdAndDelete(id_budget);
      if (!deletedBudget) {
        return res
          .status(404)
          .json({
            message:
              "Budget not found! can not delete a budget that does not exist",
          });
      }
      res.status(200).json({ message: "Budget deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = {
    addBudget, updateBudget, deleteBudget
}