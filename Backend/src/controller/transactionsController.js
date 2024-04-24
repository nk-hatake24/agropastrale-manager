const Transaction = require('../model/transactionsModel');
const Resource = require('../model/resourceModel'); 

// ******************* addTransaction ***********************
const addTransaction = async (req, res) => {
  const { resource, quantity } = req.body;

  try {
    const resourceData = await Resource.findById(resource);
    if (!resourceData) {
      return res.status(404).json({ message: "Resource not found" });
    }

    const totalPrice = quantity * resourceData.unit_price; 

    const transaction = new Transaction({
      resource,
      quantity,
      totalPrice
    });

    const savedTransaction = await transaction.save();
    res.status(201).json({ message: "Transaction added successfully", data: savedTransaction });
  } catch (error) {
    console.error("Error adding transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// ********************** update transaction ********************************
 const updateTransaction = async (req, res) => {
  const { transactionId } = req.params; 
  const { quantity } = req.body; 

  try {
    const transaction = await Transaction.findById(transactionId);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }

    const resource = await Resource.findById(transaction.resource);
    if (!resource) {
      return res.status(404).json({ message: "Resource not found associated with the transaction" });
    }
    if (quantity && quantity !== transaction.quantity) {
      transaction.totalPrice = quantity * resource.unit_price;
      transaction.quantity = quantity;
    }

    const updatedTransaction = await transaction.save();
    res.status(200).json({ message: "Transaction updated successfully", data: updatedTransaction });
  } catch (error) {
    console.error("Error updating transaction:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = {addTransaction, updateTransaction}