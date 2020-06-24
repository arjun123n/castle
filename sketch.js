

 var Engine = Matter.Engine,
World= Matter.World,
Bodies = Matter.Bodies;

var engine;
var box1;
var box2;
var box3;
var box4;
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;


function setup() {
   createCanvas(800,400);
 engine = Engine.create();
box1 = Bodies.rectangle(200,100,80,80);
box2 = Bodies.rectangle(200,140,80,80);
box3 = Bodies.rectangle(320,140,80,80);
box4 = Bodies.rectangle(320,100,80,80);
box5 = Bodies.rectangle(260,20,80,80);
box6 = Bodies.rectangle(390,20,80,80);
box7 = Bodies.rectangle(130,20,80,80);
box8 = Bodies.rectangle(100,150,20,600);
box9 = Bodies.rectangle(290,150,20,600);
box10 = Bodies.rectangle(480,150,20,600);
box11 = Bodies.rectangle(100,130,100,20);
box12 = Bodies.rectangle(400,130,100,20);
box13 = Bodies.rectangle(160,310,80,80);
box14 = Bodies.rectangle(380,310,80,80);
box15 = Bodies.rectangle(210,40,52,20);
box16 = Bodies.rectangle(340,40,52,20);
box17 = Bodies.rectangle(550,320,102,30);
box18 = Bodies.rectangle(590,150,20,300);
box19 = Bodies.rectangle(590,100,80,50);
}

function draw() {
  Engine.update(engine)
  background(0); 
  rect(box1.position.x,box1.position.y,80,80);
  rect(box2.position.x,box2.position.y,80,80);
  rect(box3.position.x,box3.position.y,80,80);
  rect(box4.position.x,box4.position.y,80,80);
  rect(box5.position.x,box5.position.y,80,80);
  rect(box6.position.x,box6.position.y,80,80);
  rect(box7.position.x,box7.position.y,80,80);
  rect(box8.position.x,box8.position.y,20,500);
  rect(box9.position.x,box9.position.y,20,500);
  rect(box10.position.x,box10.position.y,20,600);
  rect(box11.position.x,box11.position.y,100,20);
  rect(box12.position.x,box12.position.y,100,20);
  rect(box13.position.x,box13.position.y,80,80);
  rect(box14.position.x,box14.position.y,80,80);
  rect(box15.position.x,box15.position.y,52,20);
  rect(box16.position.x,box16.position.y,52,20);
  rect(box17.position.x,box17.position.y,102,30);
  rect(box18.position.x,box18.position.y,20,200);
  rect(box19.position.x,box19.position.y,80,50);
  drawSprites();
}

