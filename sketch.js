//aspect ratio
var canvasMultiplier = 40;

var enemyRate = 120;
var enemyRate3 = 300
var enemyRate4 = 50;

var powerRate = 200;
var powerRate4 = 20;

var enemyAngle = 80;
var heroSpeed = 8;
var explosionDensity = 20;
var score = 0;
var gameState = 'startUp';
var intro = 'intro';
var heroHealth = 6;

//NEW
var enemyDirection = 2;
var enemyMovement = 5;
var enemyMovement3 = 10;
var enemyMovement4 = 15;


var hero;
var heroState = 'regular';

var bullets;
var enemies;

var powerUps

//
var health_end,health_half,health_full, health_full6, health_half5;

var bg_title,bg_win,bg_lose,bg_level1,bg_level2,bg_level3,bg_countdown,intro;

var enemyOneImg,enemyTwoImg,enemyThreeImg;

var heroDefault,heroLeft,heroRight;

var countDowntimer = 0;
var count1Downtimer = 0;
var count2Downtimer = 0;
var count3Downtimer = 0;

var level1ScoreAdvance = 5;
var level2ScoreAdvance = 10;
var level3ScoreAdvance = 20;
var level4ScoreAdvance = 30;

var bkgrTrack1;
var bkgrTrack2;
var bkgrTrack3;
var bkgrLoseTrack;
var bkgrWinTrack;
var bombtSound;
var powerupSound;
var shotSound;
var crashSound;






//var player_sprite;



var heroLeft_frames = [

  {'name':'heroLeft_00000', 'frame':{'x':0, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00001', 'frame':{'x':256, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00002', 'frame':{'x':512, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00003', 'frame':{'x':768, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00004', 'frame':{'x':1024, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroLeft_00005', 'frame':{'x':1280, 'y': 0, 'width': 256, 'height': 256}},
  
  {'name':'heroLeft_00006', 'frame':{'x':1536, 'y': 0, 'width': 256, 'height': 256}}

  ];
  
var heroRight_frames = [

  {'name':'heroRight_00000', 'frame':{'x':1792, 'y': 0, 'width': 256, 'height': 256}},

  {'name':'heroRight_00001', 'frame':{'x':0, 'y': 256, 'width': 256, 'height': 256}},

  {'name':'heroRight_00002', 'frame':{'x':256, 'y': 256, 'width': 256, 'height': 256}},

  {'name':'heroRight_00003', 'frame':{'x':512, 'y': 256, 'width': 256, 'height': 256}},

  {'name':'heroRight_00004', 'frame':{'x':768, 'y': 256, 'width': 256, 'height': 256}},

  {'name':'heroRight_00005', 'frame':{'x':1024, 'y': 256, 'width': 256, 'height': 256}},
  
  {'name':'heroRight_00006', 'frame':{'x':1280, 'y': 256, 'width': 256, 'height': 256}}

  ];

var heroDefault_frames = [

  {'name':'heroDefault_00000', 'frame':{'x':1536, 'y': 256, 'width': 256, 'height': 256}},

  {'name':'heroDefault_00001', 'frame':{'x':1792, 'y': 256, 'width': 256, 'height': 256}},

  {'name':'heroDefault_00002', 'frame':{'x': 0, 'y': 512, 'width': 256, 'height': 256}},

  {'name':'heroDefault_00003', 'frame':{'x':256, 'y': 512, 'width': 256, 'height': 256}},

  {'name':'heroDefault_00004', 'frame':{'x':512, 'y': 512, 'width': 256, 'height': 256}},

  {'name':'heroDefault_00005', 'frame':{'x':768, 'y': 512, 'width': 256, 'height': 256}},
  
  {'name':'heroDefault_00006', 'frame':{'x':1024, 'y': 512, 'width': 256, 'height': 256}}

  ];
  
var log_frames = [

  {'name':'log_00000', 'frame':{'x':1280, 'y': 512, 'width': 256, 'height': 256}},

  {'name':'log_00001', 'frame':{'x':1532, 'y': 512, 'width': 256, 'height': 256}},

  {'name':'log_00002', 'frame':{'x':1792, 'y': 512, 'width': 256, 'height': 256}},

  {'name':'log_00003', 'frame':{'x':0, 'y': 768, 'width': 256, 'height': 256}},

  {'name':'log_00004', 'frame':{'x':256, 'y': 768, 'width': 256, 'height': 256}},

  {'name':'log_00005', 'frame':{'x':512, 'y': 768, 'width': 256, 'height': 256}},
  
  {'name':'log_00006', 'frame':{'x':768, 'y': 768, 'width': 256, 'height': 256}}

  ];
  
  var boat_frames = [

  {'name':'boat_00000', 'frame':{'x':1024, 'y': 768, 'width': 256, 'height': 256}},

  {'name':'boat_00001', 'frame':{'x':1280, 'y': 768, 'width': 256, 'height': 256}},

  {'name':'boat_00002', 'frame':{'x':1532, 'y': 768, 'width': 256, 'height': 256}},
  
    ];
  
var rock_frames = [

  {'name':'rock_00000', 'frame':{'x':1792, 'y': 768, 'width': 256, 'height': 256}},

  {'name':'rock_00001', 'frame':{'x':0, 'y': 1024, 'width': 256, 'height': 256}},

  {'name':'rock_00002', 'frame':{'x':256, 'y': 1024, 'width': 256, 'height': 256}},

  {'name':'rock_00003', 'frame':{'x':512, 'y': 1024, 'width': 256, 'height': 256}},

  {'name':'rock_00004', 'frame':{'x':768, 'y': 1024, 'width': 256, 'height': 256}},

  {'name':'rock_00005', 'frame':{'x':1024, 'y': 1024, 'width': 256, 'height': 256}},
  
  {'name':'rock_00006', 'frame':{'x':1280, 'y': 1024, 'width': 256, 'height': 256}},
  
  {'name':'rock_00007', 'frame':{'x':1532, 'y': 1024, 'width': 256, 'height': 256}},
  
  {'name':'rock_00008', 'frame':{'x':1792, 'y': 1024, 'width': 256, 'height': 256}},
  
  {'name':'rock_00009', 'frame':{'x':0, 'y': 1280, 'width': 256, 'height': 256}}

  ];
  




//preload media
function preload(){
  
  bg_title = loadImage("assets/title_story.png");
  bg_level1 = loadImage("assets/GAMEPLAYBackground.png");
  bg_level2 = loadImage("assets/GAMEPLAYBackground2.png");
  bg_level3 = loadImage("assets/GAMEPLAYBackground3.png");
  bg_level4 = loadImage("assets/GAMEPLAYBackground4.png");
  intro = loadImage("assets/level1.png");
  powerUpbullet = loadImage("assets/bullet.png");
  bg_countdown1 = loadImage("assets/level2.png");
  bg_countdown2 = loadImage("assets/level3.png");
  bg_countdown3 = loadImage("assets/level4.png");
  bg_win = loadImage("assets/youwin.png");
  bg_lose = loadImage("assets/youlose.png");
  intro = loadImage("assets/level1.png");
  
  health_end = loadImage("assets/health_end.png");
  health_half = loadImage("assets/health_half.png");
  health_full = loadImage("assets/health_full.png");
  health_end4 = loadImage("assets/health_end-04.png");
  health_half5 = loadImage("assets/health_half-05.png");
  health_full6 = loadImage("assets/health_full-06.png");
  

  
  myFont = loadFont('assets/Pixeled.ttf');
  
  bkgrTrack1 = loadSound("assets/BACKGROUND_LVLONE.mp3");
  bkgrTrack2 = loadSound("assets/BACKGROUND_LVLTWO.mp3");
  bkgrTrack3 = loadSound("assets/BACKGROUND_LVLTHREE.mp3");
  bkgrLoseTrack = loadSound("assets/bkgrLoseTrack.mp3");
  bkgrWinTrack = loadSound("assets/bkgrWinTrack.mp3");
  bombSound = loadSound("assets/bulletSound.wav");
  powerupSound = loadSound("assets/powerupSound.wav");
  shotSound = loadSound("assets/shotSound.wav");
  crashSound = loadSound("assets/crash.wav");
  
  //LOAD SPRITES//
  heroDefault_sheet = loadSpriteSheet('assets/spriteSheet.png', heroDefault_frames);
  heroLeft_sheet = loadSpriteSheet('assets/spriteSheet.png', heroLeft_frames);
  heroRight_sheet = loadSpriteSheet('assets/spriteSheet.png', heroRight_frames);
  log_sheet = loadSpriteSheet('assets/spriteSheet.png', log_frames);
  rock_sheet = loadSpriteSheet('assets/spriteSheet.png', rock_frames);
  boat_sheet = loadSpriteSheet('assets/spriteSheet.png', boat_frames);
  
  //LOAD ANIMATION
  heroDefault_animation = loadAnimation(heroDefault_sheet);
  heroLeft_animation = loadAnimation(heroLeft_sheet);
  heroRight_animation = loadAnimation(heroRight_sheet);
  log_animation = loadAnimation(log_sheet);
  rock_animation = loadAnimation(rock_sheet);
  boat_animation = loadAnimation(boat_sheet);
}






function setup() {
  var tempWidth = canvasMultiplier * 9;
  var tempHeight = canvasMultiplier * 16;
  createCanvas(tempWidth,tempHeight);
  
  bullets = new Group();
  enemies = new Group();
  powerUps = new Group();
  
  var heroImg = loadImage("assets/Game_Skins_Hero.png");
  var heroAnimationDefault = loadAnimation("assets/hero_00000.png", "assets/hero_00006.png");
 //defaults to image
  hero = createSprite(width/2,height*.8,30,30);
  //slow hero
  hero.friction = 0.85;
  //hero.addImage(heroImg);


 // hero.shapeColor = "white";
 
 //CREATE SPRITES
 hero.addAnimation('hero',heroDefault_animation);
 hero.addAnimation('heroLeft',heroLeft_animation);
 hero.addAnimation('heroRight',heroRight_animation);
 hero.scale = .4
 hero.changeAnimation("hero");
}





function draw() {
  

  
  switch(gameState){
    case 'startUp':
      background(bg_title);
      text('',width/2,height/2);
      break;
  
    case 'loose':
        background(bg_lose);
      break;


    case 'win':
      background(bg_win);
      break;

    case 'levelOne':
      levelOne();
      break;

    case 'levelTwo':
      levelTwo();
      break;

    case 'levelThree':
      levelThree();
      break;
    
    case 'levelFour':
      levelFour();
      break;
      
      
      
    case 'intro':
      background(intro);
      textSize(32);
      //only runs the first time through the coutdown
      if(countDowntimer === 0){
        countDowntimer = frameCount;
      }
      var flooredCount = floor((frameCount - countDowntimer)/20);
      
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelOne";
      }  
      break;
      
      
    case 'countDown1':
      background(bg_countdown1);
      textSize(32);
      //only runs the first time through the coutdown
      if(count1Downtimer === 0){
        count1Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count1Downtimer)/50);
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelTwo";
      }  
      break;
      
      
      
      
    case 'countDown2':
      background(bg_countdown2);
      //textSize(32);
      //only runs the first time through the coutdown
      if(count2Downtimer === 0){
        count2Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count2Downtimer)/50);
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelThree";
      }  
      break;


  
    case 'countDown3':
      background(bg_countdown3);
      textSize(32);
      //only runs the first time through the coutdown
      if(count3Downtimer === 0){
        count3Downtimer = frameCount;
      }
      var flooredCount = floor((frameCount - count3Downtimer)/50);
      //advance to level 2
      if(flooredCount > 3){
        gameState = "levelFour";
      }  
      break;
  
  
  
  
  
  
  
  
 /* if (gameState == 'startUp'){
    text('Press X to Start',width/2,height/2);
  }else if(gameState == 'loose'){
    text('Game Over!',width/2,height/2);
  }else if(gameState == 'win'){
    text("WINNER!",width/2,height/2);
  }else if(gameState == 'levelOne'){
    levelOne();
  }else if(gameState == 'levelTwo'){
  levelTwo();
  }else if(gameState == 'levelThree'){
  levelThree();
  } */
}


}

function keyPressed(){
  if(keyCode == RIGHT_ARROW){
  hero.setSpeed(heroSpeed,0);
  hero.changeAnimation("heroRight");
  hero.animation.changeFrame(0);
  }
  
  else if(keyCode == LEFT_ARROW){
  hero.setSpeed(heroSpeed,180);
  hero.changeAnimation("heroLeft");
  hero.animation.changeFrame(0);
  }
  
  else if (key == ' ',' '){
    
    if(gameState == 'intro'){

      gameState = "levelOne";
    }
    if(gameState == 'countDown1'){
      gameState = "levelTwo";
    }
    if(gameState == 'countDown2'){
      gameState = "levelThree";
    }
    if(gameState == 'countDown3'){
      gameState = "levelFour";
    }

    
    
    if(heroState == 'regular'){
      //create bullet at the location of the hero and set the size
      var bullet = createSprite(hero.position.x, hero.position.y,5,5);
      shotSound.setVolume(0.1);
      shotSound.play();
      //set the speed and direction of the bullet
      bullet.setSpeed(20,270);
      //make the bullet dissappear after a certain number of frames
      bullet.life = 50;
      bullet.shapeColor = 'white';
      //add the singular bullet to the GROUP bullets
      bullets.add(bullet);
      
   
      //if on intro screen intro skip
    }
    
    if(heroState == 'power'){
      for(var i = 0;i < 3;i++){
        //create bullet at the location of the hero and set the size
        var bullet = createSprite(hero.position.x, hero.position.y,5,5);
        //set the speed and direction of the bullet
        var angle = 255 + (i*15);
        bullet.setSpeed(20,angle);
        bullet.life = 50;
        bullet.shapeColor = 'white';
        bullets.add(bullet);
              shotSound.setVolume(0.1);
      shotSound.play();
      }
    }  
  }
}
  
  //start up instructions
  //LEVEL1
function keyTyped(){
  if (key === 'x'){
    gameState = 'intro';
        bkgrTrack1.setVolume(0.1);
    bkgrTrack1.loop();
  }
}

