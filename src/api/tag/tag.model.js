import mongoose from 'mongoose';

const TagSchema = new mongoose.Schema({
    name: String
});

export default mongoose.model('Tag', TagSchema);