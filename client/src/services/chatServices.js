import axios from 'axios'

export async function AddMessage(message) {
    const response = await axios.post('/api/chat/chatmessages/add', {
        chatMessage: message
    })

    return response;
}