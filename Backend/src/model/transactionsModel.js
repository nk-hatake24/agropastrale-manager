const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    id_transaction: {
        type: String, 
        unique: true
    },
    date:{
        type: Date,
        required: [true, 'the date of the transaction is required']
    },
    quantity_resource:{
        type: Number,
        required: [true, 'the quantity of the transaction is needed']
    },
    total_price:{
        type: Number,
        required: [true, 'the total price is required']
    },
    resource: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource', required: true },
    employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true }
 
},
{
    timestamps:true
});

const transactionModel = mongoose.model("Transaction", TransactionSchema);

module.exports = transactionModel;
