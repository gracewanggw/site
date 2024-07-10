import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";

function Navbar(){
    const navItems = [
        {title: 'About', link: '#about'},
        {title: 'Experience', link: "#experience"},
        {title: "Projects", link: "#projects"},
        {title: "Skills", link: "#skills"}
    ];
    
    return (
        <AppBar component="nav" position="sticky" style={{ background: '#46694e', overflowX: 'auto' }}>
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
                <Hidden xsDown implementation="css">
                    <Box sx={{ display: 'flex' }}>
                        {navItems.map((item) => (
                        <Button key={item.title} href={item.link} sx={{ color: '#fff', padding: 2 }}>
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