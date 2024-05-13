import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', loginRequired, userController.index);
router.post('/', userController.store);
router.get('/:id', loginRequired, userController.show);
router.put('/:id', loginRequired, userController.update);
router.delete('/:id', loginRequired, userController.delete);
export default router;
