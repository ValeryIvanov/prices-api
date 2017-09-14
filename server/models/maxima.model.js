import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';

const MaximaSchema = new mongoose.Schema({
    product: String,
    img: String,
    price: String,
    unitprice: String,
    'scrapy-mongodb': {
        ts2: Date,
    },
}, {collection: 'maxima'});


MaximaSchema.method({
});

MaximaSchema.statics = {
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
      .exec();
  }
};

MaximaSchema.index({product: 'text'});


export default mongoose.model('Maxima', MaximaSchema, 'maxima');
