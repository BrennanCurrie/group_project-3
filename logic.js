
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
    return d >= 95 ? '#B6C8ED' :
           d >= 90 ? '#EDB4D3' :
           d >= 85 ? '#EDB4BF' :
           d >= 80 ? '#ECD9B4' :
           d >= 75 ? '#EDEDB4' :
           d >= 70 ? '#CFEDB4' :
           d >= 65 ? '#BCEDB4' :
           d >= 60 ? '#DAEDB6' :
                    '#BBBBBB';
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
    info.update(layer.feature.properties);
}
// Reset highlight feature with original style 
function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();

}

var previousZoom = null; // Variable to store the previous zoom level
// Function to zoom in on state when clicked
function zoomToFeature(e) {
    var layer = e.target;
    // Check if zooming in or zooming out
    if (previousZoom === null) {
        // Zoom in
        // Store the current zoom level
        previousZoom = map.getZoom(); 
        map.fitBounds(e.target.getBounds());
        deets.addTo(map);
        deets.update(layer.feature.properties);
        
    } else {
        // Zoom out
        map.setZoom(previousZoom);
        map.setView([37.8, -96], 4)
        //map.setView(layer.getBounds().getCenter(), previousZoom); // Zoom out to the previous zoom level
        deets.remove(); // Remove any details or pop-ups if necessary
        previousZoom = null; // Reset the previous zoom level
    }
}
// Function to call each style function when the layer is used. 
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

// Create a geoJSON layer to call the style and color function. 
var geojson;
d3.json("newdata.json", function(error, data) {
    if (error) {
        console.error(error);
    } else {
        // Handle the data
        geojson= data;
        // Call the style and get color function to add color and style to geojson layer
        L.geoJSON(geojson, {style: style}).addTo(map);
        geojson= L.geoJson(geojson, {
            style: style,
            onEachFeature: onEachFeature
        }).addTo(map);
    }});

var SD;
// Create a function to diplay the top songs when mouse hovers over state. 
function topSongs(spotifyData){
    console.log(spotifyData);
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
        SD = spotifyData;

    }});
//more custom pop up coding
var info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

   // method that we will use to update the control based on feature properties passed
info.update = function (state) {
    this._div.innerHTML = '<h4>Top Songs & Artists</h4>' +  (state ?
        '<b>' + state.name + '</b><br /> Click for Details'
        : 'Hover over a state');
};

info.addTo(map);

var deets = L.control({position: 'bottomleft'});;

deets.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'deets'); // create a div with a class "info"

    return this._div;
};

deets.update = function (state) {

    contents="No Top Song Information Available"
    SD.forEach(function(row) {
        if (row.State === state.name) {
            contents = (row.Track_Artist_Popularity).replace('\n','<br />')
            contents = contents.replace('\n','<br />')
        }
    });
    
    this._div.innerHTML = '<h4>Top Songs & Artists for: ' +  (state ?
        '<b>' + state.name + '</b></h4>'  + contents
        : 'Click on a state');
};




var legend = L.control({position: "bottomright"});
legend.onAdd= function(){
    var div = L.DomUtil.create("div", "legend");
    var limits = [100,95, 90, 85, 80, 75, 70, 65, 60]
    div.innerHTML = '<i><center><Font color=black>Avg. Popularity of<br />Top 3 Songs</font><br /><HR></center>'
    for (var i = 0; i < limits.length; i++) {
        div.innerHTML +=
            '<i style="background-color:' + getColor(limits[i+1]) + '">&nbsp&nbsp&nbsp&nbsp</i> ' +
            (limits[i + 1] ? limits[i+1] : 'no data') + (limits[i]>60 ? '&ndash;' + limits[i] + '<br>' : '');
    }
     return div;
}
legend.addTo(map);