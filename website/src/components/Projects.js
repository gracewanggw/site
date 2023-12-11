import React from "react";
import {projects} from "../data";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

function Projects(){
    return (
        <section id='projects'>
            <Container maxWidth="lg">
                <h1 style={{textAlign: 'center'}}>
                    Projects
                </h1>
                <h3 style={{textAlign: 'center'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?
                </h3>
                <Grid container spacing={3}>
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