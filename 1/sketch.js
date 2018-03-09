int= right= 200; //Esta variable hace referencia al punto X de la elipse
int= right2= 310 //Esta variable hace referencia al punto X del segundo y tercer punto del triágulo
int= right3= 220 //Esta variable hace referencia del punto X de la segunda elipse.
int= cookie= 350 // Esta variable hace referencia al punto X de la tercera elipse.
int= chip= 367 //Esta variable hace referencia a los puntos X de las elipses cuatro y seis.
int= chip2= 335 // Esta variable hace referencia al punto X de la quinta elipse.
int= up= 800 // Esta variable hace referencia al punto Y de la septima elipse.
int= up2= 600 // Esta variable hace referencia a los puntos 1 y 3 del segundo triángulo.
int= up3= 780 // Esta variable hace referencia al punto Y de la octava elipse
int= cookie2= 700 // Esta variable hace referencia al punto Y de la novena elipse.
int= chip3= 687 //Esta variable hace referencia a los puntos Y de las elipses diez y doce
int= chip4= 715 //Esta variable hace referencia al punto Y de la elipse once.

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  //Variables
  right= right + 5
  right2= right2 +5
  right3= right3 + 5
  cookie= cookie + 5
  chip= chip + 5
  chip2= chip2 + 5
  up= up - 5
  up2= up2 - 5
  up3= up3 - 5
  cookie2= cookie2 - 5
  chip3= chip3 - 5
  chip4= chip4 - 5

  //forma Pacman horizontal
  noStroke();
  fill(255,255,0);
  ellipse(right,200,200,200);
  fill(0,0,0);
  triangle(right2,150,right,200,right2,250);
  ellipse(right3,130,25,25);

  //forma de Pacman vertical
  noStroke();
  fill(255,255,0);
  ellipse(200,up,200,200);
  fill(0,0,0);
  triangle(right2,150,right,200,right2,250);
  triangle(100,up2,200,up,300,up2)
  ellipse(140,up3,25,25);

  //forma de galleta
  fill(248,153,24);
  stroke(103,61,3);
  ellipse(cookie,200,70,70);
  fill(103,61,3);
  ellipse(chip,213,10,10);
  ellipse(chip2,197,10,10);
  ellipse(chip,188,10,10);

  fill(248,153,24);
  stroke(103,61,3);
  ellipse(200,cookie2,70,70);
  fill(103,61,3);
  ellipse(213,chip3,10,10);
  ellipse(197,chip4,10,10);
  ellipse(188,chip3,10,10);

  //forma camino
  fill(186,3,190);
  stroke(249,2,163);
  rect(0,60,60,15);
  rect(0,320,60,15);
  rect(60,0,15,75);
  rect(60,320,15,80);
  rect(335,60,65,15);
  rect(325,0,15,75);
  rect(325,320,15,80);
  rect(340,320,65,15);

  //condicionales de movimiento horizontal de Pacman
  if(right > 1100){
    right= -100
    right2= 0
    right3= -100
    cookie= 0
    chip= cookie + 17
    chip2= cookie - 15
  }
  //condicionales de mocimiento vertical de Pacman
  if(up < -500){
    up= 700
    up2= 500
    up3= 680
    cookie2= 600
    chip3= cookie2 - 15 
    chip4= cookie2 + 17
  }
}