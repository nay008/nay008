//variáveis da bolinha
let xBolinha = 200;
let yBolinha = 50;
let diametro = 19;
let raio = diametro / 2 ;

//velocidade da bolinha
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 56;


//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
