//Create 2 views 
//Create previous view
var previousView = Ti.UI.createView({
	backgroundColor: "#999",
	borderRadius: 10,
	borderWidth: 3,
	width: 100,
	height: 50,
	bottom: 20,
	left: 20
});

//Create next view 
var nextView = Ti.UI.createView({
	backgroundColor: "#999",
	borderRadius: 10,
	borderWidth: 3,
	width: 100,
	height: 50,
	bottom: 20,
	right: 20
});


//Previous label
var previous = Ti.UI.createLabel({
	text: "Previous",
	color: "#000"
});

//Next label
var next = Ti.UI.createLabel({
	text: "Next",
	color: "#000"
});




var listView = function(){ 
	startView.top = "40";
	startView.width = "250";
	startButton.text = "Top 8 Guitarist of all time.";
	startView = null;
};

startView.addEventListener("click", listView);
startbutton.addEventListener("click", listTitle);
mainWindow.add(previousView,nextView);
previousView.add(previous);
nextView.add(next);
