import mongoose from 'mongoose';

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        uniq: true
    },
    observation: String,
    description: String
});

export default mongoose.model('Category', CategorySchema);