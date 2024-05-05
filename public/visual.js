class circleObj {
	constructor(x, y) {
	  this.pos = new p5.Vector(x, y);
    this.size = windowHeight*0.9;
	  this.direction = new p5.Vector(random(-1, 1), random(-1, 1));
	}
  
	display(c) {
	  this.updateColor(c);
	  ellipse(this.pos.x, this.pos.y, this.size);
	  // drawingContext.filter = 'blur(8px)';
	  this.move();
	}
  
	updateColor(c) {
	  fill(c);
	}
  
	move() {
	  //update the postion of bubble
	  this.pos.x += this.direction.x;
	  this.pos.y += this.direction.y;
	  // bounce off the borders
	  if (this.pos.x >= width - this.size/4 || this.pos.x < this.size/4) {
		this.direction.x = -this.direction.x;
	  }
	  if (this.pos.y >= height - this.size/4 || this.pos.y < this.size/4) {
		this.direction.y = -this.direction.y;
	  }
	}
  
}