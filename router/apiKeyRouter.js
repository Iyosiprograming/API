import express from 'express';
import { createApiKey, getApiKeys , revokeApiKey } from "../controller/apiController.js";
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createApiKey);
router.get('/list', authMiddleware, getApiKeys);
router.post('/revoke/:id', authMiddleware, revokeApiKey);

export default router;