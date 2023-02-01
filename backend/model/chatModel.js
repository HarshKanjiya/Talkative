const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    members: [{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }],
    chat: [{
        sender: {
            type: mongoose.Schema.ObjectId,
            required: true,
        },
        message: {
            type: String,
            required: true
        }
    }]
})

module.exports = mongoose.model("Chat", chatSchema)