import express from 'express';
import userRoutes from './user.route';
import authRoutes from './auth.route';
import maximaRoutes from './maxima.route';
import selverRoutes from './selver.route';
import prismaRoutes from './prisma.route';
import coopRoutes from './coop.route';
import cartRoutes from './cart.route';
import apolloRoutes from './apollo.route';

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
router.get('/health-check', (req, res) =>
  res.send('OK')
);

// mount user routes at /users
router.use('/users', userRoutes);

// mount auth routes at /auth
router.use('/auth', authRoutes);

router.use('/maxima', maximaRoutes);
router.use('/selver', selverRoutes);
router.use('/prisma', prismaRoutes);
router.use('/coop', coopRoutes);
router.use('/cart', cartRoutes);

router.use('/apollo', apolloRoutes);

export default router;
