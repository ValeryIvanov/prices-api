import Cart from '../models/cart.model';

function create(req, res, next) {
  const cart = new Cart({
    name: req.body.name,
    ts: req.body.ts,
    cart: req.body.cart,
  });

  cart.save()
    .then(cart => res.json(cart))
    .catch(e => next(e));
}

function list(req, res, next) {
  const { limit = 50, skip = 0 } = req.query;
  Cart.list({ limit, skip })
    .then(carts => res.json(carts))
    .catch(e => next(e));
}

export default { create, list, };
