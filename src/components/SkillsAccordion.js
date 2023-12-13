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
        <Accordion expanded={open} onChange={handleChange}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5" xs={{color: '#2E3B55'}}>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails alignContent='center'>
                <Grid container spacing={2} alignContent='center' >
                    {skills.map((skill) => (
                        <Grid item xs={1} alignContent='center' style={{ width: '200px' }}>
                            <img 
                                src={skill.logo}
                                alt={skill.name}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <p style={{textAlign:'center'}}>{skill.name}</p>
                        </Grid>
                    ))}
                </Grid>
            </AccordionDetails>
        </Accordion>
    )
}

export default SkillsAccordion;