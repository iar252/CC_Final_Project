function Panda(){	
	this.location = new createVector(random(200,1500),random(200,400));
// for loop to check .x and .y for when the pandas are being drawn
	this.display = function(){
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
		fill(229, 130, 208);
		stroke(0);
		strokeWeight(2);
		arc(this.location.x+127,this.location.y+110,30, 30, radians(345), radians(188),CHORD);
		noStroke();
	}
}

function pandaScene(){
	background(bamboo_background);

// are we too old? 
	for(var i = arrayOfBamboos.legnth-1; i >=0; i--){
		if(arrayOfBamboos[i].isFinished()){ // then take us out
			arrayOfBamboos.splice(i,1);
		}
	}
	///*

	//display us!
	for( var i = 0; i < arrayOfBamboos.length; i++){
		//bambooDisappear();
		arrayOfBamboos[i].display();
	}
	//*/


	for (var i = 0; i < arrayOfPandas.length; i++){
		arrayOfPandas[i].display();
	}

	fill(242, 99, 166);
	rect(0,0,width,38);
	fill(255);
	textSize(30);
     textFont("Helvetica");
     text("HOME",815, 28);
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

