import express from 'express';
import maximaCtrl from '../controllers/maxima.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(maximaCtrl.list);

router.route('/:productId')
  .get(maximaCtrl.get);

router.param('productId', maximaCtrl.get);

export default router;
