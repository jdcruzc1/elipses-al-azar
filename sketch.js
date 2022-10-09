function setup() {
  createCanvas(600, 600);
  background(200);

  
     // cuadricula
  for(let i = 0; i < width; i+= 200){
    stroke(0); 
    line(i, 0, i, height);
    line(0, i, width, i);
  }

  //Cuadro 1
  for(let i = 0; i < 40; i++){
    fill(255);
    ellipse(random(0, 200), random(0,200), 20, 20);
}

//Cuadro 2
for(let i = 0; i < 40; i++){
  fill(random(0,250));
  ellipse(random(200, 400), random(0,200), 20, 20);
}
 
//Cuadro 3
for(let i = 0; i < 40; i++){
  fill(random(0, 255), random (0,255), random ( 0, 255));
  ellipse(random(400, 600), random(0,200), 20, 20);
}

//Cuadro 4
for(let i = 0; i < 50; i++){
  fill(255,0,0);
  ellipse(random(0, 200), random(200,400), random (1, 20), random (20, 40));
}

//Cuadro 5
for(let i = 0; i < 50; i++){
  fill(0, 0, 255);
  ellipse(random(200, 400), random(200,400), random (1, 20));
}

 //Cuadro 6
for(let i = 0; i < 50; i++){
  fill(random (0, 255));
  ellipse(random(400, 600), random(200,400), random (1, 20));
}
   //Cuadro 7
for(let i = 0; i < 50; i++){
  fill(random(0, 255), random (0,255), random ( 0, 255));
  ellipse(random(0, 200), random(400,600), random (1, 20));
  }

  //Cuadro 8 blanco
for(let i = 0; i < 50; i++){
  fill(255, 255, 255);
  ellipse(random(200, 400), random(400,600),10, 10);
  }

   //Cuadro 8 azul
for(let i = 0; i < 50; i++){
  fill(0, 0, 255);
  ellipse(random(200, 400), random(400,600), 10, 10);
  }

 //Cuadro 9 
 for(let i = 0; i < 50; i++){
  fill(random (0, 255));
  ellipse(random(450, 550), random(450,550), random (1, 100));
  }
}
  
  function draw() {
    
   
    }