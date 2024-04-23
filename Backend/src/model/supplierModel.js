const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
  {
    id_supplier: {
      type: String,
      required: [true, "id of supplier is required"],
      unique: true,
    },
    name_supplier: {
      type: String,
      required: [true, "name of the supplier is needed"],
    },
    phone_supplier: {
      type: String,
      required: [true, "the phone number of the supplier is needed"],
    },
    email_supplierr: {
      type: String,
      required: [true, "the email of supplier is needed"],
    },
    address_supplier: { type: String, required: true },
  },
  { timestamps: true }
);


const SupplierModel = mongoose.model("Supplier", supplierSchema);

module.exports = SupplierModel