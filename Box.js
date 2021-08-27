class Box {
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.03,
            'friction':100.0,
            'density':1.0
        }

        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        console.log("hi");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        stroke("black");
        strokeWeight(5);
        rect(0,0,this.width,this.height);
        pop();
    }
}