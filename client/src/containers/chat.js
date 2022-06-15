import React, {useRef, useState, useEffect} from 'react'
import ChatMsg from '../components/chatMessage'
import {Box, Grid, TextField, Button} from '@mui/material'
import { AddMessage } from '../services/chatServices'
import {useAuth} from '../hooks/useProvideAuth'

export default function Chat({}) {
    const [data, setData] = useState(null);
    const auth = useAuth();

    const textInput = useRef();

    const handleSendText = (ev) => {
        const text = textInput.current.value;
        textInput.current.value = "";
    }

    useEffect(() => {
    
        return () => {
        
        }
    }, [])
    

    
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
                    <ChatMsg
                        message={"Hej"}
                        side={"left"}
                    />
                    <ChatMsg
                        message={"Hej"}
                        side={"right"}
                    />
                    <ChatMsg
                        message={"Fuck hvor fedt manner!"}
                        side={"right"}
                    />
                    <ChatMsg
                        message={"Ja, helt vildt."}
                        side={"left"}
                    />
                </Box>
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
                            onClick={handleSendText}
                            variant='outlined'
                        >
                            Send
                        </Button>
                </Box>
            </Box>
        </>
    )
}
