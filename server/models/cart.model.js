import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const CartSchema = new mongoose.Schema({
    name: String,
    ts: Date,
    cart: Object,
}, {collection: 'cart'});


CartSchema.method({
});

CartSchema.statics = {
  list({ skip = 0, limit = 50 } = {}) {
    return this.find()
      .skip(+skip)
      .limit(+limit)
      .sort({ts: 1})
      .exec();
  }
};

export default mongoose.model('Cart', CartSchema, 'cart');
