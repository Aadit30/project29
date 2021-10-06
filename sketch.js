const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rope
let engine;
let world;

function setup() 
{
  createCanvas(600,700);
  engine = Engine.create();
  world = engine.world;
 
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ground = new Ground(300,650,600,20);
  rope=new Rope(6,{x:245,y:30}) 
 var fruit_options={density:0.001,

isStatic : false}
 fruit=Bodies.circle(300,300,15,fruit_options)
 fruir_con=new Link(rope,fruit)
}

function draw() 
{
  background(51);
  
 ellipse(fruit.position.x,fruit.position.y,15,15)
  ground.show();
 rope.show()
 Engine.update(engine);
}




