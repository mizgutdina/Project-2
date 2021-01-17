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
data = requests.get(url).json()

# Connect to a database, will create one if not already available
db = client.beaches_db

# Drops collection if available to remove duplicates
db.sample.drop()

# Create sample collection in the database and inserts data as documents
db.sample.insert_many(data)

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