import express from 'express';
import { google, signOut, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup); // called from controllers folder
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut)

export default router;