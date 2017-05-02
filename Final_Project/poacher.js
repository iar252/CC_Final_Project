function Poacher(xPosPoacher){
	this.poacherShoots = false;
	this.location = new createVector(xPosPoacher,arrayOfRhinos[0].location.y+80);
	this.velocity = createVector(10,0);
	this.acceleration = createVector(.01,0);
	this.highest =2;
	this.rhinoDeath = false;
	this.rhinoHead = 460;




	this.xBullet = this.location.x+300;
	this.yBullet = this.location.y+50; 

	this.display = function(){
		image(poacher, this.location.x, this.location.y, poacher.width-250, poacher.height-250);
	}

	this.bullet = function(){
		if(this.poacherShoots==true && !this.rhinoDeath){
			//console.log(this.xBullet);
			fill(0);
			ellipse(this.xBullet,this.yBullet,20,10);
			this.xBullet += 1;
			this.yBullet -= .2;
		}
		
		if(this.xBullet > this.rhinoHead){
			for(var i = 0; i < arrayOfRhinos.length; i++){
				arrayOfRhinos[0].hitRhino = true;
				this.rhinoDeath = true;
		}
		
	}
	}

	this.moving = function(){
		if(arrayOfRhinos[0].hitRhino==true){
			this.velocity.add(this.acceleration); 
			this.location.add(this.velocity);
			this.velocity.limit(this.highest);
			return this.location;
			}
		}

	this.update = function(){
		if(this.location.x > 700+random(40,90)){
			this.velocity.x = 0;
			this.acceleration.x = 0;
		}
	}	

}