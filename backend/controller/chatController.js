const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Chat = require("../model/chatModel");


exports.startChatRoom = catchAsyncErrors(async (req, res, next) => {
    const { memberIds } = req.body;
    if (memberIds.length === 0) {
        return next(new ErrorHandler("No Users in Room!", 403))
    }
    const chat = await Chat.findOne({ members: memberIds });

    if (chat) {
        // send chat
        res.status(200).json({
            success: true,
            chat: chat
        })
    } else {
        // create and send it
        chat = await Chat.create({
            members: memberIds,
        })
    }
})

exports.sendMessage = catchAsyncErrors(async (req, res, next) => {
    const {senderID,message } = req.body;
    if( !senderID || !message){
        return next(new ErrorHandler("Something wrong with Id or message",400))
    }
    
})