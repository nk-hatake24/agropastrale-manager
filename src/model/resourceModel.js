const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema(
  {
    id_resource: {
      type: String,
    },
    quantity_resource: {
      type: Number,
      required: [true, "the quantity of resource is required"],
    },
    unit_price: {
      type: Number,
      required: [true, "the price of the resource is required"],
    },
    name_resource: {
      type: String,
      required: [true, "the name of the resource is required"],
    },
  },
  {
    timestamps: true,
  }
);

const resourceModel = mongoose.model("Resource", ResourceSchema);

module.exports = resourceModel;
