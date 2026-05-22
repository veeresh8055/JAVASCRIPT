import express from 'express'
import authMiddleware from '../middlewares/auth.middleware.js'
import createChatController from '../controllers/chat.controller.js'

const router = express.Router();


router.post('/', authMiddleware , createChatController )


export default router;
