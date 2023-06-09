
// takes spotify_data.JSON and displays each of  the states top three songs and playlists in an overlay 
// on a map of the United States 

// display map
var map = L.map('map').setView([37.8, -96], 4);

var tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.geoJson(geojson).addTo(map);


// function states(data){

//}

// read in the data for the state boarders. 
var geojson;

d3.json("data.json", function(error, data) {
    if (error) {
      console.error(error);
    } else {
      // Handle the data
      geojson= data;
      console.log(geojson.features[0].geometry.coordinates);

      L.choropleth(geojson.features[0].geometry.coordinates, {

        // Define which property in the features to use.
        valueProperty: "DP03_16E",
    
        // Set the color scale.
        scale: ["#ffffb2", "#b10026"],
    
        // The number of breaks in the step range
        steps: 10,
    
        // q for quartile, e for equidistant, k for k-means
        mode: "q",
        style: {
          // Border color
          color: "#fff",
          weight: 1,
          fillOpacity: 0.8

    }}).addTo(map);
}});
  

// spotify_json_url= ''

// // Perform a d3 get request on the url and store the response in 'data'
// d3.json(spotify_json_url).then(function(data) {
//     // call the earthquakeFeatures function with the data
//     states(json_data);
// });


// add legend to show what the scale is for depth of the earthquake. 
// var legend2 = L.control({position: "bottomleft"});
// legend2.onAdd= function(){
//     var div = L.DomUtil.create("div", "legend");
//     return div;
// }
// legend2.addTo(map);