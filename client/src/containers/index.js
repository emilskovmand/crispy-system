import React, {useEffect, useState} from "react";
import {Button, Grid, Box } from "@mui/material"
import {Link} from "react-router-dom"

export default function Index() {
    return (
        <>
            <Grid
                display={"flex"}
                alignItems={"center"}
                width={"100%"}
                height={"100px"}
                direction={"column"}
                sx={{marginTop:"10px"}}
            >
                <Grid
                    display={"flex"}
                    alignItems={"center"}
                    width={"150px"}
                    height={"100px"}
                    direction={"column"}
                >
                    <Link style={{width:"100%"}} to="/chat">
                        <Button sx={{marginBottom:"4px"}} fullWidth variant="outlined" color="primary">
                            Chat
                        </Button>
                    </Link>
                    <Link style={{width:"100%"}} to="/user">
                        <Button sx={{marginBottom:"4px"}} fullWidth variant="outlined" color="primary">
                            Bruger
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </>
    )
}
