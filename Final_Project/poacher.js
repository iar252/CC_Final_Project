function Poacher(){
	this.IsRhinoNear = false;
	this.location = new createVector(0,arrayOfRhinos[0].location.y);

	this.display = function(){
		image(poacher, this.location.x, this.location.y, poacher.width-250, poacher.height-250);
	}
}