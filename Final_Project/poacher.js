function Poacher(){
	this.poacherShoots = false;
	this.location = new createVector(-40,arrayOfRhinos[0].location.y+80);
	this.velocity = createVector(10,0);
	this.acceleration = createVector(random(3,0),0);
	this.highest =5;

	this.display = function(){
		image(poacher, this.location.x, this.location.y, poacher.width-250, poacher.height-250);
		if(this.poacherShoots==true){
			fill(0);
			ellipse(150,250,60,60);
		}
	}

}