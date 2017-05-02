function Penguin(xPosPenguin){
	/*
	plan: 
	there is going to be a hole in the sky, and a picture of trump on the top left saying "global warming is a hoax"
	as the hole gets bigger, more and more penguins disappear (penguin objects will be stored in an array)
	once the penguins are gone, trump's image turns to a pic of him shrugging
	*/
	this.location = new createVector(xPosPenguin,random(150,500));
	this.display = function(){
		if(ozoneLayerx < 125 && ozoneLayery < 125){
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
		else{
			image(penguinImg,this.location.x+45,this.location.y, penguinImg.width-40, 6*penguinImg.height/5);
			fill(0);
			ellipse(this.location.x+100, this.location.y+60, 16,18);
			ellipse(this.location.x+123, this.location.y+50, 16,18);
			fill(183, 179, 179);
			ellipse(this.location.x+101, this.location.y+60, 5,8);
			ellipse(this.location.x+124, this.location.y+50, 5,8);
		
		}
	}

	this.iceBlock = function(){
		fill(196, 223, 239);
		if(ozoneLayerx < 35 && ozoneLayery < 35){
			quad(this.location.x+20, this.location.y+140, this.location.x+320,this.location.y+140,this.location.x+250,this.location.y+250,this.location.x-90,this.location.y+250);
		}

		else if(ozoneLayerx < 75 && ozoneLayery < 75){
			ellipse(this.location.x+120, this.location.y+200,310,120);
		}

		else if(ozoneLayerx < 105 && ozoneLayery < 105){
			ellipse(this.location.x+120, this.location.y+200,410,40);
		}

		else if(ozoneLayerx < 140 && ozoneLayery < 140){
			ellipse(this.location.x+120, this.location.y+200,200,10);
		}
		else if(ozoneLayerx > 149 && ozoneLayery > 149){
		penguinsBeginDeath = true;
		}
	}

}


