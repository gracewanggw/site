import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";

function Navbar(){
    const navItems = [{title: 'About', link: '#about'}, {title: 'Experience', link: "#experience"}, {title: "Projects", link: "#projects"}];
    
    return (
        <AppBar component="nav" position="sticky" style={{ background: '#2E3B55' }}>
            <Toolbar>
                <Typography
                    href='#'
                    variant="h5"
                    noWrap
                    component="a"
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        // fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.2rem',
                        color: 'inherit',
                        textDecoration: 'none',
                      }}
                >
                    GRACE WANG
                </Typography>
                {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                    {navItems.map((item) => (
                    <Button href={item.link} sx={{ color: '#fff' }}>
                        {item.title}
                    </Button>
                    ))}
                </Box> */}
                <Hidden xsDown implementation="css">
                    <Box sx={{ display: 'flex' }}>
                        {navItems.map((item) => (
                        <Button key={item.title} href={item.link} sx={{ color: '#fff', marginLeft: 2 }}>
                            {item.title}
                        </Button>
                        ))}
                    </Box>
                </Hidden>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;