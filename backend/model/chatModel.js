const mongoose = require("mongoose")

const chatSchema = mongoose.Schema({
    members: {
        type: Array
    },
    chat: [{
        sender: {
            type: mongoose.Schema.ObjectId,
        },
        message: {
            type: String,
        },
        time:{
            type: Date,
            default: Date.now()
        }
    }]
}
,
{
    timestemps:true
})

module.exports = mongoose.model("Chat", chatSchema)