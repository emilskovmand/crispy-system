import { React, useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { ProvideAuth, useAuth, useProvideAuth } from '../hooks/useProvideAuth'
import axios from "axios";

export default function User() {
    
    const Auth = useProvideAuth()
    
    const [state, setState] = useState({
        email: '',
        userName: '',
        password: ''
    })
    
    useEffect(() => {
        console.log(Auth.Auth.Email)
        state.email = Auth.Auth.Email
        state.userName = Auth.Auth.Name

        axios.get("api/user/getUser").then(response => {
            console.log(response)
        })
    }, [])



    const userInputEvent = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    function enableUser() {
        
    }

    function disableUser() {

    }
    
    return (
        <>
            <Grid direction="column" container alignItems="center" justifyContent="center" marginTop={5}>
                <Card sx={{ minWidth: 275, maxWidth: 500 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            You can update your user here
                        </Typography>

                        <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column" marginTop={5}>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={userInputEvent}
                                    value={state.email}
                                    name="email"
                                    label="Email"
                                    type="text"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={userInputEvent}
                                    value={state.userName}
                                    name="userName"
                                    label="User Name"
                                    type="text"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={userInputEvent}
                                    value={state.password}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <CardActions>
                            <Button size="big">Update</Button>
                        </CardActions>
                    </CardContent>
                </Card>

                <br></br>

                <Card sx={{ minWidth: 275, maxWidth: 500 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            Disable/enable your user
                        </Typography>

                            <Button onClick={disableUser} size="big">Disable</Button>
                            <Button onclick={enableUser} size="big">Enable</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}
