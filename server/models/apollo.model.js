import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const ApolloSchema = new mongoose.Schema({
    id: String,
    name: String,
    img: String,
    url: String,
    price: Number,
    description: String,
    attributes: {
      'Lehekülgi:': Number,
    },
    'scrapy-mongodb': {
        ts2: Date,
    },
}, {collection: 'apollo'});

ApolloSchema.method({
});

ApolloSchema.statics = {
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
  list({ skip = 0, limit = 50, q, minNumberOfPages = 100, maxPrice = 10 } = {}) {
    const searchOptions = q ? {'product': {$regex: q, $options: 'i'}} : {'price': {$lt: parseInt(maxPrice)}, "pages": {$gt: parseInt(minNumberOfPages)}};
    const products = this.find(searchOptions)
      .skip(+skip)
      .limit(+limit)
      .sort({unitprice: 1})
      .exec();
    return products;
  }
};

ApolloSchema.index({product: 'text'});

export default mongoose.model('Apollo', ApolloSchema, 'apollo');
