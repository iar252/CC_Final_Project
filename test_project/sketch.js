// METTING WITH KELLY ON APRIL 28 !
// where all the main things go, the other tabs hold the smaller parts of the code dedicated to its reason
// the classes of each animal are created in their respective tabs
// that way i can better organize their movements and vectors and other properties
// sound will be added to all pages
var rhinoImg;
var pandaImg;
var penguinImg;
var bamboo_background;
var showHome = true;
var showPandaScene = false;
var showRhinoScene = false;
var showPenguinScene = false;
var arrayOfPandas =[];
var arrayOfBamboos =[];
var arrayOfRhinos = [];
var arrayOfPenguins = [];
var positions = [];
var xrandom;
var xvalue;
var lifespan;

// var testPenguin;
// var testRhino;

function preload(){
	// learned the basics of photoshop to draw my own pictures 
	// photoshopping took a long long time to get used to
	rhinoImg = loadImage("media/rhino.png");
	pandaImg = loadImage("media/panda.png");
	penguinImg = loadImage("media/penguin.png");
	bamboo_background = loadImage("media/bamboo_background.jpg");

}
function setup(){
	createCanvas(1800,700);
	//lifespan = millis();
	positions[0] = 150;
	positions[1] = 1320;
	positions[2] = 1600;
	positions[3] = 720;
	// positions[4] = 840;
	// positions[6] = 950;
	// positions[7] = 1100;
	// positions[8] = 1240;
	// positions[9] = 1429;
	// positions[10] = 1593;
	// having an extremely difficult time with this, the animals are still stacked vertically on eachother
	xrandom = random(0,3);
	xvalue = positions[xrandom];
	// putting pandas in the array
	for(var i = 0; i < 8; i++){
		arrayOfPandas[i] = new Panda;
	}


	for(var i = 0; i < 15; i++){
		arrayOfBamboos[i] = new Bamboo;
	}
	// console.log("working");
	// testRhino = new Rhino;

	for(var i = 0; i < 3; i++){
		arrayOfRhinos[i] = new Rhino;
	}

	for (var i = 0; i < 14; i ++){
		arrayOfPenguins[i] = new Penguin;
	}

}
// purpose of this code: checks to see if the position was taken
//because I don't want the pandas to overlap on each other when they're drawn
// on the panda scene. 
// this code takes too long to work on the browser, 
//i put in the elements in the array on my own
// 	for(var i=0; i<30;i++){
// 		var find = false;
// 		var temp;
// 		while(!find){
// 			find = true; // should be true all the way to the end 
// 			temp = random(130,500);
// 			for (var x = 0; x<i; x++){
// 				if(abs(temp - positions[x]) < 140){ 
// 					find = false;
// 					break;
// 				}
// 			}
// 		}
// 	positions[i] = temp; // finally can use this value because it passed all the tests
// 	}



function draw(){
	if (showHome==true){
		homeAnimals();
	}	

	if (showPandaScene == true){
		pandaScene();	
	}

	if (showRhinoScene == true){
		rhinoScene();
	}

	if (showPenguinScene == true){
		penguinScene();
	}


	print("X: " + mouseX);
	print("Y: " + mouseY);


/*
	// now display your bamboo
	for(var i = 0; i < arrayOfBamboos.legnth -1; i++){
		arrayOfBamboos[i].display();
	}
*/

/*
	var currentTime = millis();
	if(currentTime - lifespan > 10000){
		// then slice from your array
	}
	*/

	// tested the code below and it worked!
	// if(showHome==false){
	// 	white();
	// }
}

// state machine working well :D
// use of bools because we dont want to pile on images and backgrounds, slows down the program
// this way, there's more control
function mousePressed(){
	if(mouseY<40){
		showHome=true;
		showPenguinScene = false;
		showRhinoScene = false;
		showPandaScene = false;
	}

	else if(mouseIsPressed && mouseX<535){
		showHome=false;
		showPandaScene = true;
		showRhinoScene = false;
		showPenguinScene = false;
	}

	else if(mouseIsPressed && mouseX>535 && mouseX<1115){
		showHome = false;
		showPandaScene = false;
		showRhinoScene = false;
		showPenguinScene = true;
	}

	else if(mouseIsPressed && mouseX>1150 && mouseX < 1700){
		showHome = false;
		showPandaScene = false;
		showRhinoScene = true;
		showPenguinScene = false;
	}
	else{
		background(155,0,110);
	}

}

// the functions 
function homeAnimals(){
	background(255);
	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
     textFont("Helvetica");
     text("HOME",815, 28);
	// these animals are only for the homepage, so no need for the objects of them being called for now
//background for rhino
	for(var i =0; i < 580; i++){
		stroke(260,222-(2*i/5),4);
		strokeWeight(12);
		line(1163,44+i,1800,44+i);
	}
	homeRhino();

	//background for panda
	(227, 228, 229)
	for(var i =0; i < 580; i++){
		stroke(212-(2*i/5), 213-(2*i/11), 255);
		strokeWeight(12);
		line(0,44+i,524,44+i);
	}
	homePanda();

	//background for penguin
	for(var i =0; i < 580; i++){
		stroke(232-(2*i/5), 232-(2*i/5), 232-(2*i/5));
		strokeWeight(12);
		line(572,44+i,1108,44+i);
	}
	homePenguin();

}
// function white(){
// 	background(255);
// }



