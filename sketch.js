var world;
var backgroundImg;
var bg;
var knight;
var idleknight;
var runknight;
var jumpknight;
var leftrunknight,leftidle;

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
var zombie,zombieanimation;
var Play=1;
var End=0;
var gameState=Play;


function preload() {

backgroundImg=loadImage("BG.png")
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

}


function setup(){
    createCanvas(windowWidth, windowHeight);


   if(gameState===Play){

    underwater=createSprite(310,704,20,20);
    underwater.addImage(underwaterimg)
    

    topwater=createSprite(310,654,20,50);
    topwater.addImage(topwaterimg)

    underwater1=createSprite(930,704,20,20);
    underwater1.addImage(underwaterimg)
    

    topwater1=createSprite(930,654,20,20);
    topwater1.addImage(topwaterimg)


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

//zombie
zombie=createSprite(200,80)
zombie.addAnimation("walk",zombieanimation)
zombie.debug=true;
zombie.setCollider("rectangle",-10,11,50,110);
zombie.velocityX=2;
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
   }


}

function draw(){ 
 background(backgroundImg);

if(gameState===Play){

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
}
if(keyWentUp("LEFT_ARROW")){
knight.velocityX=0
  knight.addAnimation("idle",leftidle);
}

if(keyWentDown("Right_ARROW")){
  knight.velocityX=3
  knight.addAnimation("idle",runknight);
  }
  if(keyWentUp("Right_ARROW")){
  knight.velocityX=0
    knight.addAnimation("idle",idleknight);
  }

  if(keyWentDown("UP_ARROW")){
    knight.addAnimation("idle",attackanimation);
    }
    if(keyWentUp("UP_ARROW")){
      knight.addAnimation("idle",idleknight);
    }

knight.velocityY=knight.velocityY+0.5;

zombie.velocityY=zombie.velocityY+0.5;


if(knight.collide(treasure)){
treasure.visible=false;
treasure=createSprite(1300,100)
treasure.addImage(tropenimg);
gameState=End;
}



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


zombie.collide(platform);
zombie.collide(platform1);
zombie.collide(bigplatformup);
zombie.collide(tile1);
zombie.collide(tile11)
zombie.collide( bigplatform);
zombie.collide(smallcenter1);
zombie.collide(smallcenter2);
zombie.collide(smallcenterup1);
zombie.collide(smallcenterup2);
zombie.collide(bigplatformcenterup);
zombie.collide(bigplatformcenterdown);
zombie.collide(bigplatformcenterup1);
zombie.collide(bigplatformcenterdown1);
zombie.collide( bigplatformup);
zombie.collide( bigplatformrightside);
zombie.collide( righcornerdown1);
zombie.collide( righcornerdown2);
zombie.collide( righcornerdown3);
zombie.collide(righcornerup1);
zombie.collide(righcornerup2);
zombie.collide(righcornerup3);
zombie.collide(righcornerup4);
zombie.collide(centertile1);
zombie.collide(centertile2);
zombie.collide(centertile3);
zombie.collide(smallcenter1);
zombie.collide(smallcenter2);
zombie.collide(smallcenterup1);
zombie.collide(smallcenterup2);
zombie.collide(box5);
zombie.collide(box1);
zombie.collide(box2);
zombie.collide(box3);
zombie.collide(box4);
}

if(gameState===End){
background(BG1.png)

}



    drawSprites();
 
}







