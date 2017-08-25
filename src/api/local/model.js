import mongoose from 'mongoose';

const localSchema = new mongoose.Schema({
  name: String,
  description: String,
  tables: [{
    name: String,
    occupations: {
      total: Number,
      current: Number,
    },
    status: String,
    isOccupied: Boolean,
  }]
});


export default mongoose.model('Local', localSchema);
