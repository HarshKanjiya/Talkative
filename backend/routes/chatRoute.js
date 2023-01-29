const express = require('express');
const { newMessage } = require('../controller/chatController');
const router = express.Router()

router.route('/chat/message/send').post(newMessage)



module.exports = router