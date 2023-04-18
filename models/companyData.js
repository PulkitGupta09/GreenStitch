const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    year: { type: Object, required: true },
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("CompanyData", CompanySchema);
