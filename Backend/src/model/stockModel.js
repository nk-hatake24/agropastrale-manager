const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema(
  {
    id_stock: {
      type: String,
      required: true,
      unique: true,
    },
    quantiteDisponible: {
      type: Number,
      required: [true, "the available quantity of the stock is required"],
    },
    resource: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource', required: true },
  },
  { timestamps: true }
);

// Methods...

const StockModel = mongoose.model("Stock", stockSchema);

module.exports = StockModel