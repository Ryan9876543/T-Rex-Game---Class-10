var trex_running
var trex
var edges
var ground

function preload (){
trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png")
}

function setup(){
  createCanvas(600,200);
  trex = createSprite (100,100,2.5,2.5)
  trex.scale = 0.5;
  trex.x = 50;
  trex.addAnimation ("running", trex_running)
  edges = createEdgeSprites();
  ground = createSprite (200,195,10,10)
}




function draw(){
  //set background color 
  background("yellow");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }

  ground.velocityX = -2;
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground)
  drawSprites();
}