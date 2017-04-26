// METTING WITH KELLY ON APRIL 25 !
// where all the main things go, the other tabs hold the smaller parts of the code dedicated to its reason
// the classes of each animal will be created in their respective tabs
// that way i can better organize their movements and vectors and other properties
// sound will be added to all pages
var rhinoImg;
var pandaImg;
var penguinImg;
var showHome = true;
var showPandaScene = false;
var showRhinoScene = false;
var showPenguinScene = false;
var arrayOfPandas =[];
var positions = [];
var xrandom;
function preload(){
	// learned the basics of photoshop to draw my own pictures 
	// photoshopping took a long long time to get used to
	rhinoImg = loadImage("media/rhino.png");
	pandaImg = loadImage("media/panda.png");
	penguinImg = loadImage("media/penguin.png");
}
function setup(){
	createCanvas(1800,700);
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
	// having an extremely difficult time with this, the pandas still are stacked vertically on eachother
	// putting pandas in the array
	
	for(var i = 0; i < 4; i++){
		xrandom = random(0,3);
		arrayOfPandas[i] = new Panda;
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

	print("X: " + mouseX);
	print("Y: " + mouseY);

	// tested the code below and it worked!
	// if(showHome==false){
	// 	white();
	// }
}

// struggled with this for a while until I realized that the 'k' is supposed to be capitalized
// attempt at implementing the state machine, discussed in office hours 
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
		// next line: calls function that takes us to the panda scene
	}

	else if(mouseIsPressed && mouseX>535 && mouseX<1115){
		showHome = false;
		showPandaScene = false;
		showRhinoScene = false;
		showPenguinScene = true;
		// next line: calls function that takes us to the penguin scene
	}

	else if(mouseIsPressed && mouseX>1115){
		showHome = false;
		showPandaScene = false;
		showRhinoScene = false;
		showPenguinScene = true;
		// next line: calls function that takes us to the penguin scene
	}
	else{
		background(255,0,0);
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

function homeRhino(){
	noStroke();
	fill(214, 187, 109);
	ellipse(1480,633,650,230);

    // image(the picture, x,y,size,size)
	image(rhinoImg,width/2+200,height-450, 6*rhinoImg.width/5, 6*rhinoImg.height/5);

	fill(255);
	ellipse(1245,425,25,20);
	fill(0);
	ellipse(1242,428,15,15);
	arc(1228, 488, 80, 80, radians(80), radians(115))

}

function homePenguin(){
	noStroke();
	strokeWeight(1);
	//block of ice
	fill(201, 239, 235);
	ellipse(840,620,550,230);

	fill(77, 173, 221);
	stroke(126, 184, 214);
	for (var i = 0; i < 400; i+=90){
		triangle(667+i,545,728+i,400,764+i,535);
		triangle(600+i,555, 685+i,321,744+i,545);
	}

	strokeWeight(6);
	for(var i = 0; i < 470; i+=70){
		rect(620+i,545,60,30);
	}
	noStroke();
	image(penguinImg,width/2-360,height-430, 6*penguinImg.width/5, 6*penguinImg.height/5);
	// penguins eyes
	fill(0);
	ellipse(850,510,28,28);
	ellipse(888,498,28,28);
	fill(255);
	ellipse(847,506,12,12);
	ellipse(887,493,12,12);
	ellipse(847,517,10,5);
	ellipse(893,503,10,5);
	ellipse(856,513,5,5);
	ellipse(883,504,5,5);
}

