import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const SelverSchema = new mongoose.Schema({
    product: String,
    img: String,
    price: String,
    unitprice: String,
    'scrapy-mongodb': {
        ts2: Date,
    },
}, {collection: 'selver'});

SelverSchema.method({
});

SelverSchema.statics = {
  get(id) {
    return this.findById(id)
      .exec()
      .then((product) => {
        if (product) {
          return product;
        }
        const err = new APIError('No such product exists!', httpStatus.NOT_FOUND);
        return Promise.reject(err);
      });
  },
  list({ skip = 0, limit = 50, q } = {}) {
    const searchOptions = q ? {'product': {$regex: q, $options: 'i'}} : undefined;
    return this.find(searchOptions)
      .skip(+skip)
      .limit(+limit)
      .sort({unitprice: 1})
      .exec();
  }
};

SelverSchema.index({product: 'text'});

export default mongoose.model('Selver', SelverSchema, 'selver');
