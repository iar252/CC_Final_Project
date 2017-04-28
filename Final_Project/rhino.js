function Rhino(){
	this.location = new createVector(random(50,1300),random(100,300));
	this.display = function(){
	image(rhinoImg,this.location.x, this.location.y,6*rhinoImg.width/5, 6*rhinoImg.height/5);


	fill(255);
	ellipse(this.location.x+124, this.location.y+108,25,20);
	fill(0);
	ellipse(this.location.x+121, this.location.y+110,15,15);
	arc(this.location.x+105,this.location.y+171, 90, 81, radians(70), radians(115));



// there is going to be a group of rhinos, one of them starts to drift away from the rest and a poacher appears
// cuts off rhino's horn and then the rhinos disappears

}
}
