mws-restaurant-stage-1
=====================

# Mobile Web Specialist Certification - Stage 1

## Table of Contents
* [Installation](#installation)
* [Instructions](#instructions)
* [Background](#background)
* [Dependencies](#dependencies)
* [Contributing](#contributing)
* [License](#license)

## Installation

To install the app on your desktop:
1. Navigate to https://github.com/agwcolor/Restaurant-Review-Stage1 
2. Click the green 'Clone or Download' button to copy the directory or zipfile to your desktop machine.
3. If you have a zipfile, extract it.
4. Fire up a local webserver of your choice and assign a port to the the mws-restaurant-stage-1 folder
4. Open the mws-restaurant-stage-1 folder.
5. Open the index.html file in your browser.


## Instructions

This is a responsive restaurant review app - Stage 1. 

1. Use the keyboard and a voice reader of your choice to navigate the app. Can you find the hidden link?

2. Use your browser to resize the screen to see different views.

3. A service worker is also caching the assets in the background (in rest-app-v1). 

## Background
This project has implemented accessibility,  responsiveness, and installed a service worker managing a cache (in rest-app-v1). : [Project Overview](ProjectOverview.md) 

## Dependencies
Visited images and files have been cached, not the maps.

You will need a local webserver running. In addition, this app requires access to the following : mainly Map Box and Leaflet resources (http://www.mapbox.com).

       ```https://unpkg.com/leaflet@1.3.1/dist/leaflet.css" integrity="sha512-Rksm5RenBEKSKFjgI3a41vrjkw4EVPlJ3+OiI65vTjIdo9brlAacEuKOiQ5OFh7cOI1bkDwLqdLw3Zg0cRJAAQ==" crossorigin=""

       //normalize-css.googlecode.com/svn/trunk/normalize.css

       https://unpkg.com/leaflet@1.3.1/dist/leaflet.js" integrity="sha512-/Nsx9X4HebavoBvEBuyp3I7od5tA0UzAxs+j83KgC8PU0kgB4XiK4Lfe4y4cgBtaRJQEIFCW+oC506aPT2L1zw==

	   https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.jpg70?access_token={mapboxToken}
	   ```


## Contributing

Ideas regarding how to approach this project were were found in Udacity course resources, especially using the walkthrough by Matthew Cranford (https://matthewcranford.com/restaurant-reviews-app-walkthrough-part-1-map-api/), the  Knowledge Boards, as well as Udacity course materials, CSS Tricks, https://developers.google.com/web/fundamentals/codelabs/offline/, Mozilla.org docs on Promises. 

## License

MIT License

Copyright (c) [2018] [Abbie Weisenbloom]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---------------------------------------



