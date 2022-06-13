import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function Login() {
    return (
        <>
            <Grid container spacing={2} justifyContent="center" direction="column">
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="User Name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField id="outlined-basic" label="Password" variant="outlined" />
                </Grid>
            </Grid>
        </>
    );
}
