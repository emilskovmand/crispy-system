import React, {useRef, useState, useEffect, useContext, useCallback} from 'react'
import ChatMsg from '../components/chatMessage'
import {Box, Grid, TextField, Button} from '@mui/material'
import { AddMessage, GetRecentMessages } from '../services/chatServices'
import {useAuth} from '../hooks/useProvideAuth'
import { io } from 'socket.io-client'
import {SocketContext} from "../hooks/useChatSocket"

export default function Chat({}) {
    const [data, setData] = useState(null);
    const socket = useContext(SocketContext)
    const auth = useAuth();

    const textInput = useRef();

    const handleMessageReceived = useCallback(() => {
        GetRecentMessages().then((response) => {
            setData(response.data.data);
        })
    }, [])

    const handleMessageSent = () => {
        const textValue = textInput.current.value;
        textInput.current.value = ""
        AddMessage(textValue).then((response) => {
            socket.emit("chatmessage sent");
        })
    }

    useEffect(() => {
        if (!data) {
            GetRecentMessages().then((response) => {
                setData(response.data.data);
            })
        }
        socket.on("connect", data => {
            console.log(socket.id + " connected.");
        })
        socket.on("new chatmessage", handleMessageReceived)
        return () => {

        }
    }, [socket, handleMessageReceived])
    

    
    return (
        <>
            <Box
                width='62.5rem'
                margin={"0px auto"}
                maxWidth={'92vw'}
            >
                <Box
                padding={"12px"}
                borderRadius='12px'
                boxShadow='2'
                height='25.75rem'
                maxHeight={'25.75rem'}
                overflow={'auto'}
                >
                    {data && <>
                        {data.map((value, index) => {
                            return <ChatMsg 
                                message={value.message}
                                side={auth.Auth.Name === value.user.Name ? "right" : "left"}
                                username={value.user.Name}
                            />
                        })}
                    </>}
                </Box>
                {auth.Auth.loggedIn && <>
                    <TextField
                        placeholder="Skriv din beskeder her..."
                        multiline
                        inputRef={textInput}
                        rows={2}
                        maxRows={4}
                        borderRadius='12px'
                        boxShadow='2'
                        style={{marginTop: '5px', width: '100%'}}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'right',
                            justifyContent: 'right',
                            marginTop: '2px'
                        }}
                    >
                        <Button 
                            onClick={handleMessageSent}
                            variant='outlined'
                        >
                            Send
                        </Button>
                    </Box>
                </>}
            </Box>
        </>
    )
}
