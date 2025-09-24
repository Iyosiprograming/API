import express from 'express';
import { createApiKey, getApiKeys , revokeApiKey } from './controller/apiKeyController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, createApiKey);
router.get('/list', authMiddleware, getApiKeys);
router.post('/revoke', authMiddleware, revokeApiKey);

export default router;