const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var line, line2, line3, line4, line5, line6, line7;
var plinko = [];
var ball = [];

// function preload() {

// }

function setup() {
    var canvas = createCanvas(500, 700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(0, 680, 500, 20);
    line = new Lines(80, 530);
    line2 = new Lines(160, 530);
    line3 = new Lines(240, 530);
    line4 = new Lines(320, 530);
    line5 = new Lines(400, 530);
    line6 = new Lines(0, 530);
    line7 = new Lines(490, 530);


    for (var i = 40; i <= width; i = i + 50) {
        plinko.push(new Plinko(i, 50));
    }

    for (var i = 15; i <= width - 10; i = i + 50) {
        plinko.push(new Plinko(i, 170));
    }

    for (var i = 40; i <= width; i = i + 50) {
        plinko.push(new Plinko(i, 290));
    }

    for (var i = 15; i <= width - 10; i = i + 50) {
        plinko.push(new Plinko(i, 410));
    }



}

function draw() {
    background(52, 152, 202);
    Engine.update(engine);
    fill("purple");
    noStroke();
    ground.display();
    fill("yellow");
    line.display();
    line2.display();
    line3.display();
    line4.display();
    line5.display();
    line6.display();
    line7.display();

    if (frameCount % 10 === 0) {
        ball.push(new Ball(random(width - 10), 10))
    }
    // console.log(World.frameRate);



    for (var i = 0; i < plinko.length; i++) {
        plinko[i].display();
    }

    for (var i = 0; i < plinko.length; i++) {
        plinko[i].display();
    }

    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255);

    fill(r, g, b);

    for (var j = 0; j < ball.length; j++) {
        ball[j].display();
    }

}

