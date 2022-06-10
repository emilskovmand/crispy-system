var userModel = require("../../models/User")
var bcrypt = require("bcryptjs")

async function updateUser(id, whatParam, newValue) {
    var updateString = `${whatParam} : ${newValue}`
    var update = {updateString}
    
    userModel.findByIdAndUpdate(id, update)
} 