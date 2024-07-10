import React, {useState, useEffect, useRef} from "react";
import { experience } from "../data";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LineChart from "./LineChart";
import axios from 'axios';

const defaultData = [{"month":"January 2023","GitHub Contributions":3},{"month":"February 2023","GitHub Contributions":4},{"month":"March 2023","GitHub Contributions":0},{"month":"April 2023","GitHub Contributions":31},{"month":"May 2023","GitHub Contributions":13},{"month":"June 2023","GitHub Contributions":0},{"month":"July 2023","GitHub Contributions":0},{"month":"August 2023","GitHub Contributions":0},{"month":"September 2023","GitHub Contributions":14},{"month":"October 2023","GitHub Contributions":17},{"month":"November 2023","GitHub Contributions":14},{"month":"December 2023","GitHub Contributions":147}]
function Experience() {
    const lineChartRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState(defaultData);

    useEffect(() => {
        axios.get('https://site-api-3nj6.onrender.com/data')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(error => {
                console.log(error)
            });

    }, [])

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1, // Adjust this threshold as needed
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
            } else{
                setIsVisible(false);
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
            <Container maxWidth="lg">
                <Grid item xs={12} ref={lineChartRef} >
                    {isVisible && <LineChart data={data} />}
                </Grid> 
            </Container>
            
        </section>
    );
}

export default Experience;