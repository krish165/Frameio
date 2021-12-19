function preload()
{
  
}

function setup()
{
    canvas=createCanvas(1000,650);
    canvas.position(180,200);
  
    video=createCapture(VIDEO);
    video.hide();
    
    
    
  
}

function draw()
{
  image(video,180,110,650,450);
  

  fill("limegreen");
  rect(90,50,850,50);
    
  fill("blue");
  rect(900,50,50,560);

  fill("white");
  rect(100,570,850,50);

  fill("pink");
  rect(60,50,50,560);

  fill("salmon");
  circle(940,580,100);

  fill("red");
  circle(70,70,100);

  fill("yellow");
  circle(900,70,100);

  fill("salmon");
  circle(80,575,100);
}

function takep()
{
    save("Framed Photo.png");
}