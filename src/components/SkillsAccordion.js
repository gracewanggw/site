import Accordion from "@mui/material/Accordion";
import { AccordionDetails, Typography, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";
import { useState } from "react";

function SkillsAccordion({title, skills}){
    const [open, setOpen] = useState(true);

    const handleChange = () => {
        setOpen(!open)
    }

    return(
        <Accordion expanded={open} onChange={handleChange} sx={{borderRadius: '8px'}}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography fontWeight='bold' color='#2E3B55'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails alignContent='center'>
                <Grid container item spacing={4} alignContent='center' >
                    {skills.map((skill, index) => (
                        <Grid item xs={3} sm={2} md={1} lg={1} key={index} alignContent='center' >
                            <img 
                                src={skill.logo}
                                alt={skill.name}
                                style={{ width: '100%', height: 'auto', }}
                            />
                            <p style={{textAlign:'center', width:'100%'}}>{skill.name}</p>
                        </Grid>
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default SkillsAccordion;