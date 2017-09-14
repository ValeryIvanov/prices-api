import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const CoopSchema = new mongoose.Schema({
    product: String,
    img: String,
    price: String,
    unitprice: String,
    'scrapy-mongodb': {
        ts2: Date,
    },
}, {collection: 'coop'});


CoopSchema.method({
});

CoopSchema.statics = {
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
    const searchOptions = q ? {$text: {$search: q}} : undefined;
    return this.find(searchOptions)
      .skip(+skip)
      .limit(+limit)
      .sort({unitprice: 1})
      .exec();
  }
};

CoopSchema.index({product: 'text'});


export default mongoose.model('Coop', CoopSchema, 'coop');
