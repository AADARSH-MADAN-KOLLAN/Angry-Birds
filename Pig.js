class Pig extends BaseClass{
    constructor(x, y) {
      super(x, y, 50, 50);
      this.image = loadImage("sprites/enemy.png");
      this.visibility = 255;
     }
    display(){

      if(this.body.speed<3){
        super.display();
      }
      else{
        push();
        tint(255, this.visibility);
        var pos = this.body.position;
        image(this.image, pos.x, pos.y, 50, 50);
        this.visibility = this.visibility-5;
        pop();
        World.remove(world, this.body);
      }
    }
  };