const express = require('express');
const { startChatRoom, sendMessage } = require('../controller/chatController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router()

router.route('/chat/getchat').get(isAuthenticatedUser, startChatRoom)
router.route('/chat/send').post(isAuthenticatedUser, sendMessage)



module.exports = router