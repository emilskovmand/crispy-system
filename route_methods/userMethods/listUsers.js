var userModel = require("../../models/User")

async function listAllUsers() {
    var users =  await userModel.find({
        Disabled: false
    }).select("-Password -ProfilePicture")
    return users
}

module.exports = listAllUsers