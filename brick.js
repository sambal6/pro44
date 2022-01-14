class Brick{
constructor(x,y){
  var options={
      restitution:0.4,
      friction:0,
      isStatic:true
  }
  this.body=Bodies.rectangle(x,y,this.width,this.height,options)
  this.width=40;
  this.height=20;
  World.add(world, this.body);
}
display(){
    var pos=this.body.position
    rectMode(CENTER)
 
    rect(pos.x,pos.y,this.width,this.height)

}

}