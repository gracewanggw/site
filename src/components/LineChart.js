import React, { useEffect, useRef, useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip } from "recharts";

// const data = [{'month': 'Jan 2023', 'GitHub Contributions': 3},
// {'month': 'Feb 2023', 'GitHub Contributions': 4},
// {'month': 'Mar 2023', 'GitHub Contributions': 0},
// {'month': 'Apr 2023', 'GitHub Contributions': 31},
// {'month': 'May 2023', 'GitHub Contributions': 13},
// {'month': 'Jun 2023', 'GitHub Contributions': 0},
// {'month': 'Jul 2023', 'GitHub Contributions': 0},
// {'month': 'Aug 2023', 'GitHub Contributions': 0},
// {'month': 'Sep 2023', 'GitHub Contributions': 14},
// {'month': 'Oct 2023', 'GitHub Contributions': 17},
// {'month': 'Nov 2023', 'GitHub Contributions': 14},
// {'month': 'Dec 2023', 'GitHub Contributions': 131}];

const LineChart = ({data}) => {
    const containerRef = useRef(null);
    const [myWidth, setMyWidth] = useState(800);
    const [myHeight, setMyHeight] = useState(200);



    useEffect(() => {
    const calculateSize = () => {
        setMyWidth(containerRef.current.offsetWidth);
        setMyHeight(containerRef.current.offsetHeight)
    };

    calculateSize();

    // Recalculate on window resize
    window.addEventListener('resize', calculateSize);

    return () => {
        window.removeEventListener('resize', calculateSize);
    };
    }, []);
    return (
        <div
            ref={containerRef}
            style={{paddingTop: '12px', marginRight: '24px'}}
        >

            <AreaChart
            width={myWidth}
            height={myHeight}
            data={data}
            margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
            <XAxis dataKey="month" />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="GitHub Contributions"
                stroke="#8884d8"
                fill="#8884d8"
            />
            </AreaChart>
        </div>
        );
};

export default LineChart;
