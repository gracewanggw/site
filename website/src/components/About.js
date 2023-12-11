import React from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function About(){
    return (
        <section id="about">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={7}>
                        <>
                            <h1>
                                Hi, I'm Grace!
                            </h1>
                            <h2>
                                I love exploring the world through data.  
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                                Laborum, voluptas natus?
                            </p>
                            <Grid container item spacing={2}>
                                <Grid item xs={3}>
                                    <Button>
                                        Linkedin
                                    </Button>
                                </Grid>
                                <Grid item xs={3}>
                                    <Button>
                                        Github
                                    </Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button>
                                        Contact
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    </Grid>
                    <Grid item xs={5}>
                        <img
                            alt="hero"
                            src="./logo192.png"
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default About;