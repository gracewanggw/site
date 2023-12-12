import React from "react";
import { experience } from "../data";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Experience() {
    return (
        <section id='experience' style={{paddingTop: '48px', paddingBottom:'12px'}}>
            <Divider></Divider>
            <Container maxWidth="lg" style={{paddingTop: '48px'}}>
                <h1 style={{textAlign: 'center', fontSize: '48px'}}>
                    Experience
                </h1>
                <Grid container spacing={3}>
                    { experience.map((exp) => (
                        <Grid item xs={12}>
                            <p> {exp.startDate} - {exp.endDate} </p>
                            <b> {exp.title} @<a href={exp.companyLink} target="_blank" rel="noopener noreferrer">{exp.company}</a></b>
                            <p> {exp.description}</p>
                            <Divider></Divider>
                        </Grid>
                        )
                    )}
                </Grid>
            </Container>
        </section>
    );
}

export default Experience;