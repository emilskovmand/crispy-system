var userModel = require("../../models/User")
var bcrypt = require("bcryptjs")
const e = require("express")

async function AddUser(Name, Email, nonHashedPassword) {
    if (!await userModel.exists({Email: Email})) {
        var user = new userModel({
            Name: Name,
            Email: Email,
            Password: await bcrypt.hash(nonHashedPassword, 10)
        })
    
        const result = await user.save()
    
        return result
    } else {
        return false
    }
}

module.exports = AddUser