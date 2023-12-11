import React from "react";
import { experience } from "../data";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Experience() {
    return (
        <section id='experience'>
            <Container maxWidth="lg">
                <h1 style={{textAlign: 'center'}}>
                    Experience
                </h1>
                <h3 style={{textAlign: 'center'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                    laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                    Laborum, voluptas natus?
                </h3>
                <Grid container spacing={3}>
                    { experience.map((exp) => (
                        <Grid item xs={12}>
                            <Divider></Divider>
                            <p> {exp.startDate} - {exp.endDate} </p>
                            <b> {exp.title} @<a href={exp.companyLink}>{exp.company}</a></b>
                            <p> {exp.description}</p>
                        </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </section>
    );
}

export default Experience;