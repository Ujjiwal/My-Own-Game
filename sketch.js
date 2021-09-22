const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1500, 20);

  box1 = new Block(1000, 100, 90, 90);
  box2 = new Block(1000, 100, 90, 90);
  box3 = new Block(1000, 100, 90, 90);
  box4 = new Block(1000, 100, 90, 90);
  box5 = new Block(1000, 100, 90, 90);
  box6 = new Block(1000, 100, 90, 90);
  box7 = new Block(900, 100, 90, 90);
  box8 = new Block(900, 100, 90, 90);
  box9 = new Block(900, 100, 90, 90);
  box10 = new Block(900, 100, 90, 90);
  box11 = new Block(900, 100, 90, 90);
  box12 = new Block(900, 100, 90, 90);
  box13 = new Block(800, 100, 90, 90);
  box14 = new Block(800, 100, 90, 90);
  box15 = new Block(800, 100, 90, 90);
  box16 = new Block(800, 100, 90, 90);
  box17 = new Block(800, 100, 90, 90);
  box18 = new Block(800, 100, 90, 90);

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 100 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display()
  box18.display()

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}
