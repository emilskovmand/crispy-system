import { React, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useAuth } from '../hooks/useProvideAuth'
import axios from "axios";

export default function Login() {

    const Auth = useAuth()

    const [state, setState] = useState({
        userName: '',
        password: ''
    })
    
    const userInputEvent = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    }

    // this should probably be in some state managnemt file...
    function login() {
        // call api login with login details
        axios.post("/api/user/login", {
            username: state.userName,
            password: state.password
        }).then(response => {
            console.log(response)
            console.log(Auth)
        })
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
                        value={state.password}
                        name="password"
                        label="Password"
                        type="text"
                        variant="outlined"
                    />
                </Grid>

                <Grid item xs={6}>
                    <Button onClick={login}>Login</Button>
                </Grid>
            </Grid>
        </>
    );
}
