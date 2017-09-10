import express from 'express';
import maximaCtrl from '../controllers/maxima.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(maximaCtrl.list);

router.route('/:id')
  .get(maximaCtrl.get);

export default router;
