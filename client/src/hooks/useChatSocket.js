import io from "socket.io-client";
import React from "react"
const SOCKET_URL = "http://localhost:3001/chatSocket"

export const socket = io(SOCKET_URL, {
    transports: ['websocket'],
    path: '/socket',
    protocols: ["http"]
})
export const SocketContext = React.createContext();