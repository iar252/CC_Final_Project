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


