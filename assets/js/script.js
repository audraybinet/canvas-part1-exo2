// const canvas=document.querySelector("canvas");
// const ctx= canvas.getContext("2d");
// // base de la maison
// (function draw(){
//   ctx.fillStyle = "#A7D7E7";
//   ctx.fillRect(100 ,180, 200, 200);
// })();
// //base toit
// (function draw(){
//   ctx.rotate(Math.PI/180*45)
//   ctx.fillStyle = "#D08536";
//   ctx.fillRect(190,-90, 150, 150);
//   ctx.clearRect(10, 0, 50, 50);
// })();
// //base fenetre
//
// (function draw(){
// ctx.fillStyle = "grey";
// ctx.fillRect(210 ,210, 50, 50);
// ctx.fillRect(340,210, 50,50);
// ctx.fillRect(275,300, 50,100);
// })();
var canvas=document.querySelector("canvas");
var ctx= canvas.getContext("2d");

//base du toit

(function draw(){
ctx.rotate(Math.PI/180*45);
ctx.fillStyle = "#D08536";
ctx.fillRect(50, -50, 100, 100);
})();

(function draw(){
ctx.rotate(Math.PI/180*45);
ctx.fillStyle = "#A7D7E7";
ctx.fillRect(71 ,-139, 145, 133);
})();

(function draw(){
ctx.fillStyle = "grey";
ctx.fillRect(100 ,-40, 30, 30);
ctx.fillRect(100,-135, 30,30);
ctx.fillRect(135,-90, 80,30);
})();
