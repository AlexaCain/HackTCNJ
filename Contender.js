/* Creates single contender node */


function Contender(xLoc, yLoc, imgSrc, sideVal) {

	this.imgVal = imgSrc;
	this.x = xLoc;
	this.y = yLoc;
	this.side = sideVal;
	this.alive = true;

	var sizeVal = Math.floor(Math.random()*1001);
	if(sizeVal < 800){ 
		this.size = 1;
		this.imgSize = 25;
		this.health = 25;
		this.center = 12;
	}
	else if(sizeVal < 950){
		this.size = 2;
		this.imgSize = 50;
		this.health = 40;
		this.center = 25;
	}
	else{
		this.size = 3;
		this.imgSize = 100;
		this.health = 75;
		this.center = 50;
	}	
}

Contender.prototype.tick = function () {

	var jitter = Math.floor(Math.random()*1001)

	if(this.side == 1 && this.x < (canvas.width/2) - 20)
		this.x += 4;
	else if(this.side == 0 && this.x > (canvas.width/2))
		this.x -= 4;

	if(jitter > 950) 
		this.y += 5;
	else if( jitter < 50)
		this.y -= 5;
}

Contender.prototype.ow = function() {
	this.health -= 5;
	if(this.health <= 0)
		this.alive = false;
}