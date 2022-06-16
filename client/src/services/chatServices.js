import axios from 'axios'

export async function AddMessage(message) {
    const response = await axios.post('/api/chat/chatmessages/add', {
        chatMessage: message
    })

    return response;
}

export async function GetRecentMessages() {
    const response = await axios.get('/api/chat/chatmessages/list');

    return response;
}