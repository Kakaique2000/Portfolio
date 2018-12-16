let rot = 0;
let s;
let dis;
let offset = 0;

let x = 0, px = 0;
let xtargetChangable = true;
let xtarget = 0;
 var usp = false;
let indoProLado = 0;
var entrar=false;
var entrarGIF;
var entrarUSP;

$(document).ready(function(){
 $('#USP').click(function(){
  if(usp){
    usp=false;
  entrarGIF=true;
  }
   else {
    usp=true;
    entrarUSP=true;
  }
 indoProLado = 0;
 xtargetChangable = true;
}); 
});


function setup() {
 var canvas = createCanvas(420, 420, WEBGL);
 canvas.parent('jumbo-canvas');
 noStroke();
  ambientMaterial(255);
  noSmooth();
   s  = 55;
   uspObj = loadModel('usp.obj');
 
}

function draw() {
 
colorMode(HSB);
  






 ortho(-700, 700, -700, 700, -700, 900);


 
 
  




  colorMode(RGB);
 background(52,58,64);

  colorMode(HSB);
 //pointLight(25, 10, 95, 7 ,-954, 50); // cima
directionalLight(200, 28, 21, -1 ,0.5, -0.5); // direita
 directionalLight(25, 10, 95, 1 ,-0.5, -0.5); // esquerda
directionalLight(208, 40, 45, -0.5, 1, -0.5); // cima


 if(!usp){ //Se Nao clicou na Universidade de São Paulo Ainda

 if(entrarGIF){
  indoProLado = lerp(indoProLado, 800, 0.05);
  translate(indoProLado-800,0,0);
  rotateY((indoProLado-800)/700);
  if(indoProLado>799) entrarGIF=false;
 }

  rotateX(-QUARTER_PI*2/3);
 rotateY(QUARTER_PI);
rotateY(x);

   colorMode(HSB);

 for (let x = -width; x < width; x += s) {
  for (let z = -height; z < height; z += s) {
   push();
   translate(x, 0, z);
   dis = dist(x, z, 0, 0);
   offset = map(dis, width, 0, 0, 5);
   var soma = rot + offset;
   tam = floor(map((sin(soma)), -1, 1, 160, 600));
   box(s, tam, s);
   offset += 0.1;
   pop();
  }
 }



if(xtargetChangable) xtarget = (round(x/HALF_PI ) * HALF_PI);

}

else { //Se clicou
   rotateX(-QUARTER_PI*2/3);
 rotateY(TWO_PI-QUARTER_PI);
 if(entrarUSP){
  indoProLado = lerp(indoProLado, 800, 0.05);

  translate(indoProLado-800,0,0);
 rotateY((indoProLado-800)/700);
  if(indoProLado>799) entrarUSP=false;
 }
 
rotateY(x);
colorMode(HSB); 
  
if(xtargetChangable) xtarget = (round(x/TWO_PI ) * TWO_PI);

//pointLight(208, 30, 80, 50, 100, 050); // cima
 
  model(uspObj);
}
 rot += (PI / 60);
 if(rot>=TWO_PI) rot=0;
 
x += px;



  px = lerp(px, 0, 0.05);

   
  if(abs(px)<0.001){
   
    px = 0;
  
  
  x = lerp(x, xtarget, 0.08);
    

    if(abs(x-xtarget) <0.001) {
    xtargetChangable = false;

      

    }

 }


}

function mouseDragged(){
  px = mouseX*0.01 - pmouseX*0.01;
  xtargetChangable=true;

}



//Código Feito Por Kaique A. L. Muniz