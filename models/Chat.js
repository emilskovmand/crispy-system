var mongoose = require("mongoose")

const ChatSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    message: {
        type: String,
        required: true,
    },
    CreatedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        }
    }
})

module.exports = mongoose.model("Chat", ChatSchema, "Chat")
