import { Router } from 'express';
import authControllers from '../controllers/auth.controllers.js';

const authRouter = Router();

authRouter.post('/sign-up', authControllers.signin);

export default authRouter;