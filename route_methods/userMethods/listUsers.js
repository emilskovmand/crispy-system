var userModel = require("../../models/User")

async function listAllUsers() {
    var users =  await userModel.find()
}

module.exports = listAllUsers