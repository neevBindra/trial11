var gameState = "wait"
var jumpS,coinS,fireS;
var titS,tipB,playB,tipBI,playBI,lv1BgI,lv1bg;
var player , playerRunningR,playerIdle,playerRunningL,f,fi;
// platforms for level one 
var plat1,plat2,plat3,plat4,plat5,plat6,plat7,plat8,plat9,plat10,plat11,plat12,plat13
,plat14,plat15
var p1,p2,p3,p4;
var coin,coinI;
function preload(){
  //loading images
  lv1BgI = loadImage("images/lv1bg.jpg")
    titS = loadImage("images/titleScreen.png")
    tipBI = loadImage("images/tips.png")
    playBI = loadImage("images/play.png")
    playerIdle = loadAnimation("images/Idle__000.png","images/Idle__001.png","images/Idle__002.png","images/Idle__003.png")
    playerRunningR = loadAnimation("images/Run__000.png","images/Run__001.png","images/Run__002.png"
    ,"images/Run__003.png","images/Run__004.png","images/Run__005.png")
    playerRunningL = loadAnimation("images/Run__006.png","images/Run__007.png","images/Run__008.png","images/Run__009.png",
    "images/Run__0010.png","images/Run__0011.png")
    p1 = loadImage("images/p1.png");
    p2 = loadImage("images/p2.png");
    p3 = loadImage("images/p3.png");
    p4 = loadImage("images/p4.png");
    coinI = loadImage("images/coin.gif")
    //loading sounds
    jumpS = loadSound("sound/jump.wav");
    coinS = loadSound("sound/coin.wav");
    fireS = loadSound("sound/fireworks.wav");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
  //backgrounds
    lv1bg = createSprite(200,height/2,width*5,displayHeight)
    lv1bg.addImage(lv1BgI)
    lv1bg.visible = false;
    lv1bg.scale = 1.5;
    //creating play and tips button
     playB = createSprite(345,455,200,50)
     playB.addImage(playBI);
     playB.scale = 0.5
     tipB = createSprite(845,485,200,50)
     tipB.addImage(tipBI);
     tipB.scale = 0.5
     //creating player sprite
     player = createSprite(800,585,30,30);
     player.addAnimation("idle",playerIdle)
     player.addAnimation("runningR",playerRunningR)
     player.addAnimation("runningL",playerRunningL)
     player.scale = 0.3;
     player.visible = false;
     //lv1 platforms
     plat1 = createSprite(625,205,30,20)
     plat1.addImage(p1)
     plat1.scale = 0.5;
     plat1.visible = false;
     plat2 = createSprite(225,105,30,20)
     plat2.addImage(p1)
     plat2.scale = 0.5;
     plat2.visible = false;
   /*  coin = createSprite(625,205,30,20)
     coin.addImage(coinI)
     coin.scale = 0.5;*/
 
}

function draw(){
console.log(mouseX,mouseY)

  if(gameState === "wait"){
background(titS);
  }

  if(mousePressedOver(playB)){

    gameState = "lv1";
  }
 

  if(gameState === "lv1"){
    lv1bg.visible = true;
    tipB.visible = false;
    playB.visible = false;
    player.visible = true;
    plat1.visible = true;
    plat2.visible = true;
    camera.x = player.x+300;

    if(keyDown("LEFT_ARROW")){
      player.changeAnimation("runningL",playerRunningL);
      player.x = player.x-5;
      lv1bg.x = lv1bg.x-2;
    }else{
      player.changeAnimation("idle",playerIdle)
    }
    if(keyDown("RIGHT_ARROW")){
      player.changeAnimation("runningR",playerRunningR);
      player.x = player.x+5;
      lv1bg.x = lv1bg.x+2;
      console.log("hey")
    }
  
  }
  drawSprites();

}


