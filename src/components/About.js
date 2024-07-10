import React, {useState} from "react";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typewriter from './Typewriter';
import ContactForm from './ContactForm';
import LineChart from "./LineChart";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', // Default width for larger screens
    maxWidth: '400px',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
  };


function About(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <section id="about" style={{paddingTop: '48px', paddingBottom: '48px'}}>
            <Container maxWidth="lg">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs={7} >
                        <>
                            <Typewriter font="lg" text="👋 Hi, I'm Grace!" delay={120}></Typewriter>
                            <h2 style={{color: '#2E3B55' }}>
                                I love developing solutions through code and exploring the world through data 🚀  
                            </h2>
                            <p>
                                I am a senior at Dartmouth College pursuing a dual major in Computer Science and Economics with a concentration in Math.
                                I am passionate about translating ideas into impactful applications and uncovering meaningful insights from data.
                                Whether it's crafting code for software solutions or delving into datasets to extract valuable narratives, I love that every line of code and every data point tell a unique story. 
                                Beyond coding, you can find me playing pickleball, cooking, or solving puzzles.
                            </p>
                            <Grid container item spacing={2}>
                                <Grid item xs={4}>
                                    <Button style={{width:'100%'}} href='https://www.linkedin.com/in/gracewang809/' target="_blank" rel="noopener noreferrer">
                                        Linkedin
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button style={{width:'100%'}} href='https://github.com/gracewanggw/' target="_blank" rel="noopener noreferrer">
                                        Github
                                    </Button>
                                </Grid>
                                <Grid item xs={4}>
                                    <Button style={{width:'100%'}} onClick={handleOpen}>
                                        Contact
                                    </Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <ContactForm handleClose={handleClose} />
                                        </Box>
                                    </Modal>
                                </Grid>
                            </Grid>
                        </>
                    </Grid>
                    <Grid item xs={5} alignContent='center'>
                        <img
                            alt="hero"
                            src="./clip-art.png"
                            width='100%'
                            height='100%'
                            object-fit='cover'
                        />
                    </Grid>   
                </Grid> 
            </Container>
        </section>
    );
}

export default About;