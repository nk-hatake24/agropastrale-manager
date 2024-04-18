const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    id_user:{
        type: String
    },
    name:{
        type: String,
        required: [true, 'name is required']
    },
    email:{
        type: String,
        required:[true, 'name is required']
    },
    password:{
        type: String,
        required: [true, 'password is required']
    },
    salary:{
        type: Integer,
        required: [true, "the employee's salary is required"]
    },
    addresse:{
        type: String
    }
})

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      this.password = await bcrypt.hash(this.password, 10); // Adjust cost factor as needed
    }
    next();
  });

const userModel = mongoose.model('Employee', userSchema)

module.exports = userModel