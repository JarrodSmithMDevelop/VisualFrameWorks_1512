//Title
var titleBar = Ti.UI.createView({
	backgroundColor: "#000",
	borderRadius: 10,
	borderWidth: 3,
	top: 40,
	height: 40,
	width: 300
});

var titleBarText = Ti.UI.createLabel({
	text: "Top 8 guitarist of all time",
	color: "white"
});

//Create 2 views for previous and next buttons 
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

//Previous label
var previous = Ti.UI.createLabel({
	text: "Previous",
	color: "#000"
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

//Next label
var next = Ti.UI.createLabel({
	text: "Next",
	color: "#000"
});

//Array for the guitarist
var musician = ["1:Jimi Hendrix", "2:Stevie Ray Vaughn", "3:Steve Vai", "4:Jimmy Page", "5:Chuck Barry",
	"6:Kirk Hammett", "7:Angus Young","8:David Gilmour" ];

//incrementor for array
var i = 0;

//Create guitarist text for view
var guitarist = Ti.UI.createLabel({
	text: musician[i]
});


//Create guitarist view
var guitaristView = Ti.UI.createView({
	backgroundColor: "#999",
	borderRadius: 10,
	borderWidth: 3,
	width: 300,
	height: 50
});

//Event listener to move from the start button into app.
var listView = function(){ 
	startView.hide();
	startButton.hide();
	startView = null;
	startButton = null;
	mainWindow.add(previousView,nextView,guitaristView, titleBar);
};



//Event listener to move to next name
var moveNext = function(){
	guitaristView = null;
		i= i+1;
	var guitarist = Ti.UI.createLabel({
	text: musician[i]
});
	var guitaristView = Ti.UI.createView({
	backgroundColor: "#999",
	borderRadius: 10,
	borderWidth: 3,
	width: 300,
	height: 50
});	
	guitaristView.add(guitarist);
	mainWindow.add(guitaristView);

	
};

//Event listener to move to previous name 
var movePrevious = function(){	
		guitaristView = null;
		i= i-1;
	var guitarist = Ti.UI.createLabel({
	text: musician[i]
});
	var guitaristView = Ti.UI.createView({
	backgroundColor: "#999",
	borderRadius: 10,
	borderWidth: 3,
	width: 300,
	height: 50
});	
	guitaristView.add(guitarist);
	mainWindow.add(guitaristView);
};

previousView.add(previous);
nextView.add(next);
titleBar.add(titleBarText);
guitaristView.add(guitarist);
startView.addEventListener("click", listView);
nextView.addEventListener("click", moveNext);
previousView.addEventListener("click", movePrevious);


