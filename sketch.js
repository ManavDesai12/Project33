var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var yelline;
var clicked;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
  stroke("yellow");
   yelline = line(0, 600, 800, 600); 

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     

     
   }
   if(clicked === mouseX && frameCount%10 === 0){
     particles.push(new Particle(clicked, 10,10));
     
   }
   for (var j = 0; j < particles.length; j++) {
    particles[j].display();
    if( 360 <= particles[j].body.position.x <= 440 && 600 <= particles[j].body.position.y <= 600){
     score = score+500
   }
   if(j === 5){
     particles = null;
     text("Game Over", 10, 400);
   }
   }
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   text("100", 20, 750)
   text("100", 100, 750)
   text("200", 180, 750)
   text("200", 260, 750)
   text("500", 340, 750)
   text("500", 420, 750)
   text("200", 500, 750)
   text("200", 580, 750)
   text("100", 660, 750)
   text("100", 740, 750)

  

   

}

function mousePressed(){
  clicked = mouseX;
}

function mouseReleased(){
  clicked =! mouseX
}