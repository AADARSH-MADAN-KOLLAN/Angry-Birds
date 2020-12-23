class Bird extends BaseClass{
  constructor(x,y){
    var options = {friction:0.8}
    super(x,y,50,50, options);
    this.image = loadImage("sprites/bird.png");
    Matter.Body.setMass(this.body, this.body.mass*4)
  }
}