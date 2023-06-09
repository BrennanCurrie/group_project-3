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
var geojson;
// data for the polygon coordinates of each state
fetch('coordinates-1.json')
  .then(response => response.json())
  .then(data => {
    // Access the GeoJSON features
    console.log(data);
  })
//   .catch(error => {
//     console.error(error);
//   });
// var state_coordinate_url= "coordinates-1.json";
// console.log(state_coordinate_url);
// d3.json(state_coordinate_url).then(function(data){
//     console.log(data)
// })
// get just the coordinates using a d3 request 
// d3.json(state_coordinate_url).then(function(data) {
//    // Create a new choropleth layer.
//     geojson = L.choropleth(data.features.geometry.coordinates, {

//     // Define which property in the features to use.
//     valueProperty: "DP03_16E",

//     // Set the color scale.
//     scale: ["#ffffb2", "#b10026"],

//     // The number of breaks in the step range
//     steps: 10,

//     // q for quartile, e for equidistant, k for k-means
//     mode: "q",
//     style: {
//       // Border color
//       color: "#fff",
//       weight: 1,
//       fillOpacity: 0.8
//     }}); 

// }); 


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