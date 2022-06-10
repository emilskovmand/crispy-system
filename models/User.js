var mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    Name: {
        type: String,
    },
    Email: {
        type: String,
        required: false,
    },
    Password: {
        type: String,
        required: true,
    },
    CreatedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        }
    },
})

module.exports = mongoose.model("User", UserSchema, "User")
