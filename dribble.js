class Dribble{
constructor(bodyA, bodyB)
{
   var options ={ 
    
    bodyA : bodyA,
    bodyB : bodyB,
    length : 60,
    stiffness : 0.5
 }

this.dribble = Constraint.create(options);
World.add(world,this.dribble);

}

throw()
{
   this.dribble.bodyA = null;
}

attach(body)
{
   this.dribble.bodyA = body;
}












}