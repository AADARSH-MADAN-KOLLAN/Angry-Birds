class Bird extends BaseClass{
  constructor(x,y){
    var options = {friction:0.8}
    super(x,y,50,50, options);
    this.image = loadImage("sprites/bird.png");
    this.trailImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
    Matter.Body.setMass(this.body, this.body.mass*4)
  }
  display(){
    super.display();
    if(this.body.position.x > 240 && this.body.velocity.x > 10){
      var pos = [this.body.position.x, this.body.position.y]
      this.trajectory.push(pos);
    }
    for(var i = 0; i<this.trajectory.length; i++){
      image(this.trailImage, this.trajectory[i][0], this.trajectory [i][1])
    }
    //console.log(this.body.velocity.x)
  }
}