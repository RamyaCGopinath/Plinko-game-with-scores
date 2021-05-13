const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var particle;
var turn = 0;
var count = 1;
var dropLine;
var gameState = "play";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  dropLine = createSprite(400, 200, 800, 400);

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

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill(255);
  text(mouseX+", "+mouseY,mouseX,mouseY);
  text("Score : "+score,20,30);
  text("500", 20,600);
  text("500", 100,600);
  text("500", 180,600);
  text("500", 260,600);
  text("100", 340,600);
  text("100", 420,600);
  text("100", 500,600);
  text("200", 580,600);
  text("200", 660,600);
  text("200", 740,600);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
   */
  /*
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   */
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   console.log(count);
   if(gameState=="end"){
     text("GAME OVER!",300,230);
   }
   if(gameState == "play"){
   
   if(mousePressedOver(dropLine)){
    if(count<=5){
      
      particle = new Particle(mouseX, 10, 10, 10);
      
    }
   }

   if(particle!=null){
     particle.display();
     if(particle.body.position.y>700){
       count=count+1;
       if(particle.body.position.x>0 && particle.body.position.x<=330){
         score+=500; 
       }
       else if(particle.body.position.x>330 && particle.body.position.x<=570){
        score+=100;   
      }
      else if(particle.body.position.x>570 && particle.body.position.x<800){
        score+=200;  
      }
       particle=null;
         if(count>5){
           gameState="end";
           text("GAME OVER!",300,225);
         }
     }
   }
  }
}
/*
function mousePressed(){
  if(gameState=="play"){
    count++;
    console.log("pressed = "+mouseX);
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
*/