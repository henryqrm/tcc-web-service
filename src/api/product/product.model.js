import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        uniq: true
    },
    isActive: {
        type: Boolean,
        default: true
    },
    images: [String],
    description: String,
    value: {
        type: Number,
        default: 0,
    },
    amount: {
        type: Number,
        default: 1
    },
    amountUnit: String
});

export default mongoose.model('Product', ProductSchema);
