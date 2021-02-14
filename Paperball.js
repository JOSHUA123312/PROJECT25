class Ball {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius= radius
      this.image=loadImage("pngkey.com-wrinkled-paper-png-964472.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle= this.body.angle
      push();
      rotate(angle);
      imageMode(CENTER);
      fill("purple");
      image(this.image,pos.x,pos.y,100,80);
      pop();
    }
  };
  