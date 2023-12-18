import { BottomNavigation, Grid, Typography } from '@mui/material';

function Footer(){
    return(
        <BottomNavigation
            style={{ backgroundColor: 'rgb(245, 245, 243)' }}
        >
            <Grid container>
                <Grid item xs={6}>
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: '#aaa',
                            textDecoration: 'none',
                        }}
                    >
                        Designed and Developed by Grace Wang (2023)
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography
                        variant="caption"
                        component="a"
                        href="https://github.com/gracewanggw/site"
                        target="_blank" rel="noopener noreferrer"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: '100%',
                            color: '#aaa',
                        }}
                    >
                    Source Code
                    </Typography>
                </Grid>
            </Grid>
                
        </BottomNavigation>
    )
}

export default Footer;