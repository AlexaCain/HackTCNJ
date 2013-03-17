/* Creates single contender node */


function Contender(xLoc, yLoc, imgSrc, sideVal) {

	this.img = imgSrc;
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

	if(this.side == 1)
		this.x += 5;
	else
		this.x -= 5;
	
	if(this.x < 20)
		this.side = 1;
	else if(this.x > canvas.width - 120)
		this.side = 0;

	if(jitter > 950) 
		this.y += 5;
	else if( jitter < 50)
		this.y -= 5;
}