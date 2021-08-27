class Ground {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }

        this.width = width
        this.height = height
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        //console.log("hi");
        //console.log(this.body.position);
    }


    display() {
        var pos = this.body.position
        fill("brown");
        stroke(12)
        rectMode(CENTER)
        rect(pos.x, pos.y, this.width, this.height);

    }
}