function Penguin(){
	/*
	plan: 
	there is going to be a hole in the sky, and a picture of trump on the top left saying "global warming is a hoax"
	as the hole gets bigger, more and more penguins disappear (penguin objects will be stored in an array)
	once the penguins are gone, trump's image turns to a pic of him shrugging
	*/
	this.location = new createVector(random(30,1500),random(150,500));
	this.display = function(){
		image(penguinImg,this.location.x,this.location.y, 6*penguinImg.width/5, 6*penguinImg.height/5);
		fill(0);
		ellipse(this.location.x+85, this.location.y+60, 28,28);
		ellipse(this.location.x+122, this.location.y+50, 28,28);
		fill(255);
		ellipse(this.location.x+83, this.location.y+56, 12,12);
		ellipse(this.location.x+119, this.location.y+46, 12,12);
		ellipse(this.location.x+83, this.location.y+66, 10,5);
		ellipse(this.location.x+125, this.location.y+55, 10,5);
		ellipse(this.location.x+92, this.location.y+62, 5,5);
		ellipse(this.location.x+115, this.location.y+56, 5,5);

	}

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