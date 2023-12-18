/* global languagePluginLoader, pyodide */
import React, { useEffect, useRef, useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [{'month': 'Jan 2023', 'GitHub Contributions': 3},
{'month': 'Feb 2023', 'GitHub Contributions': 4},
{'month': 'Mar 2023', 'GitHub Contributions': 0},
{'month': 'Apr 2023', 'GitHub Contributions': 31},
{'month': 'May 2023', 'GitHub Contributions': 13},
{'month': 'Jun 2023', 'GitHub Contributions': 0},
{'month': 'Jul 2023', 'GitHub Contributions': 0},
{'month': 'Aug 2023', 'GitHub Contributions': 0},
{'month': 'Sep 2023', 'GitHub Contributions': 14},
{'month': 'Oct 2023', 'GitHub Contributions': 17},
{'month': 'Nov 2023', 'GitHub Contributions': 14},
{'month': 'Dec 2023', 'GitHub Contributions': 131}];

const LineChart = () => {
    const containerRef = useRef(null);
    const [myWidth, setMyWidth] = useState(800);
    const [myHeight, setMyHeight] = useState(200);
//     const [data, setData] = useState();

//   useEffect(() => {
//     const runPythonScript = async () => {
//       // Load Pyodide
//       await languagePluginLoader;
      
//       // Python script
//       const pythonScript = `
//       import pandas as pd
//       import requests
//       from bs4 import BeautifulSoup
//       import re
//       from datetime import datetime, timedelta
//       from collections import defaultdict
      
//       contributions = requests.get('https://github.com/users/gracewanggw/contributions')
      
//       soup = BeautifulSoup(contributions.text, "html.parser")
      
//       items = [item.get_text() for item in soup.find_all('tool-tip')]
      
//       def extract(input_string):
//           pattern = r"(\w+ \d{1,2})[a-z]*\."
//           match = re.search(pattern, input_string)
      
//           if match:
//               # Extract the matched date string
//               date_string = match.group(1)
      
//               # Extract the number of contributions (if present)
//               contributions_match = re.search(r"(\d+) contributions?", input_string)
//               contributions = int(contributions_match.group(1)) if contributions_match else 0
      
//               return date_string, contributions
//           else:
//               return None, None
      
//       def get_date(day):
//           current_date = datetime.now()
//           current_year = current_date.year
          
//           date_object = datetime.strptime(day, "%B %d")
      
//           # If the date is before the current date, use the current year; otherwise, use the previous year
//           updated_year = current_year if date_object.replace(year=current_year) <= current_date else current_year - 1
      
//           # Set the year in the datetime object
//           date_object = date_object.replace(year=updated_year)
      
//           return date_object.strftime("%B %d, %Y")
      
//       contrib_dict = defaultdict(int)
      
//       for item in items:
//           day, contribs = extract(item)
          
//           date_object = datetime.strptime(get_date(day), "%B %d, %Y")
      
//           # Extract the month key (e.g., 'December')
//           month_key = date_object.strftime("%B %Y")
      
//           # Update the contributions for the corresponding month
//           contrib_dict[month_key] += contribs
      
//       data = []
      
//       for key in contrib_dict.keys():
//           data.append({'month': key, 'GitHub Contributions': contrib_dict[key]})
      
//       # Define a function to extract the date from the 'month' string
//       def extract_date(item):
//           return datetime.strptime(item['month'], "%B %Y")
      
//       # Sort the list of dictionaries based on the date
//       data = sorted(data, key=extract_date)
      
//       data = data[1:]
      
//       return data
//       `;

//       // Run the Python script
//       const result = pyodide.runPython(pythonScript);

//       setData(result);
//     };

//     runPythonScript();
//     console.log(data)
//   }, []);



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
