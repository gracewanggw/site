import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import {frontendSkills, backendSkills, dataSkills } from "../data";
import SkillsAccordion from "./SkillsAccordion";

function Skills(){
    return(
        <section id='skills' style={{paddingTop: '48px', paddingBottom:'12px'}}>
            <Divider></Divider>
            <Container maxWidth="lg" style={{paddingTop: '48px'}}>
                <h1 style={{textAlign: 'center', fontSize: '48px', color: '#2E3B55' }}>
                    Languages and Technologies 💻
                </h1>
                <SkillsAccordion title='Frontend' skills={frontendSkills} />
                <p></p>
                <SkillsAccordion title='Backend' skills={backendSkills} />
                <p></p>
                <SkillsAccordion title='Data' skills={dataSkills} />
            </Container>
        </section>
    )
}

export default Skills;