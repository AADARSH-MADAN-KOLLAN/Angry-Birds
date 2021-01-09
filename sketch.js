const {Engine, World, Bodies, Constraint} = Matter;

var engine, world;
var box1, pig1;
var backgroundIm;
var slingShot;

var score;

function preload(){
    backgroundIm = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200, 400);

    // var button = createButton('reset');
    // button.position(width/2-550, height/2-80);
    // button.mousePressed(setup);


    engine = Engine.create();
    world = engine.world;

    score = 0;

    ground = new Ground(600,height,1200,20);

    platform = new Ground(150, 305, 300, 170)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    console.log(pig1.body.speed);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200, 50);

    slingShot = new SlingShot({x:200, y:50}, bird.body);

}

function keyPressed() {
    if (keyCode === 32) {
      World.remove(world, bird.body);
      bird = new Bird(150, 100, 25);
      slingShot.attach(bird.body);
    }

    if(key === "r"){
        setup();
    }
}

function mouseReleased() {
    slingShot.go();
}

function mouseDragged() {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function draw(){
    background(backgroundIm);
    Engine.update(engine);
    // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    slingShot.display()

    bird.display();

    platform.display();
}