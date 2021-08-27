class Ball {
    constructor(x,y,width) {
        var options = {
           // 'restitution':0.3,
            'friction':1.0,
            'density':0.4
        }

        this.width = width;
       // this.height = height;
        this.body = Bodies.circle(x,y,width,options);
        World.add(world,this.body);
        console.log("hi");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
       // translate(pos.x,pos.y);
        //rotate(angle);
      //  fill("white");
        stroke("black");
        strokeWeight(5);
        ellipse(pos.x,pos.y,this.width,20);
        pop();
    }
}