# group-project-3

1. Topic: Top Spotify Artists and Songs per Playlist per US state

    - Original Objectives
        * Find top artists and songs by state, top 3 of each
        * Determine by US state
        * Use US map to allow user to click on state then that state highlights then zooms and info box pops up with information. Hover gives basic information
        * Is legend required? 
        
2. Project Requirements
    * We utilized spotipy to read in the API data from Spotify, HTML/CSS to stylize the data within JavaScript, and SQL to manipulate the API data into a format compatible with creating JSON files. 
    * We utilized a capture of API data because the size of the data was not readily accessed real-time. We did speak to local TA to approve this method and subsequently utilized the data within Leaflet in JavaScript.
    * We included multiple JavaScript libraries for our visualization including highlightFeature, resetHighlight, zoomToFeature, and onEachFeature.
    * Because of the volume of results returned, we opted to examine the top 3 songs and artists for each of the 50 US States. This allowed for efficiency in data usage while still providing a solid sample for review.
    * Our visualization included multiple user-driven functions including a hover over feature that brought each state into view, a click feature that gave the user specific data on the state chosen, and lastly a click to reset feature that allowed the user to have a refreshed view for further research.
    * We had the baseline map view which provided a color-coding US map based on the average popularity score of the top three songs per state, a hover feature that brings to focus each state with the name for ease of identification, and a zoomed view of the selected state with the results listed for review.

3. Resources
    * Basic source data for the map: https://leafletjs.com/examples/choropleth/
    * Song, Artist, and Popularity data: https://developer.spotify.com/documentation/web-api
    * Leaflet information: https://leafletjs.com/reference.html
    * Multiple general searches for code including stackoverflow, ChatGPT for code review, and assistance from TAs and instructor during scheduled classes. 
