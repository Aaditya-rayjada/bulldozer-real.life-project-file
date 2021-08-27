class Sun {
    constructor(x,y,width) {
        var options = {
         isStatic: true
        }

        this.width = width;
       
        this.body = Bodies.circle(x,y,width,options);
        World.add(world,this.body);
     
    }

    display(){
        var pos = this.body.position;
       
        push();
      
        fill("yellow");
        stroke("black");
        strokeWeight(2);
        ellipse(pos.x,pos.y,this.width,40);
        pop();
    }
}