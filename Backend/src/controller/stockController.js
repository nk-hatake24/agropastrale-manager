const Stock = require('../model/stockModel'); 

// ***************** cree un stock **********************
const addStock = async (req, res) => {
    const { id_stock, quantiteDisponible, resource } = req.body;
  
    try {
      if (!quantiteDisponible || !resource) {
        return res.status(400).json({ message: "Required fields are missing. Quantite disponible and resource must be provided." });
      }
  
      const newStock = new Stock({
        id_stock,
        quantiteDisponible,
        resource
      });
  
      const savedStock = await newStock.save();
      res.status(201).json({ message: "Stock added successfully", data: savedStock });
    } catch (error) {
      console.error("Error adding stock:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  /********************* modifier le stock ************************* */

const updateStock = async (req, res) => {
  const { id_stock } = req.params;
  const { quantiteDisponible } = req.body;

  try {
    const updatedStock = await Stock.findOneAndUpdate(
      { id_stock: id_stock },
      { $set: { quantiteDisponible: quantiteDisponible }},
      { new: true, runValidators: true }
    );

    if (!updatedStock) {
      return res.status(404).json({ message: "Stock not found" });
    }

    res.status(200).json({ message: "Stock updated successfully", data: updatedStock });
  } catch (error) {
    console.error("Error updating stock:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// ********************** getAllStocks *************************
const getAllStocks = async (req, res) => {
    try {
      const stocks = await Stock.find({}).populate('resource');  
      res.status(200).json({ message: "Stocks retrieved successfully", data: stocks });
    } catch (error) {
      console.error("Error retrieving stocks:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };


module.exports= {
    updateStock,
    getAllStocks,
    addStock
}