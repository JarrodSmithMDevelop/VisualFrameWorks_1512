//Week 1 Project 1
//Jarrod Smith 
//Visual Frame Works


//Set back ground color

Ti.UI.setBackgroundColor ("#e7e5d9");

//Create window

var mainWindow = Ti.UI.createWindow({
	background: "#000"
});

//Create a view 

//Create start button
var startView = Ti.UI.createView({
	backgroundColor: "#000",
	borderRadius: 10,
	borderWidth: 3,
	width: 200,
	height: 50
});

//Create labels for views
//Start button
var startButton = Ti.UI.createLabel({
	text: "Click To Start",
	color: "white",
});

//Calling second js file
var loadFile = require("action");


//To open window
mainWindow.open();
startView.add(startButton);
mainWindow.add(startView);







