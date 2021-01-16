var readings = [];
var timestamps = [];

function buildPlot(){
    var ctx = d3.select("#myChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            x: timestamps,
            y: readings
        }
    })
}

d3.json(url).then(data => {


    data.forEach((sample) => {
        if (sample.beach = "12th Street") {
            readings.push(parseFloat(sample.dna_reading_mean));
            timestamps.push(sample.dna_sample_timestamp);
        };
        
    });


    console.log(readings);
    console.log(timestamps);
    buildPlot();
})
