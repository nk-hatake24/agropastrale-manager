const Supplier = require('../model/supplierModel');

//*******************add a supplier **************************** */
const addSupplier = async (req, res) => {
  try {
    const { id_supplier, name_supplier, phone_supplier, email_supplier, address_supplier } = req.body;
    
    const existingSupplier = await Supplier.findOne({ id_supplier });
    if (existingSupplier) {
      return res.status(409).json({ message: "A supplier with this ID already exists." });
    }

    const supplier = new Supplier({
      id_supplier,
      name_supplier,
      phone_supplier,
      email_supplier, 
      address_supplier
    });

    const savedSupplier = await supplier.save();
    res.status(201).json({ message: "Supplier added successfully", data: savedSupplier });
  } catch (error) {
    console.error("Error adding supplier:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

//****************get all supllier ************************
const getAllSuppliers = async (req, res) => {
    try {
      const suppliers = await Supplier.find({});
      res.status(200).json({ message: "Suppliers retrieved successfully", data: suppliers });
    } catch (error) {
      console.error("Error retrieving suppliers:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

// *****************update or modify a supplier***********************
const updateSupplier = async (req, res) => {
    const { id_supplier } = req.params; // Assumer que l'identifiant du fournisseur est passé comme paramètre URL
    const { name_supplier, phone_supplier, email_supplier, address_supplier } = req.body;
  
    try {
      // Vérifier si tous les champs nécessaires sont présents
      if (!name_supplier || !phone_supplier || !email_supplier || !address_supplier) {
        return res.status(400).json({ message: "All fields must be provided" });
      }
  
      const updatedSupplier = await Supplier.findOneAndUpdate(
        { id_supplier: id_supplier },
        { $set: { name_supplier, phone_supplier, email_supplier, address_supplier }},
        { new: true, runValidators: true }
      );
  
      if (!updatedSupplier) {
        return res.status(404).json({ message: "Supplier not found" });
      }
  
      res.status(200).json({ message: "Supplier updated successfully", data: updatedSupplier });
    } catch (error) {
      console.error("Error updating supplier:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

module.exports = {addSupplier, getAllSuppliers, updateSupplier}