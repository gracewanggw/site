import React from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

function About(){
    return (
        <section id="about" style={{paddingTop: '48px'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={7} >
                        <>
                            <h1 style={{fontSize: '80px'}}>
                                👋 Hi, I'm Grace!
                            </h1>
                            <h2>
                                I love developing solutions through code and exploring the world through data 🚀  
                            </h2>
                            <p>
                                I am a senior at Dartmouth College pursuing a dual major in Computer Science and Economics with a concentration in Math.
                                I am passionate about translating ideas into impactful applications and uncovering meaningful insights from data.
                                Whether it's crafting code for software solutions or delving into datasets to extract valuable narratives, I love that every line of code and every data point tell a unique story. 
                                Beyond coding, you can find me playing pickleball, cooking, or solving puzzles.
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
                            src="./clip-art.png"
                            width='400px'
                            height='200px'
                            object-fit='cover'
                        />
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

export default About;