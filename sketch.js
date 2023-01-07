const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  // loading the tower and background image
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  // we write minus so that the rectangle part of the cannon is not inverted
  // Inverted while on the arc part of the cannon
  angle = -PI / 4;
  // we create a new ground, tower and cannon
  // ground, tower and cannon are present only in the memory location of the computer
  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(180, 110, 100, 50, angle);
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  

  Engine.update(engine);
  ground.display();
  
// displaying the tower on the screen
  cannon.display();
  tower.display();
  
 
}



