var readings = [];
var timestamps = [];
var beachName = "Oakwood";

function buildPlot(){
    var plotData = [
        {
            x: timestamps,
            y: readings,
            type: 'scatter'
        }
    ];
    var layout = {
        title: `${beachName} Bacteria Levels`,
        yaxis: {title: "Enterococci CCE per 100ml of water"},
        shapes: [{
            type: 'line',
            xref: 'paper',
            x0: 0,
            y0: 1000,
            x1: 1,
            y1: 1000,
            line: {
                color: 'rgb(255,0,0',
                width: 4,
                dash: 'dot'
            }
        }],
        annotations: [{
            xref:'paper',
            yref: 'y',
            x: 0.5,
            y: 1000,
            text: 'Swim Advisories go into effect at 1000 CCE',

        }]

    };
    Plotly.newPlot('myChart', plotData, layout);
};

function getData(data){
    data.forEach((sample) => {
        if (sample.beach === beachName) {
            readings.push(parseFloat(sample.dna_reading_mean));
            timestamps.push(sample.dna_sample_timestamp);
        };
        
    });
    
    readings.slice(1).slice(-100);
    timestamps.slice(1).slice(-100);
    console.log(readings);
    console.log(timestamps);
    buildPlot();
};

d3.json(url).then(getData);

// d3.selectAll("#selDataset").on("change", updateData);

// function updateData() {
//    var dropDownMenu = d3.select("#selDataset");
//    beachName = dropDownMenu.property("value");
//    Plotly.
// }