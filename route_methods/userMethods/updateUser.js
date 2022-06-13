var userModel = require("../../models/User")
var bcrypt = require("bcryptjs")

async function updateUser(id, Name, Email, Password) {    
    const result = await userModel.findByIdAndUpdate(id, {
        Name: Name,
        Email: Email,
        Password: await bcrypt.hash(Password, 10)
    })

    return result
}

module.exports = updateUser