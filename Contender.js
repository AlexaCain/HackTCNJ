/* Creates single contender node */


function Contender(xLoc, yLoc, imgSrc, sideVal) {

	this.imgVal = imgSrc;
	this.x = xLoc;
	this.y = yLoc;
	this.side = sideVal;
	
	var sizeVal = Math.floor(Math.random()*1001);
	if(sizeVal < 800){ 
		this.size = 1;
		this.imgSize = 25;
	}
	else if(sizeVal < 950){
		this.size = 2;
		this.imgSize = 50;
	}
	else{
		this.size = 3;
		this.imgSize = 100;
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