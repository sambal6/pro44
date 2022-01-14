 var Engine = Matter.Engine,
 World = Matter.World,
 Bodies = Matter.Bodies;
var Pad
var ball
var bricks=[]
var engine,world
function setup() {
  createCanvas(800,500);
  engine=Engine.create();
   world=engine.world;
 // console.log(windowWidth/75)

 for(var i=50;i<windowWidth;i=i+50){
   bricks.push(new Brick(i,75))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,105))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,135))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,165))
 }
 for(var i=50;i<windowWidth;i=i+50){
  bricks.push(new Brick(i,195))
 }
 
 pad= new Paddle(390,450,200,20)
 ball= new Ball(300,400)
 
}


function draw() {
  background(0);
  Engine.update(engine);

  pad.display();
  ball.display();
  for(var i=0;i<=bricks.length;i++){
    bricks[i].display()
  }
    
  
}