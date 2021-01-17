# View mongo database and collection in compass

import requests
from flask import Flask, render_template, redirect
import pymongo

# Create an instance of Flask
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

url = 'https://data.cityofchicago.org/resource/2ivx-z93u.json'

# Request the json data
lab_data = requests.get(url).json()

# Connect to/create labData database, drop sample collection to remove duplicates, create sample collection, insert lab_data from json request
db = client.labData_db
db.sample.drop()
db.sample.insert_many(lab_data)



# Route to render index.html template from Mongo database
@app.route("/")
def render_index():

    # dict = {"key_1": "value_1", "key_2": "value_2"}

    # Store the sample collection in a list
    samples = list(db.sample.find())

    # Return mongo_db.html template with samples list passed in
    return render_template("mongo_db.html", samples=samples)

if __name__ == "__main__":
    app.run(debug=True)