// where all the main things go, the other tabs hold the smaller parts of the code dedicated to its reason
// the classes of each animal are created in their respective tabs
// that way i can better organize their movements and vectors and other properties
// sound will be added to all pages
var rhinoImg;
var pandaImg;
var penguinImg;
var fishImg;
var ivoryImg;
var trumpBefore;
var trumpAfter;
var poacher;
var bamboo_background;
var showHome = true;
var showPandaScene = false;
var showRhinoScene = false;
var showPenguinScene = false;
var arrayOfPandas =[];
var arrayOfBamboos =[];
var arrayOfRhinos = [];
var arrayOfPenguins = [];
var arrayOfPoachers = [];
var arrayOfFish = [];
var arrayOfIvory = [];
var positions = [];
var lifespan;
var arrayOfX = [];
var xRhino = [];
var xPanda = [];
var xPenguin = [];
var xPoacher = [];
var xIvory = [];
var rhino_background;
var igloo;
var time;
var ozoneLayerx = 20;
var ozoneLayery = 20;
var penguinsBeginDeath = false;
var pandaDeathBegin = false;
var gunShot;
var homeSounds;
var yvalue = 0.0;
var house1;






function preload(){
	// learned the basics of photoshop to draw my own pictures 
	// photoshopping took a long long time to get used to
	rhinoImg = loadImage("media/rhino.png");
	pandaImg = loadImage("media/panda.png");
	penguinImg = loadImage("media/penguin.png");
	bamboo_background = loadImage("media/bamboo_background.jpg");
	trumpBefore = loadImage("media/trumphoax.png");
	trumpAfter = loadImage("media/trumpmistake.png");
	rhino_background = loadImage("media/savannah_tree.png");
	fishImg = loadImage("media/fish.png");
	ivoryImg = loadImage("media/ivory.png");
	gunShot = loadSound("media/gunShot.mp3");
	homeSounds = loadSound("media/backgroundSounds.mp3");


	//i did not draw the poacher, only colored him in on photoshop since picture was black and white. 
	//the artist is Radoslav Penkov 
	poacher = loadImage("media/poacher.png");


	//this house and igloor are drawings from google, i only colored it in on photoshop
	house1 = loadImage("media/house1.png");
	igloo = loadImage("media/igloo.png");


}
function setup(){
	createCanvas(1800,700);
	//array for the x positions available for the rhinos
	xRhino = [850,1100,1300];

	//array for the x positions available for the pandas
	xPanda = [15,265,396,524,694,825,959,1184,1384,1593];

	//array for the x positions available for the penguins 
	xPenguin = [15,145,235,405,604,722,850,924,1045,1305,14021,1583,1710];

	//array for the x positions available for the poachers
	xPoacher = [-40, -90,-130];

	//array for the x positions available for the ivory
	xIvory = [500,580,710,820,910,1010,1100,1208,1250];

	// putting pandas in the array
	for(var i = 0; i < 11; i++){
		arrayOfPandas[i] = new Panda(xPanda[i]);
	}

	// putting bamboos in the array
	for(var i = 0; i < 50; i++){
		arrayOfBamboos[i] = new Bamboo;
	}

	// putting rhinos in the array
	for(var i = 0; i < 3; i++){
		arrayOfRhinos[i] = new Rhino(xRhino[i]);
	}

	// putting penguins in the array
	for (var i = 0; i < 11; i ++){
		arrayOfPenguins[i] = new Penguin(xPenguin[i]);
	}

	for(var i = 0; i < 3; i++){
		arrayOfPoachers[i] = new Poacher(xPoacher[i]);
	}

	for(var i = 0; i < 30; i++){
		arrayOfFish[i] = new Fish;
	}

	for(var i = 0; i < 9; i++){
		arrayOfIvory[i] = new Ivory(xIvory[i]);
	}
}
// purpose of this code: checks to see if the position was taken
//because I don't want the pandas to overlap on each other when they're drawn
// on the panda scene. 
// this code takes too long to work on the browser, 
//i put in the elements in the array on my own, and then passed in the x values when the 
// objects are drawn

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
}
// state machine working 
// use of bools because we dont want to pile on images and backgrounds, slows down the program
// this way, there's more control
function mousePressed(){
	homeSounds.setVolume(5);
	homeSounds.play();
	if(mouseY<40){
		showHome=true;
		showPenguinScene = false;
		showRhinoScene = false;
		showPandaScene = false;
	}

	else if(mouseX<531){
		showHome=false;
		showPandaScene = true;
		showRhinoScene = false;
		showPenguinScene = false;
	}

	else if(mouseX>567 && mouseX<1114){
		showHome = false;
		showPandaScene = false;
		showRhinoScene = false;
		showPenguinScene = true;
	}

	else if(mouseX>1158){
		showHome = false;
		showPandaScene = false;
		showRhinoScene = true;
		showPenguinScene = false;
	}
	else{
		background(155,0,110);
	}
}

// the function that draws the images for the homepage only
function homeAnimals(){
	background(255);
	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
     textFont("Helvetica");
     text("HOME",815, 28);

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




