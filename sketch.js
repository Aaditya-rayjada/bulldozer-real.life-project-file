const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world
var ground;
var box1;

function setup() {
  createCanvas(800,400);
  
engine = Engine.create();
world = engine.world

ground = new Ground(400,350,800,70);
console.log("before creating")
box1 = new Box(400,200,50,50);
//box2 = new Box(400,200,50,50);
box3 = new Box(400,200,50,50);
box4 = new Box(450,200,50,50);
//box5 = new Box(450,200,50,50);
box6 = new Box(450,200,50,50);
box7 = new Box(500,200,50,50);
//box8 = new Box(500,200,50,50);
box9 = new Box(500,200,50,50);
box10 = new Box(425,100,50,50);
box11 = new Box(475,100,50,50);
box12 = new Box(450,0,50,50);
box13 = new Box(350,200,50,50);
box14 = new Box(550,200,50,50);
//box15 = new Box(370,100,50,50);
sun = new Sun(700,100,40);
ball = new Ball(200,200,20);
slingshot = new SlingShot(ball.body,{x:200,y:100});

  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);


 // drawSprites();

 ground.display();
 box1.display();
 //box2.display();
 box3.display();
 box4.display();
 //box5.display();
 box6.display();
 fill("white")
 ball.display();
 box7.display();
// box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 //box15.display();
 slingshot.display();
 //fill("yellow")
 sun.display();

}

function mouseDragged() {

  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}