# HighArc Code Challenge

* Install node.js in your local machine. There are differente ways install node depending of your Operating System:
	* Windows, Linux or Mac: [node.js](https://nodejs.org/es/download/)
	* For brew experts: ``` brew install node ```
	* For linux users: ``` sudo apt-get install nodejs ```

1. How to pull from REPO:
    * Once you have node.js correctly installed on your machine, you can now clone this repo by using this command in your terminal  ``` git clone https://github.com/Arkangel17/highArc ``` 
    or in case you don't have git installed, just click on the button above
     ``` Clone or Download ```.

2. Now go to the directory where you've cloned or saved the package, then go inside the project by using this command on the terminal:``` cd path/to/the/project ```. Example: ``` cd /c/users/{user}/onedrive/..../code/highArcChallenge ```.

3. Github commands to keep your local project up to date: 
    * Stop every running instance of the project by typing ``` cntr + c ``` on the terminal (cmd).
    * ``` git checkout master ```
    * ``` git pull ```
    * ``` gulp ```
    * ``` npm start ```


4. To run the html script, type the following in the given order in your terminal:
    * ``` gulp ```
    * ``` npm start ```
    * ``` go to (http://localhost:3000/higharc) ```

*** TABLE OF CONTENTS ***

[polygon](src/polygon.ts)
    - The order of vertices is not always guarranteed. This class provides
    a consistent approach to their order based on their respective location related
    to the centroid of the polygon by determining the hypotenuse and subsequent angle.
    - I decided to create a key to form an edge list; highArc edge list shown as an example
    of intended result from this class: 
        - 0: [0,0], 1: [0,2], 2: [2,2], 3: [2,0]

[algorOne](src/algorOne.ts)
    - create an adjaceny list ( array of lists)
    - traverse through this list with DFS coloring method
    - final result is a JSON

[algorOne.HTML.Script](src/script.ts)
    - To test the visuals of the highArc given example, and the two additional tests
    change lines 18 and 63 to match the data sets: hiArc, polygon1, and polygon2. Comments 
    provided to remind user.

[algorOne.HTML](dist/views/index.html)
    - very minimal html script to only show the graphic representation of algorithm #1

[algorTwo](src/algorTwo.ts)
    - Algorithm #2 can be tested in the highArcGeoCode file that is mostly the testing sandbox.

[algorThree](src/algorThree.ts)
    - Algorithm #3 can be tested in the highArcGeoCode, but admittedly, there is a bug in the DFS approach that doesn't output the intended array of faces.  This can be illustrated in the graphic representation of polygon #1 and #2.  As a result, this file has the intended format from algorithm #1 to also illustrate its efficacy with correct data.

[highArcGeoCode](src/highArcGeoCode.ts)
    - testing sandbox for polygon and algorithms #1-3... 
