var bgImg
var cat1,cat2,cat3,mouse1,mouse2,mouse3;


function preload() {

    bgImg = loadImage("images/garden.png");
    cat1 = loadAnimation("images/cat1.png");
    cat2 = loadAnimation("images/cat2.png","images/cat3.png");
    cat3 = loadAnimation("images/cat4.png");
    mouse1 = loadAnimation("images/mouse1.png");
    mouse2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3 = loadAnimation("images/mouse4.png");
}

function setup(){
  
      createCanvas(1000,800);
      
      cat = createSprite(870,600);
      cat.addAnimation("catSleeping",cat1);
      cat.scale = 0.2;
      
      mouse = createSprite(200,600);
      mouse.addAnimation("mouseStanding",mouse1);
      mouse.scale = 0.15;

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < mouse.width/2 - cat.width/2){
      
        cat.velocityX= 0;
        cat.addAnimation("catLastImage",cat3);
        cat.x=300;
        cat.scale = 0.2;
        cat.changeAnimation("catLastImage");
        
        mouse.addAnimation("mouseLastImage",mouse3);
        mouse.scale = 0.15;
        mouse.changeAnimation("mouseLastImage");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    
    cat.velocityX = -5;  
    cat.addAnimation("catRunning",cat2);
    cat.changeAnimation("catRunning");
    
    mouse.addAnimation("mouseTeasing",mouse2);
    mouse.changeAnimation("mouseTeasing");
  }

}


