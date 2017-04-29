// adding a parameter because I want to make sure the rhinos start off at the same x positions every time
// also im trying to get the first rhino, arrayOfRhinos[1].whatevermethod to move forward 
function Rhino(xPosRhino){
	this.location = new createVector(xPosRhino,random(100,400));
	this.velocity = createVector(10,0);
	this.acceleration = createVector(random(-3,0),0);
	this.highest =3;
	this.display = function(){
	image(rhinoImg,this.location.x, this.location.y,6*rhinoImg.width/5, 6*rhinoImg.height/5);
	fill(255);
	ellipse(this.location.x+124, this.location.y+108,25,20);
	fill(0);
	ellipse(this.location.x+121, this.location.y+110,15,15);
	arc(this.location.x+105,this.location.y+171, 90, 81, radians(70), radians(115));
}

	this.movement = function(){
		this.velocity.add(this.acceleration); 
		this.location.add(this.velocity);
		this.velocity.limit(this.highest);
		return this.location;

	}


// there is going to be a group of rhinos, one of them starts to drift away from the rest and a poacher appears
// cuts off rhino's horn and then the rhinos disappears
}
