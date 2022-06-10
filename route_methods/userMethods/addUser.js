var userModel = require("../../models/User")
var bcrypt = require("bcryptjs")

async function AddUser(Name, Email, nonHashedPassword) {
    var user = new userModel({
        Name: Name,
        Email: Email,
        Password: bcrypt.hash(nonHashedPassword, process.env.SALT)
    })

    user.save()
        .then(data => {
            return true
        })
        .catch(err => {
            console.error(err);
            return false
        })
}

module.exports = AddUser