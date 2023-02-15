const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Chat = require("../model/chatModel");


exports.startChatRoom = catchAsyncErrors(async (req, res, next) => {
    const friendID = req.query.friend;

    res.status(200).json({
        success: true
    })
})

exports.sendMessage = catchAsyncErrors(async (req, res, next) => {
    const { senderID, message, chatID } = req.body;
    if (!senderID || !message) {
        return next(new ErrorHandler("Something wrong with Id or message", 400))
    }

    const exist = await Chat.findById(chatID);

    if (!exist) {
        return next(new ErrorHandler("Chat room id doesnot exist!", 404));
    }


})