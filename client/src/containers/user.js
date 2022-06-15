import { React, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useAuth } from '../hooks/useProvideAuth'

export default function User() {

    const Auth = useAuth()

    const [state, setState] = useState({
        email: Auth.,
        userName: '',
        password: ''
    })

    const userInputEvent = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }
    
    return (
        <>
            <Grid container alignItems="center" justifyContent="center" marginTop={5}>
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
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
