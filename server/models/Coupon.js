import { mongoose } from 'mongoose';

const { Schema } = mongoose;

const couponSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 100,
    },
    expiration: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    }
});

const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon;