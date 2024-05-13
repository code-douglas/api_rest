import { Router } from 'express';
import userController from '../controllers/User';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index); // Listar todos os usuários
// router.get('/:id', userController.show); // Listar um único usuário

router.post('/', userController.store); // Criar usuários
router.put('/', loginRequired, userController.update); // Editar usuários
router.delete('/', loginRequired, userController.delete); // Apagar usuários
export default router;
