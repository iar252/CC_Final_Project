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

function homePanda(){
	noStroke();
	strokeWeight(1);
	// grass
	fill(93, 163, 79);
	ellipse(230,625,600,230);
	//log
	fill(107, 69, 0);
	quad(30,460,355,400,355,490,30,560);
	ellipse(355,445,70,90);
	fill(63, 41, 0);
	ellipse(38,510,70,100);
	image(pandaImg,94,height-330, pandaImg.width, pandaImg.height);
	// panda's eyes
	fill(255);
	ellipse(200,450,15,18);
	ellipse(245,450,15,18);
	fill(0);
	ellipse(201,453,12,12);
	ellipse(245,453,12,12);
	fill(255);
	ellipse(201,453,5,5);
	ellipse(245,453,5,5);
	// panda's mouth
	fill(229, 130, 208);
	stroke(0);
	strokeWeight(2);
	arc(222,477,30, 30, radians(345), radians(188),CHORD);
	
	fill(1, 122, 17);
	stroke(226, 183, 11);
	strokeWeight(3);
	for(var i=0; i < 300; i+=40){
		rect(70+(i/11),590-i,20,40);
	}
	noStroke();
}

function Bamboo(){
	this.location = new createVector(random(20,1700), random(200,700));
	this.display = function(){

	fill(99, 155, 38);
	stroke(196, 156, 45);
	strokeWeight(5);
	// the bamboo on the panda scene
	for(var i=0; i < 300; i+=40){
		rect(this.location.x+(i/10),this.location.y-11*i/5,30,80);
		
	}
	noStroke();
	// taking x, y, strokeWeight, length
	// drawLeaves(this.location.x, this.location.y,50,6);
}}

function pandaScene(){
	background(bamboo_background);
	for(var i = 0; i < arrayOfBamboos.length; i++){
		arrayOfBamboos[i].display();
	}
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

going to create vectors, movement, display function, update function, will be interacting with the other tabs

plan: 
using time, im going to
make the bamboo sticks disappear. 
after a certain amount of bamboos are gone, the panda's smile begins to disappear and the eyes close
use function to splice

*/

