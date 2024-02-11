// routes/signin.js
import express from 'express';
import { signIn } from '../controllers/user.controller.js';
import { signUp } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/signin', signIn);

router.post('/signup', signUp);

export default router;
