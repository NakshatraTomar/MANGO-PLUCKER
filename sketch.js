
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObj,launcherObj;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mngo9,mango10;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,155,30);
	mango3=new mango(1150,255,30);
	mango4=new mango(1000,190,30);
	mango5=new mango(1030,255,30);
	mango6=new mango(1110,180,30);
	mango7=new mango(1000,90,30);
	mango8=new mango(900,190,30);
	mango9=new mango(950,260,30);
  mango10=new mango(1200,220,30);
  
  stoneObj=new stone(200,400);

	treeObj=new tree(1050,580);

  groundObj=new ground(width/2,600,width,20);
  
  launcherObj=new launcher(stoneObj.body,{x:235,y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  image(boy ,200,340,200,300);

  detectollision(stoneObj,mango1);
  detectollision(stoneObj,mango2);
  detectollision(stoneObj,mango3);
  detectollision(stoneObj,mango4);
  detectollision(stoneObj,mango5);
  detectollision(stoneObj,mango6);
  detectollision(stoneObj,mango7);
  detectollision(stoneObj,mango8);
  detectollision(stoneObj,mango9);
  detectollision(stoneObj,mango10);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObj.display();
  groundObj.display();
  launcherObj.display();

}

function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
 launcherObj.fly();
}

function keyPressed(){
if (keyCode===32){
Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
launcherObj.attach(stoneObj.body);
}
}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if(distance<=lmango.r+stone.r){
   Matter.Body.setStatic(lmango.body,false);
}
}