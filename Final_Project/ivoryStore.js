function Ivory(xPosIvory){
	this.location = new createVector(xPosIvory,-500);
	this.velocity = createVector(10,0);
	this.acceleration = createVector(0,.3);
	this.highest = .5;


	this.display = function(){
		image(ivoryImg, this.location.x, this.location.y, ivoryImg.width, 2*ivoryImg.height);
	}

	this.comingDown = function(){
		this.velocity.add(this.acceleration); 
		this.location.add(this.velocity);
		this.velocity.limit(this.highest);
		return this.location;
	}

	this.check = function(){
		if(this.location.y > 150){
			this.velocity.y = 0;
			this.acceleration.y = 0;
		}
	}

}