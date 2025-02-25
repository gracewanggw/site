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

    try:
        # Attempt to parse the date assuming it's in the current year
        date_object = datetime.strptime(day, "%B %d")

        # Check if the parsed date is February 29 in a non-leap year
        if day == "February 29":
            if not (current_year % 4 == 0 and (current_year % 100 != 0 or current_year % 400 == 0)):
                print(f"Adjusting non-leap year date: {day}")
                date_object = datetime.strptime("February 28", "%B %d")

    except ValueError as e:
        print(f"Error parsing date: {day} - {e}")
        return None  # Skip invalid dates

    # Assign the correct year
    updated_year = current_year if date_object.replace(year=current_year) <= current_date else current_year - 1
    date_object = date_object.replace(year=updated_year)

    return date_object.strftime("%B %d, %Y")

def get_data():
    items = scrape()
    contrib_dict = defaultdict(int)

    for item in items:
        day, contribs = extract(item)
        
        my_date = get_date(day)
        if my_date:
            date_object = datetime.strptime(my_date, "%B %d, %Y")
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
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/data")
def fetch_data():
    return get_data()
