import express from 'express';
import apolloCtrl from '../controllers/apollo.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(apolloCtrl.list);

router.route('/:id')
  .get(apolloCtrl.get);

export default router;
