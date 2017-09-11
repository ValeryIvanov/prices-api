import express from 'express';
import selverCtrl from '../controllers/selver.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(selverCtrl.list);

router.route('/:id')
  .get(selverCtrl.get);

export default router;
