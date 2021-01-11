const {Engine, World, Bodies, Constraint} = Matter;

var engine, world;
var box1, pig1;
var backgroundImg;
var slingShot;

var GS = "onSling"

var array1 = [[1, 2, 3, 4, 5], "name", [1,2]];

var score;

function preload(){
    getBackgroundImage();
    //backgroundIm = loadImage("sprites/bg.png");
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

    score = 0;

}

function keyPressed() {
    if (keyCode === 32) {
      World.remove(world, bird.body);
      bird = new Bird(150, 100, 25);
      slingShot.attach(bird.body);
      GS = "onsling";
    }

    if(key === "r"){
        setup();
    }
}

function mouseReleased() {
    //if(bird.body.position.x < 201){
        slingShot.go();
    //}
    GS = "launched";
}

function mouseDragged() {
    if(GS !== "launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    slingShot.display()

    bird.display();

    platform.display();

    textFont("timesnewroman");
    textSize(25);
    noStroke();
    fill("white");
    text("Score: " + score, width-150, height-350);
}

async function getBackgroundImage(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
    var responseJSON = await response.json();
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    if(hour>= 06 && hour<19){
        var bg = "sprites/bg1.png"; 
    }
    else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}