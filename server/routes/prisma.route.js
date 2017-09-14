import express from 'express';
import prismaCtrl from '../controllers/prisma.controller';

const router = express.Router(); // eslint-disable-line new-cap

router.route('/')
  .get(prismaCtrl.list);

router.route('/:id')
  .get(prismaCtrl.get);

export default router;
