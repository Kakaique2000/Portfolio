let rot = 0;
let s;
let dis;
let offset = 0;
var sliOffset, sliMin, sliScale;

function setup() {
 var canvas = createCanvas(420, 420, WEBGL);
 canvas.parent('jumbo-canvas');
 let sliOffset = 5;
 let  sliMin = 160;
 let sliScale = 55;
}

function draw() {
 ortho(-280, 280, -280, 280, -280, 280);
 rotateX(QUARTER_PI * 2 / 3);
 rotateY(QUARTER_PI);
  colorMode(RGB);
 background(52,58,64);
 ambientMaterial(255);
 s  = 55;
 colorMode(HSB);
 directionalLight(200, 27, 20, 1, -1, 0); // direita
 directionalLight(24, 10, 90, -1, -1, 0); // esquerda
 directionalLight(208, 30, 80, 0, 1, 0); // cima

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
 rot += PI / 60;
}