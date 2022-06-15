import React from 'react'
import { Typography, Avatar, Grid } from '@mui/material'

export default function ChatMessage({ avatar, message, messageId, side }) {
  return (
        <>
            <Grid
                container
                marginBottom={"5px"}
                spacing={2}
                justifyContent={side === 'right' ? 'flex-end' : 'flex-start'}
            >
                {side === 'left' && (
                    <Grid item>
                        <Avatar 
                            src={avatar}
                            className={''}
                        />
                    </Grid>
                )}
                <Grid item xs={8}>
                    <div style={{textAlign: side === 'right' ? 'right' : 'left'}}>
                        <Typography 
                                display={'inline-block'}
                                padding={'15px'}
                                style={{ backgroundColor: side === 'left' ? '#f5f5f5' : '#3f51b5' }}
                                sx={{
                                    borderTopRightRadius: '20px',
                                    borderBottomLeftRadius: '20px'
                                }}
                                width={'fit-content'}
                                alignSelf={'right'}
                                color={side === 'left' ? 'black' : 'white'}
                                align={side === 'right' ? 'right' : 'left'}>
                                {message}
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </>
    )
}
