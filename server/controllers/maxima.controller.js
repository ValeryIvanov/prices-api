import Maxima from '../models/maxima.model';

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Maxima.list({ limit, skip })
    .then(products => res.json(products))
    .catch(e => next(e));
}

function get(req, res, next, id) {
  Maxima.get(id)
    .then((product) => {
      req.product = product; // eslint-disable-line no-param-reassign
      return next();
    })
    .catch(e => next(e));
}

export default { list, get };
