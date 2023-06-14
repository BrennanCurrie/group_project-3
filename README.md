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
    * We included multiple JavaScript features for our visualization including highlightFeature, resetHighlight, zoomToFeature, and onEachFeature.
    * Because of the volume of results returned, we opted to examine the top 3 songs and artists for each of the 50 US States. This allowed for efficiency in data usage while still providing a solid sample for review.
    * Our visualization included multiple user-driven functions including a hover over feature that brought each state into view, a click feature that gave the user specific data on the state chosen, and lastly a click to reset feature that allowed the user to have a refreshed view for further research.
    * We had the baseline map view which provided a color-coding US map based on the average popularity score of the top three songs per state, a hover feature that brings to focus each state with the name for ease of identification, and a zoomed view of the selected state with the results listed for review.

3. Results
    * We were able to determine the top three songs for most US states and easily identify those states that did not have enough data to rate. By using the color-coding for the average song popularity scores by state, we were able to see a pattern of states that shared a preference for more main-stream popular music, which in some regions, the southeast and northeast, the music tastes in those areas were more varied. This showed a more deversified preference for music choices. 

4. Future thoughts
    * It would be interesting to add additional data for genres of music, number of downloads as well as user demographics to get a full picture of Spotify's music base and preferences. More user interface could be added as well such as markers over each state providing a link to the playlist, artist, or song within that state. 

5. Resources
    * Basic source data for the map: https://leafletjs.com/examples/choropleth/; Mike Bostock credit for geoJSON newdata.json file.
    * Song, Artist, and Popularity data: https://developer.spotify.com/documentation/web-api
    * Leaflet information: https://leafletjs.com/reference.html
    * Multiple general searches for code including stackoverflow, ChatGPT for code review, and assistance from TAs and instructor during scheduled classes. 
