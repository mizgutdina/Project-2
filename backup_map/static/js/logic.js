// MongoDB
// Added node.js via Anaconda to PythonData 
// In terminal: 
// npm install mongodb --save
// node -v
// npm -v
// mkdir node_quickstart
// cd node_quickstart
// npm init -y
// npm install mongodb
// in vscode, select index.html and click "Go Live" in the lower right hand corner


// in terminal: npm install mongodb
// const mongo = require('mongodb')

// This section loses the map
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017/beachConditions_db";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const collection = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await collection.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// var myMap = L.map("map", {
//   center: [41.880091062236815, -87.62386643660288],
//   zoom: 13
// });

// // Adding tile layer
// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// // E. Coli data url
// var swim = "https://data.cityofchicago.org/resource/t62e-8nvc.json";
// var ecoli = "https://data.cityofchicago.org/resource/xvsz-3xcj.json";
// var water = "https://data.cityofchicago.org/resource/qmqz-2xku.json";
// var weather = "https://data.cityofchicago.org/resource/k7hf-8y75.json";

// // Map Markers
// d3.json(ecoli, function(response) {
//   console.log("response", response[0])

//   for (var i = 0; i < response.length; i++) {    
    
//     var latitude = response[i].latitude;
//     var longitude = response[i].longitude;
//     var beach_name = response[i].beach_name;
//     var date = response[i].date;
//     var level = response[i].predicted_level;
    
//     if (location) {
//       L.marker([latitude, longitude])
//         .bindPopup(
//           "<h2>" + beach_name + " Beach" +
//           "<h3> Timestamp: " + date + 
//           "<h3> E. Coli Level: " + level
//         )
//         .addTo(myMap);
//     }
//   }

// });
