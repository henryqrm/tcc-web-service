import mongoose from 'mongoose';

const CommandsSchema = new mongoose.Schema({
    table: Number,
    product: [{
        nome: {
            type: mongoose.Schema.Types.Number,
            ref: 'Product'
        },
        tags: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tag'
        }],
        amount: Number
    }],
    date: {
        type: Date,
        default: new Date()
    },
    typePayment: String
});

export default mongoose.model('Commands', CommandsSchema);