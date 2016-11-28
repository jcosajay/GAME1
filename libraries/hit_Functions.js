function enemyHit(enemy,bullet){

  if(enemy.type > 0){
    //get rid of the bullet
    bullet.remove();
    //change color
    enemy.shapeColor = 'yellow';
    //subtract health
    enemy.type--;
  }else if(enemy.type === 0){
  
  for(var i=0; i<explosionDensity; i++){
    var p = createSprite(bullet.position.x,bullet.position.y,2,2);
  
  p.setSpeed(random(3,5),random(360));
  p.friction = 0.95;
  p.life = 15;
  bombSound.setVolume(0.1);
  bombSound.play();
  }
  
  
  enemy.remove();
  bullet.remove();
  score++;

//LEVEL2
    if(score == level1ScoreAdvance){
      gameState = 'countDown1';
      heroState = 'regular';
    bkgrTrack1.stop();  
    bkgrTrack2.setVolume(0.1);
    bkgrTrack2.loop();
    }   
//LEVEL3
    if(score == level2ScoreAdvance){
      gameState = 'countDown2';
      heroState = 'regular';
    bkgrTrack2.stop();  
    bkgrTrack3.setVolume(0.1);
    bkgrTrack3.loop();
    }
//LEVEL4
    if(score == level3ScoreAdvance){
      gameState = 'countDown3';
      heroState = 'regular';
      bkgrTrack3.stop();
    bkgrTrack3.setVolume(0.1);
    bkgrTrack3.loop();
    }
    
    if(score == level4ScoreAdvance){
      gameState = 'countDown4';
      heroState = 'regular';
          bkgrTrack1.stop();
    bkgrTrack2.stop();
    bkgrTrack3.stop();
      bkgrWinTrack.setVolume(0.1);
      bkgrWinTrack.loop();
      gameState = 'win';

    }
  }
}

function heroHit(enemy,hero){
  heroState = 'regular';
  heroHealth--;
  if(heroHealth < 1){
    bkgrTrack1.stop();
    bkgrTrack2.stop();
    bkgrTrack3.stop();
    gameState = 'loose';
    bkgrLoseTrack.setVolume(0.1);
    bkgrLoseTrack.loop();
  }
  enemy.remove();
    crashSound.setVolume(0.1);
    crashSound.play();
  //hero.shapeColor = 'red';
  
}
function powerHit(powerUp,hero){
  powerUp.remove();
  heroState = "power";
  powerupSound.setVolume(0.1);
  powerupSound.play();
 
}