class Tower {
  constructor(x, y, width, height) {
    // isStatic is for the tower to be in one place
    var options = {
      isStatic: true
    };
    // 'this' is a key word to say that for example, the image belongs to the tower, the image is the tower
    this.image = loadImage("assets/tower.png");
    this.width = width;
    this.height = height;
    this.body = Bodies.rectangle(x, y, this.width, this.height, options);
    World.add(world, this.body);
  }
  display() {
    // we write shortforms for the position and angke
    var pos = this.body.position;
    var angle = this.body.angle;
    // start the settings
    push();
    // the position of the tower is in the particular coordinates that you have given
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    //stop the settings
    pop();
  }
}
