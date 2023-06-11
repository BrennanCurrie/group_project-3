
// takes spotify_data.JSON and displays each of  the states top three songs and playlists in an overlay 
// on a map of the United States 

// display map
var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Create a function to add color to the map
// Sourced from https://leafletjs.com/examples/choropleth/
function getColor(d) {
    return d > 1000 ? '#fff7fb' :
           d > 500  ? '#ece2f0' :
           d > 200  ? '#d0d1e6' :
           d > 100  ? '#a6bddb' :
           d > 50   ? '#67a9cf' :
           d > 20   ? '#3690c0' :
           d > 10   ? '#02818a' :
                      '#016450';
}

// Add style to the map and call color function
// Sourced from https://leafletjs.com/examples/choropleth/
function style(feature) {
    return {
        fillColor: getColor(feature.properties.density),
        weight: 2,
        opacity: 1,
        color: 'black',
        dashArray: '1',
        fillOpacity: 0.75
    };
}
// highlight function when mouse is hovered over the state 
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: '#666',
        dashArray: '',
        fillOpacity: 0.5
    });

    layer.bringToFront();
    info.update(layer.feature.properties.name);
}

// Reset highlight feature with original style 
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}

// function to zoom in on state when clicked 
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

// Function to call each style function when the layer is used. 
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// create function geoFormat to take the states names to be able to compare to the states names
// from the other json file (data.json)
// function geoFormat(data,states){
//     for (var i=0; i< data.length; i++){
//         console.log(data)}
//         // check to make sure the states names match 
//         if (data[i].features.properties.name === state[i]){
//             // if they do match, bind popup to each state when hovered over. 
//             var name= state[i];
//         }
// }

var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = '<h4>States Top Tracks</h4>' +  (props ?
        '<b>' + props.name + '</b><br />' 
        : 'Hover over a state');
};

info.addTo(map);

//  Create a geoJSON layer to call the style and color function. 
var geojson;
d3.json("data.json", function(error, data) {
    if (error) {
        console.error(error);
    } else {
        // Handle the data
        geojson= data;
        console.log(geojson)
        // Call the style and get color function to add color and style to geojson layer
        geojson= L.geoJson(geojson, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);
}});

// Create a function to diplay the top songs when mouse hovers over state. 
function topSongs(spotifyData){
    for (var i=0; i< spotifyData.length; i++){
        const state= (spotifyData[i].State)
        const topTracks= (spotifyData[i].Track_Artist_Popularity)
    }
    
}

// Load in the spotify json. 
// when pushed to main, fix file path 
d3.json("spotify_data.json", function(error, spotifyData) {
    if (error) {
        console.error(error);
    } else {
        // Handle the data
        // call the function 
        topSongs(spotifyData);

    }});


// add legend to show what the scale is for depth of the earthquake. 
// var legend2 = L.control({position: "bottomleft"});
// legend2.onAdd= function(){
//     var div = L.DomUtil.create("div", "legend");
//     return div;
// }
// legend2.addTo(map);