var world;
var backgroundImg;
var bg;
var knight;
var idleknight;
var runknight;
var jumpknight;
var leftrunknight,leftidle;
var life=5;
var lifei1,lifei2,lifei3,lifei4,lifei5;
var zlife=3;
var zh1,zh3;
var zh2;
var C=1;
var Z=1
var k=1;
var gameState;
var tile1,tile11,tile2,tile3,tile4,tile5,tile6,tile7,tile8;
var tile1img,tile2img,tile3img,tile4img,tile5img,tile6img,tile7img,tile8img;
var platform,platformimg,platform1;
var bigplatform,bigplatformup,bigplatformcenterup,bigplatformcenterdown;
var bigplatformcenterup1,bigplatformcenterdown1,bigplatformrightside;
var topwater ,underwater,topwaterimg ,underwaterimg,topwater1 ,underwater1;
var rightsideimg,centerdownimg;
var righcornerdown1, righcornerdown2,righcornerdown3;
var righcornerup1,righcornerup2,righcornerup3,righcornerup4;
var rightcornerimg;
var thirteen,fourteen,fifteen
var centertile1,centertile2,centertile3,smallcenter1,smallcenter2 , smallcenterup1 , smallcenterup2;
var treeimg,tree1img
var tree,tree1,tree2;
var signboard,signboardimg;
var bush1img,bush2img,bush3img,bush4img,bush;
var mushroom ,mushroom1img,mushroom1img;
var boximg,box1,box2,box3,box4,box5;
var stone,stoneimg;
var treasure ,tropenimg,trclosedimg;
var attack,attackanimation;
var zombie,zombieanimation,zombieleft;
var zombie1;
var Play=1;
var End=0;
var gameState=Play;
var edges;
var invisible1,invisible2;
var lifeimg;
var A=1;
var leftattack
var B=1;
var zlimg;
var in2;
var gameover
var gr;
var zl1,zl2,zl3
var winner,winimg;
var start,startimg
var bgmusic;
var winnigmusic;
var endmusic

function preload() {

backgroundImg=loadImage("BG1.png")
idleknight=loadAnimation("Idle/hk1.png","Idle/hk2.png","Idle/hk3.png","Idle/hk4.png","Idle/hk5.png","Idle/hk6.png","Idle/hk7.png","Idle/hk8.png");
runknight=loadAnimation("Run/hkr1.png","Run/hkr2.png","Run/hkr3.png","Run/hkr4.png","Run/hkr5.png","Run/hkr6.png","Run/hkr7.png","Run/hkr8.png","Run/hkr9.png","Run/hkr10.png");
jumpknight=loadAnimation("Jump/hkj1.png","Jump/hkj2.png","Jump/hkj3.png");
leftidle=loadAnimation("leftidle/li1.png","leftidle/li2.png","leftidle/li3.png","leftidle/li4.png","leftidle/li5.png","leftidle/li6.png","leftidle/li7.png","leftidle/li8.png");
leftrunknight=loadAnimation("leftrun/lf1.png","leftrun/lf2.png","leftrun/lf3.png","leftrun/lf4.png","leftrun/lf5.png","leftrun/lf6.png","leftrun/lf7.png","leftrun/lf8.png","leftrun/lf9.png","leftrun/lf10.png");
tile1img=loadImage("morningtiles/2.png");
tile2img=loadImage("morningtiles/1.png");
tile3img=loadImage("morningtiles/2.png");
platformimg=loadImage("morningtiles/3.png");
topwaterimg=loadImage("morningtiles/17.png");
underwaterimg=loadImage("morningtiles/18.png");
rightsideimg=loadImage("morningtiles/4.png")
centerdownimg=loadImage("morningtiles/5.png")
rightcornerimg =loadImage("morningtiles/4.png");
thirteen=loadImage("morningtiles/13.png")
fourteen=loadImage("morningtiles/14.png")
fifteen=loadImage("morningtiles/15.png")
treeimg=loadImage("morningObject/Tree_2.png")
tree1img=loadImage("morningObject/Tree_3.png")
signboardimg=loadImage("morningObject/Sign_2.png");
bush1img=loadImage("morningObject/Bush (1).png");
bush2img=loadImage("morningObject/Bush (2).png");
bush3img=loadImage("morningObject/Bush (3).png");
bush4img=loadImage("morningObject/Bush (4).png");
mushroom1img=loadImage("morningObject/Mushroom_1.png");
mushroom2img=loadImage("morningObject/Mushroom_2.png");
boximg=loadImage("morningObject/Crate.png");
stoneimg=loadImage("morningObject/Stone.png");
trclosedimg=loadImage("treasure/close.png")
tropenimg=loadImage("treasure/open.png");
attackanimation=loadAnimation("Attack3/HeroKnight_Attack3_0.png","Attack3/HeroKnight_Attack3_1.png","Attack3/HeroKnight_Attack3_2.png","Attack3/HeroKnight_Attack3_3.png","Attack3/HeroKnight_Attack3_4.png","Attack3/HeroKnight_Attack3_5.png","Attack3/HeroKnight_Attack3_5.png","Attack3/HeroKnight_Attack3_6.png","Attack3/HeroKnight_Attack3_7.png",)
zombieanimation=loadAnimation("zombiewalk/walk (1).png","zombiewalk/walk (2).png","zombiewalk/walk (3).png","zombiewalk/walk (4).png","zombiewalk/walk (5).png","zombiewalk/walk (6).png","zombiewalk/walk (7).png","zombiewalk/walk (8).png","zombiewalk/walk (9).png","zombiewalk/walk (10).png","zombiewalk/walk (11).png","zombiewalk/walk (12).png","zombiewalk/walk (13).png","zombiewalk/walk (14).png",);
zombieleft=loadAnimation("zombieleft/walk (1).png.png","zombieleft/walk (2).png.png","zombieleft/walk (3).png.png","zombieleft/walk (4).png.png","zombieleft/walk (5).png.png","zombieleft/walk (6).png.png","zombieleft/walk (7).png.png","zombieleft/walk (8).png.png","zombieleft/walk (9).png.png","zombieleft/walk (10).png.png","zombieleft/walk (11).png.png","zombieleft/walk (12).png.png","zombieleft/walk (13).png.png","zombieleft/walk (14).png.png");
lifeimg=loadImage("heart.png")
leftattack=loadAnimation("attackleft/HeroKnight_Attack3_0.png.png","attackleft/HeroKnight_Attack3_1.png.png","attackleft/HeroKnight_Attack3_3.png.png","attackleft/HeroKnight_Attack3_4.png.png","attackleft/HeroKnight_Attack3_5.png.png","attackleft/HeroKnight_Attack3_6.png.png","attackleft/HeroKnight_Attack3_7.png.png")
zlimg=loadImage("finallifeimg.png");
gameover=loadImage("gameover.png")
winimg=loadImage("winning .png")
startimg=loadImage("start screen.png");

bgmusic=loadSound("bgmusic.mp3");
winningmusic=loadSound("winsound.wav");
}


function setup(){
    createCanvas(windowWidth, windowHeight);


  
//in12
in1=createSprite(1357,60,10,120)
in1.visible=false;
in2=createSprite(1110,60,10,128)
in2.visible=false;

//zombielifeimg

zh1=createSprite(1050,21)
zh1.addImage(zlimg)
zh1.scale=0.05;

zh2=createSprite(1085,21)
zh2.addImage(zlimg)
zh2.scale=0.05;

zh3=createSprite(1120,21)
zh3.addImage(zlimg)
zh3.scale=0.05;

zl1=createSprite(1050,21)
zl1.addImage(zlimg)
zl1.scale=0.05;
zl1.visible=false;

zl2=createSprite(1085,21)
zl2.addImage(zlimg)
zl2.scale=0.05;
zl2.visible=false;

zl3=createSprite(1120,21)
zl3.addImage(zlimg)
zl3.scale=0.05;
zl3.visible=false;

// creating lifeimg
lifei1=createSprite(122,21)
lifei1.addImage(lifeimg)
lifei1.scale=0.1;

lifei2=createSprite(152,21)
lifei2.addImage(lifeimg)
lifei2.scale=0.1;

lifei3=createSprite(182,21)
lifei3.addImage(lifeimg)
lifei3.scale=0.1;

lifei4=createSprite(212,21)
lifei4.addImage(lifeimg)
lifei4.scale=0.1;

lifei5=createSprite(242,21)
lifei5.addImage(lifeimg)
lifei5.scale=0.1;






  //creating invisible lines
  invisible1=createSprite(371,445,10,80)
  invisible2=createSprite(740,445,10,80)
invisible1.visible=false;
invisible2.visible=false;

 

  edges = createEdgeSprites();

    underwater=createSprite(310,704,20,20);
    underwater.addImage(underwaterimg)
    


    underwater1=createSprite(930,704,20,20);
    underwater1.addImage(underwaterimg)




//boxes

box1=createSprite(310,250,20,20);;
box1.addImage(boximg)
box1.scale=0.7
box2=createSprite(370,250,20,20);;
box2.addImage(boximg)
box2.scale=0.7
box3=createSprite(340,196,20,20);;
box3.addImage(boximg)
box3.scale=0.7

box4=createSprite(770,550,20,20);;
box4.addImage(boximg)
box4.scale=0.7




//treasurebox
treasure=createSprite(1300,100)
treasure.addImage(trclosedimg);

//bushes
bush=createSprite(100,600);
bush.addImage(bush1img);
bush.scale=0.7;
bush=createSprite(450,260);
bush.addImage(bush1img);
bush.scale=0.55;
bush=createSprite(100,115);
bush.addImage(bush2img);
bush.scale=0.55;
bush=createSprite(950,225);
bush.addImage(bush1img);
bush.scale=0.55;
bush=createSprite(990,225);
bush.addImage(bush3img);
bush.scale=0.9;

//stones
stone=createSprite(120,115)
stone.addImage(stoneimg)
stone.scale=0.5
stone=createSprite(420,470)
stone.addImage(stoneimg)
stone.scale=0.5

     //trees and other objs
    //trees
    tree=createSprite(60,555)
    tree.addImage(tree1img);
    tree.scale=0.5;

    tree1=createSprite(160,570)
    tree1.addImage(tree1img);
    tree1.scale=0.4;

    tree=createSprite(100,540)
    tree.addImage(treeimg);
    tree.scale=0.5;

    tree=createSprite(810,500)
    tree.addImage(treeimg);
    tree.scale=0.5;
    
    tree=createSprite(65,90);
    tree.addImage(treeimg);
    tree.scale=0.4;

    tree=createSprite(720,160);
    tree.addImage(treeimg);
    tree.scale=0.5;

    tree=createSprite(640,440)
    tree.addImage(tree1img);
    tree.scale=0.4;
    tree=createSprite(710,420)
    tree.addImage(tree1img);
    tree.scale=0.4;

    bush=createSprite(680,470);
bush.addImage(bush1img);
bush.scale=0.5;

    bush=createSprite(60,600);
bush.addImage(bush2img);
bush.scale=0.5;
bush=createSprite(160,600);
bush.addImage(bush3img);
bush.scale=0.7;
bush=createSprite(40,115);
bush.addImage(bush2img);
bush.scale=0.55;
bush=createSprite(700,190);
bush.addImage(bush2img);
bush.scale=0.55;
bush=createSprite(740,190);
bush.addImage(bush3img);
bush.scale=0.6;
bush=createSprite(1200,103);
bush.addImage(bush2img);
bush.scale=0.6;
bush=createSprite(840,560);
bush.addImage(bush3img);
bush.scale=0.8;



    //signboard
signboard=createSprite(240,577)
signboard.addImage(signboardimg);


//mushrooms
mushroom=createSprite(60,600);
mushroom.addImage(mushroom1img);
mushroom.scale=0.5;
mushroom=createSprite(200,596);
mushroom.addImage(mushroom2img);
mushroom.scale=0.6;
mushroom=createSprite(150,115);
mushroom.addImage(mushroom1img);
mushroom.scale=0.5;
mushroom=createSprite(170,115);
mushroom.addImage(mushroom2img);
mushroom.scale=0.6;
mushroom=createSprite(1020,225);
mushroom.addImage(mushroom1img);
mushroom.scale=0.6;
mushroom=createSprite(920,225);
mushroom.addImage(mushroom1img);
mushroom.scale=0.6;
mushroom=createSprite(1130,108);
mushroom.addImage(mushroom1img);
mushroom.scale=0.6;
mushroom=createSprite(1193,108);
mushroom.addImage(mushroom2img);
mushroom.scale=0.6;
mushroom=createSprite(660,474);
mushroom.addImage(mushroom2img);
mushroom.scale=0.6;
box5=createSprite(564,463,550,20,20);;
box5.addImage(boximg)
box5.scale=0.7


  knight=createSprite(160,500,10,10)
  knight.addAnimation("idle",idleknight);
  knight.scale=2.5;
  knight.setCollider("rectangle",0,5,20,37);
tree.scale=0.5;
//knight.debug=true;

//zombie
zombie=createSprite(200,80)
zombie.addAnimation("walk",zombieanimation)
//zombie.debug=true;
zombie.setCollider("rectangle",-10,11,50,108);
zombie.velocityX=4

//water
topwater=createSprite(310,654,20,50);
topwater.addImage(topwaterimg)

topwater.setCollider("rectangle",0,40,50,10);


topwater1=createSprite(930,654,20,20);
topwater1.addImage(topwaterimg)
topwater1.setCollider("rectangle",0,40,50,10);
//topwater1.debug=true;

//tiles


  tile1=createSprite(65,190,190,50)
  tile1.addImage(tile1img)
  tile11=createSprite(190,190,190,20)
  tile11.addImage(platformimg);
  platform=createSprite(65,673,20,20);
  platform1=createSprite(190,673,20,20)
  platform.addImage(tile1img);
  platform1.addImage(platformimg);
  bigplatform=createSprite(427,670,10,10)
  bigplatform.addImage(rightsideimg);
  bigplatformup=createSprite(427,550,10,10);
  bigplatformup.addImage(tile2img);
  bigplatformcenterdown=createSprite(555,676)
  bigplatformcenterdown.addImage(centerdownimg);
  bigplatformcenterup=createSprite(555,550)
  bigplatformcenterup.addImage(tile3img);
  bigplatformcenterdown1=createSprite(683,676)
  bigplatformcenterdown1.addImage(centerdownimg);
  bigplatformcenterup1=createSprite(683,550)
  bigplatformcenterup1.addImage(platformimg)
  bigplatformrightside=createSprite(810,640);
  bigplatformrightside.addImage(platformimg);
  righcornerdown1=createSprite(1053,640);
  righcornerdown1.addImage(tile2img);
  righcornerdown2=createSprite(1180,640);
  righcornerdown2.addImage(tile1img);
  righcornerdown3=createSprite(1308,640);
  righcornerdown3.addImage(tile1img);
  righcornerup1=createSprite(windowWidth-200,186);
  righcornerup1.addImage(tile2img);
  righcornerup2=createSprite(windowWidth-72,186);
  righcornerup2.addImage(tile1img);
  righcornerup3=createSprite(windowWidth-200,310);
  righcornerup3.addImage(rightcornerimg);
  righcornerup4=createSprite(windowWidth-72,310);
  righcornerup4.addImage(centerdownimg);
  centertile1=createSprite(300,310);
  centertile1.addImage(thirteen)
  centertile1.scale=0.7;
  centertile2=createSprite(390,310);
  centertile2.addImage(fourteen)
  centertile2.scale=0.7;
  centertile3=createSprite(480,310);
  centertile3.addImage(fifteen)
  centertile3.scale=0.7;
  centertile3.setCollider("rectangle",0,-9,130,75);
  smallcenter1=createSprite(680,230);
  smallcenter1.addImage(thirteen)
  smallcenter1.scale=0.7
  smallcenter2=createSprite(770,230);
  smallcenter2.addImage(fifteen)
  smallcenter2.scale=0.7
  smallcenterup1=createSprite(930,270);
  smallcenterup1.addImage(thirteen);
  smallcenterup1.scale=0.7
  smallcenterup2=createSprite(1010,270);
  smallcenterup2.addImage(fifteen);
  smallcenterup2.scale=0.7

  gr = createSprite(690,370)
  gr.addImage(gameover);
  gr.scale=0.34
  gr.visible=false;

//winning sprite
winner=createSprite(682,345);
winner.addImage(winimg);
winner.scale=0.987
winner.visible=false;

//starting image
starti=createSprite(685,350)
starti.addImage(startimg);

}





function draw(){ 
 background(backgroundImg);

  
  //textSize(25)
//ill("white")
  //text(mouseX+","+ mouseY,mouseX,mouseY)
  

  //knightcontrol

if(knight.y>=464){
  if(keyDown("space")){
    knight.velocityY=-7;
    }
}
else if(knight.y>=150)
  if(keyDown("space")){
    knight.velocityY=-13;
    }
else
if(keyDown("space")){
  knight.velocityY=-10;
  }



if(keyWentDown("LEFT_ARROW")){
knight.velocityX=-3
knight.addAnimation("idle",leftrunknight);
B=2;
}
if(keyWentUp("LEFT_ARROW")){
knight.velocityX=0
  knight.addAnimation("idle",leftidle);
  
}

if(keyWentDown("Right_ARROW")){
  starti.visible=false;
  knight.velocityX=3
  knight.addAnimation("idle",runknight);
  B=1;
  bgmusic.play();
  
  }
  if(keyWentUp("Right_ARROW")){
  knight.velocityX=0
    knight.addAnimation("idle",idleknight);
  }

//knightattack

  if(keyWentDown("UP_ARROW")){
    
    knight.addAnimation("idle",attackanimation);
    knight.setCollider("rectangle",10,5,35,37);
    A=2;
    
    if(B===2){
      knight.addAnimation("idle",leftattack);
      knight.setCollider("rectangle",-10,5,35,37);
    }
    }
    if(keyWentUp("UP_ARROW")){
      knight.setCollider("rectangle",0,5,20,37);
      knight.addAnimation("idle",idleknight);
     A=1;
    }

    //moving zombie
    if(zombie.collide(invisible2)){
      zombie.velocityX=-3
      zombie.addAnimation("walk",zombieleft);
    }
    if(zombie.collide(invisible1)){
      zombie.velocityX=3
      zombie.addAnimation("walk",zombieanimation);
    }

if(knight.collide(zombie)) {
if(A!==2){
  life=life-1;
  if(life===4){
    lifei5.visible=false;
  }
  if(life===3){
    lifei4.visible=false;
  }
  if(life===2){
    lifei3.visible=false;
  }
  if(life===1){
    lifei2.visible=false;
  }
  if(life===0){
    lifei1.visible=false;
    gameState=End
    
   // zombie1.visible=false;
  }

  }
  if(A===2){
    zlife=zlife-1;

    if(zlife===2){
      zh1.visible=false;
    }

    if(zlife===1){
      zh2.visible=false;
    }

    if(zlife===0){
      zh3.visible=false;
      
    }
 
  
  }
}


if(zlife===0){
  zombie.destroy();
  zl1.visible=true;
zl2.visible=true;
zl3.visible=true;
zlife=3
if(C!==2){
  zombie1=createSprite(1184,56)
}
zombie1.addAnimation("walk",zombieanimation)
zombie1.setCollider("rectangle",-10,11,50,108);
zombie1.velocityX=4
zlife=5;
C=2

}



console.log("life : " + life);

if(C===2){
  zombie1.velocityY=zombie1.velocityY+0.5;
  zombie1.collide(righcornerup1);
zombie1.collide(righcornerup2);
zombie1.collide(righcornerup3);
zombie1.collide(righcornerup4);
//zombie1.collide(righcornerup4);
zombie1.setCollider("rectangle",-10,11,50,108);
//zombie1.bounceOff(in1);
//zombie1.bounceOff(in2);

if(keyWentDown("UP_ARROW")){
    
  knight.addAnimation("idle",attackanimation);
  knight.setCollider("rectangle",10,5,35,37);
  A=2;
  
  if(B===2){
    knight.addAnimation("idle",leftattack);
    knight.setCollider("rectangle",-10,5,35,37);
  }
  }
  if(keyWentUp("UP_ARROW")){
    knight.setCollider("rectangle",0,5,20,37);
    knight.addAnimation("idle",idleknight);
   A=1;
  }

if(zombie1.collide(in1)){
  zombie1.velocityX=-3
  zombie1.addAnimation("walk",zombieleft);
}

if(zombie1.collide(in2)){
  zombie1.velocityX=3
  zombie1.addAnimation("walk",zombieanimation);
  
}



if(knight.collide(zombie1)) {
  if(A!==2){
    console.log("check1")
    life=life-1;
    if(life===4){
      lifei5.visible=false;
    }
    if(life===3){
      lifei4.visible=false;
    }
    if(life===2){
      lifei3.visible=false;
    }
    if(life===1){
      lifei2.visible=false;
    }
    if(life===0){
      lifei1.visible=false;
      gameState=End
      zombie1.visible=false;
    }
  
    }
    if(A===2){
      console.log("check2")
      zlife=zlife-1;
  
      if(zlife===2){
        zl1.visible=false;
      }
  
      if(zlife===1){
        zl2.visible=false;
      }
  
      if(zlife===0){
        zl3.visible=false;
    
        zombie1.visible=false;
        zombie1.x=110001;
        k=2;
        //gameState=End;
      }
   
    
    }
  }

}

knight.velocityY=knight.velocityY+0.5;

zombie.velocityY=zombie.velocityY+0.5;

if(knight.collide(topwater)||knight.collide(topwater1)){
gameState=End
}


if(knight.collide(treasure)&&k===2){
  bgmusic.stop();
  winningmusic.play();
  treasure.addImage(tropenimg);
treasure.visible=false;
//treasure=createSprite(1300,100)
winner.visible=true;
//gameState=End;
}

console.log("zombielife : "+zlife);
console.log(A);

knight.collide(edges[0])
knight.collide(edges[1])
knight.collide(edges[2])
knight.collide(platform);
knight.collide(platform1);
knight.collide(bigplatformup);
knight.collide(tile1);
knight.collide(tile11)
knight.collide( bigplatform);
knight.collide(smallcenter1);
knight.collide(smallcenter2);
knight.collide(smallcenterup1);
knight.collide(smallcenterup2);
knight.collide(bigplatformcenterup);
knight.collide(bigplatformcenterdown);
knight.collide(bigplatformcenterup1);
knight.collide(bigplatformcenterdown1);
knight.collide( bigplatformup);
knight.collide( bigplatformrightside);
knight.collide( righcornerdown1);
knight.collide( righcornerdown2);
knight.collide( righcornerdown3);
knight.collide(righcornerup1);
knight.collide(righcornerup2);
knight.collide(righcornerup3);
knight.collide(righcornerup4);
knight.collide(centertile1);
knight.collide(centertile2);
knight.collide(centertile3);
knight.collide(smallcenter1);
knight.collide(smallcenter2);
knight.collide(smallcenterup1);
knight.collide(smallcenterup2);
knight.collide(box5);
knight.collide(box1);
knight.collide(box2);
knight.collide(box3);
knight.collide(box4);
knight.collide(treasure);


//zombie.collide(platform);
//zombie.collide(platform1);
//ombie.collide(bigplatformup);
zombie.collide(tile1);
zombie.collide(tile11)
//zombie.collide( bigplatform);
//zombie.collide(smallcenter1);
//zombie.collide(smallcenter2);
//zombie.collide(smallcenterup1);
//zombie.collide(smallcenterup2);
zombie.collide(bigplatformcenterup);
zombie.collide(bigplatformcenterdown);
zombie.collide(bigplatformcenterup1);
zombie.collide(bigplatformcenterdown1);
zombie.collide( bigplatformup);
//zombie.collide( bigplatformrightside);
//zombie.collide( righcornerdown1);
//zombie.collide( righcornerdown2);
//zombie.collide( righcornerdown3);
//zombie.collide(righcornerup1);
//zombie.collide(righcornerup2);
//zombie.collide(righcornerup3);
//zombie.collide(righcornerup4);
zombie.collide(centertile1);
zombie.collide(centertile2);
zombie.collide(centertile3);
//zombie.collide(smallcenter1);
//zombie.collide(smallcenter2);
//zombie.collide(smallcenterup1);
//zombie.collide(smallcenterup2);
// zombie.collide(box5);
zombie.collide(box1);
zombie.collide(box2);
zombie.collide(box3);
//zombie.collide(box4);





if(gameState===End){
  //background(gameover.png)
  knight.visible=false;
//zombie1.visible=false;
gr.visible=true;
treasure.visible=false;
bgmusic.stop();









  }


    drawSprites();

    if(gameState===End){
      textSize(30);
      fill("lightblue")
      text("Press CTRL+R to restart",1000,670);
    

        }

      }
    
 








