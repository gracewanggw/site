import Accordion from "@mui/material/Accordion";
import { AccordionDetails, Typography, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from "@mui/material/Grid";

function SkillsAccordion({title, skills}){
    return(
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography variant="h5">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails alignContent='center'>
                <Grid container spacing={2} alignContent='center'>
                    {skills.map((skill) => (
                        <Grid item xs={2} alignContent='center'>
                            <img 
                                src={skill.logo}
                                alt={skill.name}
                                style={{ width: '100%', height: '100%' }}
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