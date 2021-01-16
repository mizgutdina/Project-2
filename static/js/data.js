const url = "https://data.cityofchicago.org/resource/2ivx-z93u.json";

// Fetch the JSON data and console log it
var data = d3.json(url).then(data => {
    //   console.log(data);
    var first = data[0];
    console.log(first);
    var tbody = d3.select("tbody");
    
    // From Unit 14 Week 3 Activity 03-Evr_D3_Table
    data.forEach((sample) => {
        var row = tbody.append("tr");
        Object.entries(sample).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });  
});
