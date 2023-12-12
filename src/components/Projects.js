import React from "react";
import {projects} from "../data";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
import Divider from '@mui/material/Divider';

function Projects(){
    return (
        <section id='projects' style={{paddingTop: '48px', paddingBottom:'12px'}}>
            <Divider></Divider>
            <Container maxWidth="lg" style={{paddingTop: '48px'}} >
                <h1 style={{textAlign: 'center', fontSize: '48px'}}>
                    Projects
                </h1>
                <Grid container spacing={4} style={{padding: '12px'}}>
                    { projects.map((project) => (
                        <Grid item xs={6}>
                            <ProjectCard project={project}/>
                        </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </section>
    )
}

export default Projects;