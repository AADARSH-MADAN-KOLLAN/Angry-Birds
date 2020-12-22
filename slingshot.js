class SlingShot {
    constructor(x, y, body) {
      const options = {
        pointA: {
          x: x,
          y: y
        },
        bodyB: body,
        stiffness: 0.04,
        length: 10
      };
      this.sling = Matter.Constraint.create(options);
      World.add(world, this.sling);
    }
  
    go() {
      this.sling.bodyB = null;
    }
  
    display() {
      if (this.sling.bodyB) {
        stroke("brown");
        strokeWeight(4);
        const posA = this.sling.pointA;
        const posB = this.sling.bodyB.position;
        line(posA.x, posA.y, posB.x, posB.y);
      }
    }
  
    attach(body) {
      this.sling.bodyB = body;
    }
  }
  