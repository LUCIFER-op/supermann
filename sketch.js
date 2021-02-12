const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

var  slingshot;




function preload()
{

this .image=  loadiImage("Super-01.png")
this.body=Bodies .circles(this.x,this.y,(his.r)/2,options )
World.add(world,this.body);

}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    box1= new Box(400, 350, 50,50);
    box2= new Box(400, 330, 50,50);
    box3= new Box(400, 310, 50,50);
    box4= new Box(400, 290, 50,50);
    box5= new Box(400, 270, 50,50);
    box6= new Box(400, 250, 50,50);
    
    
    box7= new Box(500, 350, 50,50);
    box8= new Box(500, 330, 50,50);
    box9= new Box(500, 310, 50,50);
    box10= new Box(500, 290, 50,50);
    box11= new Box(500, 270, 50,50);
    box12= new Box(500, 250, 50,50);

    
    box13= new Box(600, 350, 50,50);
    box14= new Box(600, 330, 50,50);
    box15= new Box(600, 310, 50,50);
    box16= new Box(600, 290, 50,50);
    box17= new Box(600, 270, 50,50);
    box18= new Box(600, 250, 50,50);
    
    ball= new Ball(200, 230, 80, 80)

    

    slingshot = new SlingShot(ball.body,{x:200, y:230});
}

function draw(){
    background ("GamingBackground");
    Engine.update(engine);

    fill ("lightgreen")
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();

   
   

    ball.display();

    slingshot.display();

    ground.display();
}
function mouseDragged(){
  
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
}



