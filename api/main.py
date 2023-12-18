import pandas as pd
import requests
from bs4 import BeautifulSoup
import re
from datetime import datetime, timedelta
from collections import defaultdict

def scrape():
    contributions = requests.get('https://github.com/users/gracewanggw/contributions')
    soup = BeautifulSoup(contributions.text, "html.parser")
    items = [item.get_text() for item in soup.find_all('tool-tip')]

    return items

def extract(input_string):
    pattern = r"(\w+ \d{1,2})[a-z]*\."
    match = re.search(pattern, input_string)

    if match:
        # Extract the matched date string
        date_string = match.group(1)

        # Extract the number of contributions (if present)
        contributions_match = re.search(r"(\d+) contributions?", input_string)
        contributions = int(contributions_match.group(1)) if contributions_match else 0

        return date_string, contributions
    else:
        return None, None

def get_date(day):
    current_date = datetime.now()
    current_year = current_date.year
    
    date_object = datetime.strptime(day, "%B %d")

    # If the date is before the current date, use the current year; otherwise, use the previous year
    updated_year = current_year if date_object.replace(year=current_year) <= current_date else current_year - 1

    # Set the year in the datetime object
    date_object = date_object.replace(year=updated_year)

    return date_object.strftime("%B %d, %Y")

def get_data():
    items = scrape()
    contrib_dict = defaultdict(int)

    for item in items:
        day, contribs = extract(item)
        
        date_object = datetime.strptime(get_date(day), "%B %d, %Y")

        # Extract the month key (e.g., 'December')
        month_key = date_object.strftime("%B %Y")

        # Update the contributions for the corresponding month
        contrib_dict[month_key] += contribs

    data = []

    for key in contrib_dict.keys():
        data.append({'month': key, 'GitHub Contributions': contrib_dict[key]})

    # Define a function to extract the date from the 'month' string
    def extract_date(item):
        return datetime.strptime(item['month'], "%B %Y")

    # Sort the list of dictionaries based on the date
    data = sorted(data, key=extract_date)

    data = data[1:]

    return data




from typing import Union

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/data")
def fetch_data():
    return get_data()
