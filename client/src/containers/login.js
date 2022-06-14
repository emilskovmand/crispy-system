import { React, useState } from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Login() {

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
    function login(user) {
        // call api login with login details
        fetch("BACKEND URL HERE FROM SOME .ENV", {
            "method": "POST",
            "body": JSON.stringify({user})
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
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
                    <Button>Login</Button>
                </Grid>
            </Grid>
        </>
    );
}
