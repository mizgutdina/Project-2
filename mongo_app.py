# View mongo database and collection in compass

import requests
from flask import Flask, jsonify , render_template, redirect
import pymongo
from bson import json_util

from flask_table import Table, Col

# Create an instance of Flask
app = Flask(__name__)

# Create connection variable
conn = 'mongodb://localhost:27017'

# Pass connection to the pymongo instance.
client = pymongo.MongoClient(conn)

# urls with chicago beach json data
water_quality = 'https://data.cityofchicago.org/resource/qmqz-2xku.json'
weather_stations = 'https://data.cityofchicago.org/resource/k7hf-8y75.json'
lab_data = 'https://data.cityofchicago.org/resource/2ivx-z93u.json'
swim_advisories = 'https://data.cityofchicago.org/resource/t62e-8nvc.json'
e_coli = 'https://data.cityofchicago.org/resource/xvsz-3xcj.json'

# (1) request json data (2) create labData database (3) drop collection duplicates and create collection (4) insert lab_data from json request

# Create one database and add (below) as collections
db = client.beachConditions_db

# water_quality
water_quality = requests.get(water_quality).json()
db.water.drop()
db.water.insert_many(water_quality)
water_measurements = list(db.water.find())

# weather_stations
weather_stations = requests.get(weather_stations).json()
db.weather.drop()
db.weather.insert_many(weather_stations)
weather_measurements = list(db.weather.find())

# lab_data
lab_data = requests.get(lab_data).json()
db.dna.drop()
db.dna.insert_many(lab_data)
dna_samples = list(db.dna.find())

# swim_advisories
swim_advisories = requests.get(swim_advisories).json()
db.advisory.drop()
db.advisory.insert_many(swim_advisories)
advisories = list(db.advisory.find())

# e_coli
e_coli = requests.get(e_coli).json()
db.prediction.drop()
db.prediction.insert_many(e_coli)
predictions = list(db.prediction.find())

# Route to render main.html template from Mongo database
@app.route("/")
def main():
    return "Hi"

@app.route("/water")
def water():
    return json_util.dumps(water_measurements)

@app.route("/weather")
def weather():
    return json_util.dumps(weather_measurements)

@app.route("/dna")
def dna():
    return json_util.dumps(dna_samples)

@app.route("/swimming")
def swimming():
    return json_util.dumps(advisories)

@app.route("/predictions")
def test():
    return json_util.dumps(predictions)

@app.route("/graph")
def plot():
    return render_template("dashboard.html")

@app.route("/map")
def maping():
    return render_template("map.html")

@app.route("/data")
def data():
    
    # Store collection in a list
    predictions = db.prediction.find()

    return render_template("data.html", predictions=predictions,classes="table table-striped")

if __name__ == "__main__":
    app.run(debug=True)