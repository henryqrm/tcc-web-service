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
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    amount: {
        type: Number,
        default: 1
    },
    amountUnit: String,
    rated: [Number]
});

// ProductSchema.pre('save', function (next) {
//     const self = this;
//     if (self.rated && self.id) {
//         ProductSchema.findById(self.id).exec()
//             .then(function (product) {
//                 product.rated.push(self.rated);
//                 next();
//             });
//     }
// });

export default mongoose.model('Product', ProductSchema);
