import { React, useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useAuth } from '../hooks/useProvideAuth'
import { enableUser, disableUser, updateUser } from "../services/userServices";

export default function User() {
    
    const user = useAuth()
    
    const [state, setState] = useState({
        email: user.Auth.Email,
        userName: user.Auth.Name,
        password: ''
    })
    
    const userInputEvent = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    async function handleUpdateUser() {
        const updateResponse = await updateUser(state.userName, state.email, state.password)
        if (updateResponse.status === 200) {
            user.loginAuth()

            
        } else {

        }
    }
    
    return (
        <>
            <Grid direction="column" container alignItems="center" justifyContent="center" marginTop={5}>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom marginBottom={3}>
                            You can update your user here
                        </Typography>
                <Card sx={{ minWidth: 275, maxWidth: 500 }}>
                    <CardContent>

                        <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column">
                            <Grid item xs={6}>
                                <TextField
                                    onChange={userInputEvent}
                                    defaultValue={user.Auth.Email}
                                    name="email"
                                    label="Email"
                                    type="text"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={userInputEvent}
                                    defaultValue={user.Auth.Name}
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
                            <Button onClick={handleUpdateUser} size="big">Update</Button>
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
                            <Button onClick={enableUser} size="big">Enable</Button>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}
