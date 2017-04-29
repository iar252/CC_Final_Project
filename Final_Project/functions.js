// these are the functions that are called on the homepage 

function homePanda(){
	noStroke();
	strokeWeight(1);
	// grass
	fill(93, 163, 79);
	ellipse(230,625,600,230);
	//log
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
	background(255);
	for(var i = 0; i < arrayOfRhinos.length; i++){
		arrayOfRhinos[i].display();
	}
	//arrayOfRhinos[0].movement();
	
	image(poacher, 0, arrayOfRhinos[0].location.y-30, poacher.width-250, poacher.height-250);
	
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
		var loc = createVector(0, 0);
	    loc = arrayOfBamboos[i].update();
		arrayOfBamboos[i].display();
	}
	for (var i = 0; i < arrayOfPandas.length-1; i++){
		arrayOfPandas[i].display();
		arrayOfPandas[i].mouth();
	}

	// the banner that says home
	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
    textFont("Helvetica");
    text("HOME",815, 28);
}


function penguinScene(){
	background(255);
	for (var i = 0; i < arrayOfPenguins.length; i++){
		arrayOfPenguins[i].display();
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

