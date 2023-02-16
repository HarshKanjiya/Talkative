const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Chat = require("../model/chatModel");


exports.startChatRoom = catchAsyncErrors(async (req, res, next) => {
    const friendID = req.query.friend;

    var chat = await Chat.findOne({ members: { $all: [friendID, req.user.id] } })

    if (chat) {
        res.status(200).json({
            success: true,
            chat: chat
        })
    }
    chat = await Chat.create({
        members: [req.user.id, friendID]
    })
    res.status(200).json({
        success: true,
        chat: chat
    })
})

exports.sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { chatID, message } = req.body;

    if (!chatID || !message) return next(new ErrorHandler("Something wrong with Id or message", 400))
    if (message.trim() === "") return next(new ErrorHandler("Something wrong with message", 400))

    const chat = await Chat.findById(chatID);

    if (!chat) {
        return next(new ErrorHandler("Chat room id does not exist!", 404));
    }

    var newChat = chat.chat;
    newChat.push({
        senderID: req.user.id,
        message: message
    })
    chat.chat = newChat;
    chat.lastMessage = {
        senderID: req.user.id,
        message: message,
        time: Date.now()

    }
    await chat.save();

    res.status(200).json({ success: true, chat })


})