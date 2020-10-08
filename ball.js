class Ball {
    constructor(x, y) {

        var opt = {
            restitution: 0.4
        }

        this.body = Bodies.circle(x, y, 10, opt);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipse(pos.x, pos.y, 10, 10);
    }
}