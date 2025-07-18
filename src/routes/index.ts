import { Router } from 'express';
import userRoutes from './user-routes';
import courseRoutes from './course-routes';

const router = Router();  

router.use('/users', userRoutes);
router.use('/courses', courseRoutes);

export default router;  