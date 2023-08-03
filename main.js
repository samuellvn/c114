var canvas;
var classifier;
var video;
var pose_net;

function preload(){
}
function setup(){
  canvas=createCanvas(300, 300);
  canvas.center();
}
function draw(){

}
function takeSnapshot(){
  save("foto.png");
}
function modelo_carregado(){
  console.log("poseNet foi carregada");
}
function poses_obtidas(results){
  if(results.length>0){
    console.log(results);
    console.log("nariz_x: "+results[0].pose.nose.x);
    console.log("nariz_y: "+results[0].pose.nose.y);
  }
}
function draw(){
  image(video, 0, 0, 300, 300);

}
function takeSnapshot(){
  save("foto.png");
}
