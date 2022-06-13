import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Box display="flex" justifyContent="flex-start" alignItems="flex-end">
                        <Link to={"/"}>
                            <Button>Home</Button>
                        </Link>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" alignItems="flex-end">
                        <Link to={"/login"}>
                            <Button>Login</Button>
                        </Link>
                        <Link to={"/user"}>
                            <Button>Bruger</Button>
                        </Link>
                    </Box>
                </Typography>
            </Toolbar>
            </AppBar> 
        </Box>
    );
}
