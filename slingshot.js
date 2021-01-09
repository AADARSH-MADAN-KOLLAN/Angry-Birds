class SlingShot {
    constructor(pointA, body) {
      const options = {
        pointA: pointA,
        bodyB: body,
        stiffness: 0.04,
        length: 10
      };
      this.pointA = pointA;
      this.sling = Constraint.create(options);
      this.sling1 = loadImage("sprites/sling1.png");
      this.sling2 = loadImage("sprites/sling2.png");
      this.sling3 = loadImage("sprites/sling3.png");
      World.add(world, this.sling);
    }
  
    go() {
      this.sling.bodyB = null;
    }
  
    display() {
      image(this.sling1, 200, 20);
      image(this.sling2, 170, 20);
      //image(this.sling3, )
      if (this.sling.bodyB) {
        var pointB = this.sling.bodyB.position;
        var pointA = this.pointA;
        push();
        strokeWeight(8);
        stroke(48, 22, 8);
        if(pointB.x<220){
          strokeWeight(8);
          line(pointB.x-20, pointB.y, pointA.x-10, pointA.y);
          line(pointB.x-20, pointB.y, pointA.x+30, pointA.y-3);
          image(this.sling3,pointB.x-30, pointB.y-10, 15, 30);
        }
        else{
          strokeWeight(8);
          line(pointB.x+20, pointB.y, pointA.x-10, pointA.y);
          line(pointB.x+25, pointB.y, pointA.x+30, pointA.y-3);
          image(this.sling3,pointB.x+25, pointB.y-10, 15, 30);
        }
        pop();
      }
    }
  
    attach(body) {
      this.sling.bodyB = body;
    }
  }
  