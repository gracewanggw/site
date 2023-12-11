import React from "react";
import {projects} from "../data";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

function Projects(){
    return (
        <section id='projects'>
            <Container maxWidth="md">
                <Grid container spacing={3}>
                    { projects.map((project) => (
                        <Grid item xs={6}>
                            <ProjectCard project={project}/>
                        </Grid>
                        // <a>
                        //     href={project.link}
                        //     key={project.image}
                        //     <div className="flex relative">
                        //         <img
                        //         alt="gallery"
                        //         className="absolute inset-0 w-full h-full object-cover object-center"
                        //         src={project.image}
                        //         />
                        //         <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        //         <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                        //             {project.subtitle}
                        //         </h2>
                        //         <h1 className="title-font text-lg font-medium text-white mb-3">
                        //             {project.title}
                        //         </h1>
                        //         <p className="leading-relaxed">{project.description}</p>
                        //         </div>
                        //     </div>
                        // </a>
                        )
                    )}
                </Grid>
            </Container>
        </section>
    )
}

export default Projects;