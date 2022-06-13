import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function User() {
    return (
        <>
            <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column">
                <Grid item xs={6}>
                    <TextField value={this.user.userName} variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                    <TextField value={this.user.password} variant="outlined" />
                </Grid>
            </Grid>
        </>
    );
}
