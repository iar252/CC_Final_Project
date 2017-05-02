function Fish(){
	this.location = new createVector(random(1700),random(300,height-50));
	this.velocity = createVector(10,0);
	this.acceleration = createVector(random(-.3,0),0);
	this.highest =1;

	this.display = function(){
		image(fishImg,this.location.x,random(this.location.y,this.location.y+5),fishImg.width,fishImg.height);
		fill(255);
		ellipse(this.location.x+43,random(this.location.y,this.location.y+5)+45,20,15);
		fill(0);
		ellipse(this.location.x+41,random(this.location.y,this.location.y+5)+45,10,10);
	}

	this.swim = function(){
		this.velocity.add(this.acceleration); 
		this.location.add(this.velocity);
		this.velocity.limit(this.highest);
		return this.location;
	}

	this.check = function(){
		if(this.location.x < 10){
			
			this.location.x = 1600;
		}
	}
}