const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const Chat = require("../model/chatModel");


exports.startChatRoom = catchAsyncErrors(async (req, res, next) => {
    const { memberIDs } = req.body;
    if (memberIDs.length === 0) {
        return next(new ErrorHandler("No Users in Room!", 403))
    }
    console.log('memberIDs :>> ', memberIDs);

    const chat = await Chat.findOne({ members: { $all: memberIDs } });

    if (chat) {
        // send chat
        res.status(200).json({
            success: true,
            chat: chat
        })
    } else {
        // create and send it
        chat = await Chat.create({
            members: memberIDs,
        })

        res.status(200).json({
            success: true,
            chat: chat
        })
    }
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