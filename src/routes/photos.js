import { Router } from 'express';

import photosController from '../controllers/Photos';

const router = new Router();

router.post('/', photosController.store);

export default router;
