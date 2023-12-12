import React from "react";
import { experience } from "../data";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function Experience() {
    return (
        <section id='experience' style={{paddingTop: '48px'}}>
            <Divider style={{paddingBottom: '12px'}}></Divider>
            <Container maxWidth="lg">
                <h1 style={{textAlign: 'center', fontSize: '48px'}}>
                    Experience
                </h1>
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