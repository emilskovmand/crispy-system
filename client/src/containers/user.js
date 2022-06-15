import React from "react";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

export default function User() {


    return (
        <>
            <Card>
                <Grid container spacing={2} alignItems="center" justifyContent="center" direction="column" marginTop={5}>
                    <Grid item xs={6}>
                        <TextField
                            // onChange={userInputEvent}
                            value={"test email"}
                            name="userName"
                            label="User Name"
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            // onChange={userInputEvent}
                            value={"test name"}
                            name="userName"
                            label="User Name"
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            // onChange={userInputEvent}
                            value={"etst password"}
                            name="userName"
                            label="User Name"
                            type="text"
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </Card>
        </>
    );
}
