import mongoose from 'mongoose';
import Local from './../local/model';

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

function setTableOccuped() {

}

CommandsSchema.pre('save', function (next) {
    const self = this;
    // if (mongoose.Types.ObjectId(self.table) && self.status) {

    // }
    console.log(self.table);

    Local
        .update({
            'tables._id': self.table
        }, {
            $set: {
                'tables.0.isOccupied': true
            }
        })
        .exec()
        .then(local => res.json(local))
        .reject(err => res.status(404).json(err));
    next();
})

export default mongoose.model('Commands', CommandsSchema);