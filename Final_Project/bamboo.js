function Bamboo(){
	this.location = new createVector(random(20,1700), random(200,700));
	this.velocity = createVector(10,0);
	this.acceleration = createVector(random(.3,0),0);
	this.highest = 2;
	this.display = function(){
		fill(99,155,38); 
		stroke(196, 156, 45);
		strokeWeight(5);
		// the bamboo on the panda scene
		for(var i=0; i < 300; i+=40){
			rect(this.location.x+(i/10),this.location.y-11*i/5,30,80);
		}
		noStroke();
	}

	this.update = function(){
		this.velocity.add(this.acceleration); // adding acceleration to velocity 
		this.location.add(this.velocity); // that velocity being added to location (trickle down!!)
		this.velocity.limit(this.highest);
		return this.location;
	}

}


