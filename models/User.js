import mongoose from "mongoose";

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
    },
    CreatedTimestamp: {
        type: Date,
        required: true,
        default: () => {
            return new Date()
        }
    },
})

export default mongoose.model("User", UserSchema, "User")
