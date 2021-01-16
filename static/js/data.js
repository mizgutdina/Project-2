// var apiKey = "hlGd9wn7CAtiEIqsGYL3bVPJf";

const url = "https://data.cityofchicago.org/resource/2ivx-z93u.json";

// Fetch the JSON data and console log it
var data = d3.json(url).then(data => {
    //   console.log(data);
    var first = data[0];
    console.log(first);

    //   Create empty array to store values
    var beaches = [];
    var latitude = [];
    var longitude = [];
    var test_id = [];
    var timestamp = [];
    var dna_mean = [];
    var dna_samp_1 = [];
    var dna_samp_2 = [];

    //  Iterate through each object
    data.forEach((sample) => {
        // Iterate through each key and value
        Object.entries(sample).forEach(([key, value]) => {
            // Use the key to determine which array to push the value to
            if (key === "beach") {
                beaches.push(value);           
            }
            if (key === "dna_test_id") {
                test_id.push(value);                      
            }
            if (key === "latitude") {
                latitude.push(value);            
            }
            if (key === "longitude") {
                longitude.push(value);            
            }    
            // if (key === "dna_reading_mean") {
            //     timestamp.push(value);            
            // }
            // if (key === "dna_reading_mean") {
            //     timestamp.push(value);            
            // }
            // if (key === "dna_reading_mean") {
            //     timestamp.push(value);            
            // }
            // if (key === "dna_reading_mean") {
            //     timestamp.push(value);            
            // }
            // NEED TO FINISH ADDING ALL THE OTHER OBJECTS, i.e. 
            // dna_reading_mean
            // dna_sample_1_reading
            // dna_sample_2_reading
        });
    });

    var tbody = d3.select("tbody");

    // BONUS: Refactor to use Arrow Functions!
    data.forEach((sample) => {
        var row = tbody.append("tr");
        Object.entries(sample).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

    // EXTRACT VALUE FOR HTML HEADER. 
    // var col = [];
    // for (var i = 0; i < data.length; i++) {
    //     for (var key in data[i]) {
    //         if (col.indexOf(key) === -1) {
    //           col.push(key);
    //         }
    //     }
    //  }
    
    // Source: https://www.codegrepper.com/code-examples/javascript/display+json+data+in+html+table+using+javascript+dynamically
  
    // CREATE DYNAMIC TABLE.    
    // var table = document.createElement("table");

    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    // var tr = table.insertRow(-1);                   // TABLE ROW.
    // for (var i = 0; i < col.length; i++) {
    //     var th = document.createElement("th");      // TABLE HEADER.
    //     th.innerHTML = col[i];
    //     tr.appendChild(th);
    // }
    
    // ADD JSON DATA TO THE TABLE AS ROWS.
    // for (var i = 0; i < data.length; i++) {

    //     tr = table.insertRow(-1);

    //     for (var j = 0; j < col.length; j++) {

    //         var tabCell = tr.insertCell(-1);

    //         tabCell.innerHTML = data[i][col[j]];
    //     }
    // }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    // var divContainer = document.getElementById("showData");
    // divContainer.innerHTML = "";
    // divContainer.appendChild(table);    
});
