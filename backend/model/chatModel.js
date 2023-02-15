const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    members: {
        type: Array
    },
    chat: [{
        senderID: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        type: {
            type: String,
            default: "text"
        },
        message: {
            type: String,
        },
        time: {
            type: Date,
            default: Date.now()
        }
    }],
    lastMessage: [{
        senderID: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
        },
        type: {
            type: String,
            default: "text"
        },
        message: {
            type: String,
        },
        time: {
            type: Date,
            default: Date.now()
        }
    }]
}
    ,
    { timestamps: true })

module.exports = mongoose.model("Chat", chatSchema)