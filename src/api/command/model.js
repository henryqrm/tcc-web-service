import mongoose from 'mongoose';

const CommandsSchema = new mongoose.Schema({
    name: String,
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Local'
    },
    products: [{
        type: mongoose.Schema.Types.Number,
        ref: 'Product'
    }],
    date: {
        type: Date,
        default: new Date()
    },
    typePayment: String
});

export default mongoose.model('Commands', CommandsSchema);