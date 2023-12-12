import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Navbar(){
    const navItems = [{title: 'About', link: '#about'}, {title: 'Experience', link: "#experience"}, {title: "Projects", link: "#projects"}];
    
    return (
        <AppBar component="nav" position="sticky" style={{ background: '#2E3B55' }}>
            <Toolbar>
                <Typography
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                    GRACE WANG
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button href={item.link} sx={{ color: '#fff' }}>
                        {item.title}
                    </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;