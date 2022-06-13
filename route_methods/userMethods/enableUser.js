var userModel = require("../../models/User")

async function enableUser(id) {
    const result = await userModel.findOneAndUpdate({
        _id: id,
        Disabled: true
    }, {
        Disabled: false,
    })

    return result
}

module.exports = enableUser