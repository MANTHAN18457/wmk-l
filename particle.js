class Particle{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y,  options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        this.color=color(random(0,255),random(0,255),random(0,255))
        push();

        translate(this.body.position.x, this.body.position.y);
        rotate(angle)
        pop();
      }
}