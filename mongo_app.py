# View mongo database and collection in compass

import requests
from flask import Flask, render_template, redirect
import pymongo
# from mongojoin.mongojoin import MongoJoin, MongoCollection

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
water_measurements = list(db.water_measurements.find())

# weather_stations
weather_stations = requests.get(weather_stations).json()
db.weather.drop()
db.weather.insert_many(weather_stations)
weather_measurements = list(db.weather_measurements.find())

# lab_data
lab_data = requests.get(lab_data).json()
db.dna.drop()
db.dna.insert_many(lab_data)
dna_samples = list(db.dna_samples.find())

# swim_advisories
swim_advisories = requests.get(swim_advisories).json()
db.advisory.drop()
db.advisory.insert_many(swim_advisories)
advisories = list(db.advisories.find())

# e_coli
e_coli = requests.get(e_coli).json()
db.prediction.drop()
db.prediction.insert_many(e_coli)
predictions = list(db.prediction.find())

# Create a MongoCollection object for each collection to join https://pypi.org/project/mongojoin/
# collection = MongoCollection("db_name","collection_name", ["collection_select_key_1", "collection_select_key_2"], {filter_key : filter_value})

# prediction = MongoCollection("db", "prediction", ["beach_name"], ["date"])
# advisory = MongoCollection("db", "prediction", ["beach_name"], ["date"])
# prediction_advisory = MongoJoin(prediction, advisory, ["beach_name","date"])

# Route to render index.html template from Mongo database
@app.route("/")
def render_index():

    # Return mongo_db.html template with list passed in
    return render_template("mongo_db.html", predictions=predictions)

if __name__ == "__main__":
    app.run(debug=True)