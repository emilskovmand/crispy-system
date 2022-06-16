import React from "react";

export default function Administration() {

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
                        type="password"
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
