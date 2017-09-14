import express from 'express';
import coopCtrl from '../controllers/coop.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(coopCtrl.list);

router.route('/:id')
  .get(coopCtrl.get);

export default router;
