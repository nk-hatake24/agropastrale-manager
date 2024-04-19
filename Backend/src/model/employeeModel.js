const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const employeeSchema = new mongoose.Schema(
  {
    id_user: {
      type: String,
    },
    name_employe:{
      type: String,
      required: [true, 'name of the employee is required']
  },
  function_employee:{
      type: String,
      required: [true, 'the function of the employee is required']
  },
    email: {
      type: String,
      required: [true, "name is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    salary: {
      type: Integer,
      required: [true, "the employee's salary is required"],
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

employeeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 10); 
  }
  next();
});

const employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;
