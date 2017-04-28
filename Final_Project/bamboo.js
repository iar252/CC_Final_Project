function Bamboo(){
	this.location = new createVector(random(20,1700), random(200,700));
	this.lifespan = 1000;
	this.born = millis(); // time this was born


	this.display = function(){
		fill(99,155,38); 
		stroke(196, 156, 45);
		strokeWeight(5);
		// the bamboo on the panda scene
		for(var i=0; i < 300; i+=40){
			rect(this.location.x+(i/10),this.location.y-11*i/5,30,80);
		}
		noStroke();
		// taking x, y, strokeWeight, length
		// drawLeaves(this.location.x, this.location.y,50,6);
	}

	this.isFinished = function(){
		//if (this.lifespan>0){
		if(millis() - this.born > this.lifespan){
			return true;
		}
		else{
			return false;
		}
	}
//}
/*

	this.bambooDisappear = function(){
		for(var i = arrayOfBamboos.legnth-1; i >=0; i--){
			if(arrayOfBamboos[i].isFinished()){
				arrayOfBamboos.splice(i,1);
			}
		//}
		}

		*/

}