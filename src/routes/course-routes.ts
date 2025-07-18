import { Router } from 'express';
import courseController from '../controllers/course-controller';

const router = Router();

router.get('/', courseController.getCourses);

export default router;