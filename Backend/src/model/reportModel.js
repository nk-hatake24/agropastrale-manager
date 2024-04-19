const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema(
  {
    id_report: {
      type: String,
      required: [true, "the id of report is required"],
      unique: true,
    },
    type_report: {
      type: String,
      required: [true, "the type of report is required"],
    },
    periode: { type: String, required: true },
    conten: { type: String, required: true },
    // Assuming report is related to a transaction
    transaction: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transaction",
      required: true,
    },
  },
  { timestamps: true }
);

const ReportModel = mongoose.model("Report", reportSchema);

module.exports= ReportModel