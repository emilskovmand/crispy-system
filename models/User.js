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
    ProfilePicture: {
        data: Buffer,
        contentType: String,
    },
    CreatedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        }
    },
    Disabled: {
        type: Boolean,
        required: true,
        default: false
    }
})

module.exports = mongoose.model("User", UserSchema, "User")
