function Panda(xPosPanda){	
	this.isSurprised = false;
	this.isLosingWeight = false;
	this.location = new createVector(xPosPanda,random(40,450));
	
// for loop to check .x and .y for when the pandas are being drawn
	this.display = function(){
		if(this.isLosingWeight==false){
		image(pandaImg,this.location.x, this.location.y,pandaImg.width,pandaImg.height);
		fill(255);
		ellipse(this.location.x+106, this.location.y+80, 15,18);
		ellipse(this.location.x+151,this.location.y+80,15,18);
		fill(0);
		ellipse(this.location.x+106,this.location.y+83,12,12);
		ellipse(this.location.x+151,this.location.y+83,12,12); 
		fill(255);
		ellipse(this.location.x+106,this.location.y+83,5,5);
		ellipse(this.location.x+151,this.location.y+83,5,5);
		}
		else{
		image(pandaImg,this.location.x, this.location.y,pandaImg.width-50,pandaImg.height);
		}


	}
	this.mouth = function(){
		fill(229, 130, 208);
		stroke(0);
		strokeWeight(2);
		if (this.isSurprised==false){
		arc(this.location.x+127,this.location.y+110,30, 30, radians(345), radians(188),CHORD);
	}
		else if(this.isSurprised==true && this.isLosingWeight==true) {
			ellipse(this.location.x+104,this.location.y+110, 4,4);
		}

		else{
			ellipse(this.location.x+127,this.location.y+110, 20,20);
		}
		noStroke();
	}

}



	



/*
Notes of splicing: 
arr.splice(_,_);
in the first slot you put which element you want to delete
in the second slot you put how many elements after the first slot you want to delete
in my case i just want to go to delete any random element so arr.splice(random(#of objects), 1); 



*/


/*

going to create vectors, movement, display function, update function, will be interacting with the other tabs

plan: 
using time, im going to
make the bamboo sticks disappear. 
after a certain amount of bamboos are gone, the panda's smile begins to disappear and the eyes close
use function to splice

*/

