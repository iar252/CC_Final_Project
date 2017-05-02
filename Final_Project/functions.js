var yval = 0.5; 

// these are the functions that are called on the homepage 
function homePanda(){
	noStroke();
	strokeWeight(1);
	// grass
	fill(93, 163, 79);
	ellipse(230,625,600,230);
	//panda's log
	fill(107, 69, 0);
	quad(30,460,355,400,355,490,30,560);
	ellipse(355,445,70,90);
	fill(63, 41, 0);
	ellipse(38,510,70,100);
	image(pandaImg,94,height-330, pandaImg.width, pandaImg.height);
	// panda's eyes
	fill(255);
	ellipse(200,450,15,18);
	ellipse(245,450,15,18);
	fill(0);
	ellipse(201,453,12,12);
	ellipse(245,453,12,12);
	fill(255);
	ellipse(201,453,5,5);
	ellipse(245,453,5,5);
	// panda's mouth
	fill(229, 130, 208);
	stroke(0);
	strokeWeight(2);
	arc(222,477,30, 30, radians(345), radians(188),CHORD);
	// single bamboo
	fill(1, 122, 17);
	stroke(226, 183, 11);
	strokeWeight(3);
	for(var i=0; i < 300; i+=40){
		rect(70+(i/11),590-i,20,40);
	}
	noStroke();
}

function homeRhino(){
	noStroke();
	fill(214, 187, 109);
	ellipse(1480,633,650,230);

    // image(the picture, x,y,size,size)
	image(rhinoImg,width/2+219,height-383, 6*rhinoImg.width/5, 6*rhinoImg.height/5);
	fill(255);
	ellipse(1245,425,25,20);
	fill(0);
	ellipse(1242,428,15,15);
	arc(1222, 488, 90, 81, radians(70), radians(115));
}

function homePenguin(){
	noStroke();
	strokeWeight(1);
	//block of ice
	fill(201, 239, 235);
	ellipse(840,620,550,230);

	//ice in the background
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


	image(penguinImg,width/2-136,height-253, 6*penguinImg.width/5, 6*penguinImg.height/5);
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



// these are the functions that DISPLAY the animals by using the class method of that animal 
function rhinoScene(){
	background(196, 159, 92);
	//image of the tree in the background
	image(rhino_background, 500,0,3*rhino_background.width/2, rhino_background.height);
	fill(131, 190, 226);
	ellipse(1186,375,300,90);

	// goes through the for loop and updates and displays the rhinos
	for(var i = 0; i < arrayOfRhinos.length; i++){
		arrayOfRhinos[i].update();
		arrayOfRhinos[i].display();
	}
	rhinoAndPoacherConditions();
	

	// the banner that says home
	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
     textFont("Helvetica");
     text("HOME",815, 28);
}


function pandaScene(){
	//this scene shows how when bamboos lose their homes due to deforestation, they begin to lose weight and then die 
	background(bamboo_background);

	//the function that holds all the conditions and controls for when things happen
	pandaAndBambooConditions();

	//where everything related to pandas and bamboos are updated and displayed
	for( var i = 0; i < arrayOfBamboos.length; i++){
	    arrayOfBamboos[i].update();
		arrayOfBamboos[i].display();
	}
	for (var i = 0; i < arrayOfPandas.length-1; i++){
		arrayOfPandas[i].display();
		arrayOfPandas[i].mouth();
	}

	
	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
    textFont("Helvetica");
    text("HOME",815, 28);
}


function penguinScene(){
	background(141, 159, 188);
	
	showIgloo(1300,100);
	showIgloo(200,40);

	ozoneLayerExpanding();

	noStroke();
	// could NOT put the iceBlock() and display() in the same for loop because then some of the penguins would be 
	// behind the iceblocks of penguins that had been made before
	for (var i = 0; i < arrayOfPenguins.length; i++){
		arrayOfPenguins[i].iceBlock();
	}
	for (var i = 0; i < arrayOfPenguins.length; i++){
		arrayOfPenguins[i].display();
	}

	trumpConditions();

	for(var i = arrayOfPenguins.length-1; i > 0; i--){
		if(penguinsBeginDeath==true){
			arrayOfPenguins.splice(0,1);
			penguinsBeginDeath=false;
		}
	}

	if(arrayOfPenguins.length==1){
	seaLevelsRising();
	}

	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
    textFont("Helvetica");
    text("HOME",815, 28);
}










function pandaAndBambooConditions(){
	//this counts how many bamboos are off the screen
	var counter=0;
	for(var i =0; i < arrayOfBamboos.length; i++){
		if(arrayOfBamboos[i].location.x > 1800){
			counter += 1;
		}
	}
	// if there are more than 15 off the screen
	if (counter >= 45){
		pandaDeathBegin = true;
	}
	// if there are more than 10 but less than 15, then they're losing weight
	if(counter > 15 && counter < 25){
		for(var i = 0; i < arrayOfPandas.length; i++){
			arrayOfPandas[i].isSurprised = true;
			
		}
	}
	// if there are more 5 but less than 10, then theyre surprised
	if(counter > 25 && counter < 40){
		for(var i = 0; i < arrayOfPandas.length; i++){
			arrayOfPandas[i].isLosingWeight = true;
		}

	}
		// loops backwards because when spliced, the order is messed up
	for(var i = arrayOfPandas.length-1; i > 0; i--){
		if(pandaDeathBegin == true){
			arrayOfPandas.splice(0, 1);
			pandaDeathBegin = false;
		}
	}
}

function rhinoAndPoacherConditions(){
		// the first rhino that was created is the one that moves away from the herd
	arrayOfRhinos[0].movement();

	// when the rhino moves a certain distance away from the herd, the poachers appear
	//once the poachers appears, they shoot the one thats away from the herd 
	// the first rhino dies
	if (arrayOfRhinos[0].location.x < 380){
		arrayOfPoachers[0].display();
		arrayOfPoachers[0].poacherShoots = true;
		arrayOfPoachers[0].rhinoHead = 460;
		arrayOfPoachers[0].bullet();
		arrayOfRhinos[0].rhinoCaught = true;
	}

	// to make sure the sound only plays when the first rhino is hit
	if(arrayOfPoachers[0].xBullet>370 && arrayOfPoachers[0].xBullet<400){
		gunShot.setVolume(3);
		gunShot.play();
	}

	//the poacher starts moving after the first rhino is killed
	if(arrayOfRhinos[0].hitRhino == true){
		// arrayOfRhinos[0].rhinoCaught = false;
		for(var i = 0; i < arrayOfPoachers.length;i++){
			// now the poachers are moving and the other rhinos are scared
			arrayOfPoachers[i].display();
			arrayOfPoachers[i].update();
			arrayOfPoachers[i].moving();
			arrayOfRhinos[i].rhinoCaught = true;
			// checks for which range theyll start shooting again
			if (arrayOfPoachers[i].location.x >= 380) {
				arrayOfPoachers[i].poacherShoots = true;
				arrayOfPoachers[i].xBullet = arrayOfPoachers[i].location.x+500;
				arrayOfPoachers[i].rhinoHead = 1200;
				arrayOfPoachers[i].bullet();
				if(arrayOfPoachers[1].xBullet>1200 && arrayOfPoachers[2].xBullet>1200){
					//flips this boolean because its checking in the next round of bullets has hit them
					rhinosAllDie = true;
					fill(86, 1, 1);
					ellipse(1400,600,600,70);
					gunShot.setVolume(3);
					gunShot.play();
				}
			}
		}
	}
			if (rhinosAllDie==true){
				for(var i = 1; i < arrayOfRhinos.length; i++){
					// spliced the rhinos off the array instead of just not displaying them like the first rhino
					arrayOfRhinos.splice(i,2);
				}
			}
}

function ozoneLayerExpanding(){
	// Ozone layer expanding
	if(ozoneLayerx < 150 && ozoneLayery < 150){
		stroke(0);
		fill(27, 13, 86);
		ellipse(1100,100,ozoneLayerx,ozoneLayery);
		ozoneLayerx+=.3;
		ozoneLayery+=.3;
	}
	if(ozoneLayerx >= 150 && ozoneLayery >= 150){
		stroke(0);
		fill(27, 13, 86);
		ellipse(1100,100,150,150);
	}
}

function trumpConditions(){
		if(ozoneLayerx < 140 && ozoneLayery < 140){
			strokeWeight(4);
		image(trumpBefore,610,50,trumpBefore.width,trumpBefore.height);
		fill(8, 52, 163);
		stroke(165, 3, 3);
		rect(770,80,210,68);
		triangle(770,120,770,145,760,135);
		fill(255);
		noStroke();
		textSize(16);
    	textFont("Helvetica");
    	text("Global warming is a HOAX!",776, 98);
    	textSize(14);
    	text("I know it. You know it.", 815,115);
    	text("Everybody knows it.",815,135);
    	
	}
	else{
		image(trumpAfter,610,50,trumpBefore.width,trumpBefore.height);
		fill(8, 52, 163);
		stroke(165, 3, 3);
		rect(760,75,180,48);
		triangle(760,100,760,123,750,115);
		fill(255);
		noStroke();
		textSize(18);
    	textFont("Helvetica");
    	text("This was CNN's fault!",763, 95);
    	text("Fake news",790, 115);
	}
}

function showIgloo(x,y){
	image(igloo, x,y,igloo.width, igloo.height);
}


/*
to better understand noise and in order to create more natural waves, i used 
https://p5js.org/examples/math-noise-wave.html

https://www.youtube.com/watch?v=Qf4dIN99e2w
Shiffman discussed 2D 

random and noise are different from each other 
although noise is random, it looks more natural, less rigid
i used random to create waves for my midterm project

I am using 2D Noise here 
*/

function seaLevelsRising(){
  background(150);
  ozoneLayerExpanding();
  trumpConditions();
  fill(255);
  arc(410, 390, 250, 450, radians(180), radians(0), CHORD);
  fill(28,107,160);
  beginShape(); 
  var xval = 0;      
  for (var i = 0; i <= width; i += 10) {
    var y = map(noise(xval, yval), 0, 1, 100,300);
    // only using 2D grid 
    //noise(x,y) the x and y are for the x and y coordinates on 2D grid
    // the last two vaues of map determine how calm or abrupt the movement is
    // so if the two values are drastically different, then the rising 
    // of the water will be intense, can be used for a water fountain
    // if the two values are close to one another, then the water is
    // more calm 
    vertex(i, y+80); 
    // vertex(increments the x, the height)
    xval += 0.05;
  }
  yval += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);

  //the fish that appear once the sea levels have risen.
  for(var i = 0; i < arrayOfFish.length;i++){
  	arrayOfFish[i].check();
  	arrayOfFish[i].swim();
  	arrayOfFish[i].display();
  }

  	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
    textFont("Helvetica");
    text("HOME",815, 28);
}


