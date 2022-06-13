var userModel = require("../../models/User")

async function disableUser(id) {
    const result = await userModel.findOneAndUpdate({
        _id: id,
        Disabled: false
    }, {
        Disabled: true,
    })

    return result
}

module.exports = disableUser