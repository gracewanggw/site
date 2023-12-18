import React, {useState, useEffect, useRef} from "react";
import { experience } from "../data";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LineChart from "./LineChart";

function Experience() {
    const lineChartRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.5, // Adjust this threshold as needed
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (lineChartRef.current) {
            observer.observe(lineChartRef.current);
        }

        return () => {
            if (lineChartRef.current) {
            observer.unobserve(lineChartRef.current);
            }
        };
    }, []);

    const handleIntersection = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            setIsVisible(true);
            }
        });
    };

    return (
        <section id='experience' style={{paddingTop: '48px', paddingBottom:'12px'}}>
            <Divider></Divider>
            <Container maxWidth="lg" style={{paddingTop: '48px'}}>
                <h1 style={{textAlign: 'center', fontSize: '48px', color: '#2E3B55' }}>
                    Experience ⏳
                </h1>
                <Grid container spacing={3}>
                    { experience.map((exp) => (
                        <Grid item xs={12}>
                            <div>
                                <p> {exp.startDate} - {exp.endDate} </p>
                                <b> {exp.title} @<a href={exp.companyLink} target="_blank" rel="noopener noreferrer">{exp.company}</a></b>
                                <p> {exp.description}</p>
                                <Divider></Divider> 
                            </div>
                            
                        </Grid>
                        )
                    )}
                </Grid>
            </Container>
            <Grid item xs={12} ref={lineChartRef} >
                {isVisible && <LineChart />}
            </Grid> 
        </section>
    );
}

export default Experience;