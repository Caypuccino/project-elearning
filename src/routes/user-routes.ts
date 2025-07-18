import { Router } from 'express';
import userController from '../controllers/user-controller';

const router = Router();

router.get('/', userController.getUsers);  // Pastikan userController.getUsers adalah fungsi

export default router;