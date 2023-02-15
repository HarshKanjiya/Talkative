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

    // console.log('chat :>> ', chat);


    res.status(200).json({
        success: true,
        chat: chat
    })
})

exports.sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { chatID, type, message } = req.body;

    if (!senderID || !message) return next(new ErrorHandler("Something wrong with Id or message", 400))
    if (message.trim() === "") return next(new ErrorHandler("Something wrong with message", 400))

    const chat = await Chat.findById(chatID);

    if (!chat) {
        return next(new ErrorHandler("Chat room id doesnot exist!", 404));
    }

    console.log('chat :>> ', chat);


    res.status(200).json({ success: true })


})