const express = require('express');
const { startChatRoom } = require('../controller/chatController');
const { isAuthenticatedUser } = require('../middleware/auth');
const router = express.Router()

router.route('/chat/getchat').get( isAuthenticatedUser, startChatRoom )



module.exports = router