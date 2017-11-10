import Apollo from '../models/apollo.model';

function list(req, res, next) {
  const { limit = 50, skip = 0, q, minNumberOfPages, maxPrice } = req.query;
  Apollo.list({ limit, skip, q, minNumberOfPages, maxPrice })
    .then(products => res.json(products))
    .catch(e => next(e));
}

function get(req, res, next) {
  Apollo.get(req.params.id)
    .then((product) => res.json(product))
    .catch(e => next(e));
}

export default { list, get };
