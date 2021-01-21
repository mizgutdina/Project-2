var myMap = L.map("map", {
    center: [41.918774494165326, -87.5023135313888],
    zoom: 13
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // var queryUrl = "https://data.cityofchicago.org/resource/2ivx-z93u.json" //"https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date%20between'2020-01-10T12:00:00'and'2020-01-10T14:00:00'"
  // var link = "$where=date>'2020-01-01T12:00:00'"
  // url = queryUrl + link 
  
  var url = "https://data.cityofchicago.org/resource/2ivx-z93u.json"

  //var url ="https://data.cityofchicago.org/resource/6zsd-86xi.json?$where=date%20between%20%272020-01-10T12:00:00%27%20and%20%272020-01-10T14:00:00%27"

  d3.json(url, function(response) {

    const beachs = {};

    for(let i=0;i< response.length ; i++){
      const name = response[i]["beach"];
      beachs[name] = response[i]
    }
    console.log("beachs :: ",Object.values(beachs))

    const descriptBeachs = Object.values(beachs)

    // const beachs = new Set(response.map(beach=>([ beach['beach']])))
    console.log("beachs ::",beachs)
    
    //Setting up to get distinct beach names
    // var lookup = {}
    // //var items = response
    // var result = []

    //Array for heatmap coordinates 
    var heatArray = [];
    const dna_sample_1_reading = descriptBeachs.map(beach=>((+beach.dna_sample_1_reading || 0 +
      +beach.dna_sample_2_reading|| 0)/2))
      console.log(dna_sample_1_reading)
    const  min = Math.min.apply(Math, dna_sample_1_reading)
    const  max = Math.min.apply(Math, dna_sample_1_reading)
    console.log(min)
    function scaleValue(value, min, max) {
      return (value - min)/(max-min)
    }
  
    for (var i = 0; i < descriptBeachs.length; i++) {

         
        //  //for (var item, i=0; item=items[i++];) {
        //   var beach = response.beach;
        
        //   if (!(beach in lookup)) {
        //     lookup[beach] = 1;
        //     result.push(beach);
        //   }
        // }
        // console.log(result) //Does not see it in cosole log

      var location = descriptBeachs[i].location;
  
      if (location) {
        //Resource: https://flaviocopes.com/how-to-convert-string-to-number-javascript/ 
         var lat = parseFloat(location.latitude);
        
         var long = parseFloat(location.longitude);
         
         var meanRead = ((+descriptBeachs[i].dna_sample_1_reading +
          +descriptBeachs[i].dna_sample_2_reading)/2);



         heatArray.push([lat, long, scaleValue(meanRead, min, max)]);

      var heat = L.heatLayer(heatArray, {
      gradient: {0.4: 'blue', 0.65: 'lime', 1: 'red'},
      radius: 20,
      blur: 15
    }).addTo(myMap);
         
        //  L.marker([lat, long])  //How to get lat long for distinct beach only 
        //  .bindPopup("<h1>" + descriptBeachs.beach + "</h1>")
        //  .addTo(myMap);
         
      }
    }
   //ParseFloat
    console.log(heatArray);

    
   });
 