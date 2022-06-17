import axios from 'axios'

export async function updateUser(name, email, password) {
    const userResponse = await axios.get('api/user/getUser')
    if (userResponse.status === 200) {
        await axios.put('api/user/update/' + userResponse.data._id, {
            Name: name,
            Email: email,
            Password: password
        })
    }
}

export async function enableUser() {
    const userResponse = await axios.get('api/user/getUser')
    if (userResponse.status === 200) {
        axios.post('api/user/enable/' + userResponse.data._id)
    }
}

export async function disableUser() {
    const userResponse = await axios.get('api/user/getUser')
    if (userResponse.status === 200) {
        axios.post('api/user/disable/' + userResponse.data._id)
    }
}