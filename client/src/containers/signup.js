import { React, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { addUser } from "../services/userServices";

export default function Administration() {

    const [state, setState] = useState({
        userName: '',
        email: '',
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
            <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column" marginTop={5}>
                <Grid alignItems="center" item xs={6}>
                    <TextField
                        onChange={userInputEvent}
                        value={state.userName}
                        name="userName"
                        label="User Name"
                        type="text"
                        variant="outlined"
                    />
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <TextField
                        onChange={userInputEvent}
                        value={state.email}
                        name="email"
                        label="Email"
                        type="text"
                        variant="outlined"
                    />
                </Grid>
                <Grid alignItems="center" item xs={6}>
                    <TextField
                        onChange={userInputEvent}
                        value={state.password}
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={6}>
                    <Button onClick={() => {addUser(state.userName, state.email, state.password)}}>Sign up</Button>
                </Grid>
            </Grid>
        </>
    );
}
