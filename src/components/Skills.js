import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {frontendSkills, backendSkills, dataSkills } from "../data";

function Skills(){
    return(
        <section id='skills' style={{paddingTop: '48px'}}>
            <Divider></Divider>
            <Container maxWidth="lg" style={{paddingTop: '48px'}}>
                <h1 style={{textAlign: 'center', fontSize: '48px'}}>
                    Skills
                </h1>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p style={{ width: '100%', fontSize: '32px'}} >Frontend</p>
                    </Grid>
                    <Container maxWidth='md'>
                        <Grid container spacing={2}>
                            {frontendSkills.map((skill) => (
                                <Grid item xs={2}>
                                    <img 
                                        src={skill.logo}
                                        alt={skill.name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <p style={{textAlign:'center'}}>{skill.name}</p>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p style={{ width: '100%', fontSize: '32px'}} >Backend</p>
                    </Grid>
                    <Container maxWidth='md'>
                        <Grid container spacing={2}>
                            {backendSkills.map((skill) => (
                                <Grid item xs={2}>
                                    <img 
                                        src={skill.logo}
                                        alt={skill.name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <p style={{textAlign:'center'}}>{skill.name}</p>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <p style={{ width: '100%', fontSize: '32px'}} >Data</p>
                    </Grid>
                    <Container maxWidth='md'>
                        <Grid container spacing={2}>
                            {dataSkills.map((skill) => (
                                <Grid item xs={2}>
                                    <img 
                                        src={skill.logo}
                                        alt={skill.name}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                    <p style={{textAlign:'center'}}>{skill.name}</p>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Grid>
            </Container>
        </section>
    )
}

export default Skills;