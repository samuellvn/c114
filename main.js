var canvas;
var classifier;
var video;
var pose_net;
var hat;
var nariz_x=0;
var nariz_y=0;

function preload(){
  hat=loadImage("hat.png");
}
function setup(){
  canvas=createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  pose_net=ml5.poseNet(video, modelo_carregado);
  pose_net.on("pose", poses_obtidas);
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
    nariz_x=results[0].pose.nose.x-50;
    nariz_y=results[0].pose.nose.y-200;
  }
}
function draw(){
  image( video, 0, 0, 300, 300);
  image( hat, nariz_x, nariz_y, 80, 100);
}
function takeSnapshot(){
  save("foto.png");
}
