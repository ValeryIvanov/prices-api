import express from 'express';
import validate from 'express-validation';
import paramValidation from '../../config/param-validation';
import cartCtrl from '../controllers/cart.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(cartCtrl.list)
  .post(cartCtrl.create);

export default router;
