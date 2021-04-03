moustachex= 0;
moustachey=0;
function preload(){
img = loadImage('https://i.postimg.cc/Pqy8wC6c/moustache.png');
}

function setup(){
    canvas = createCanvas(350 , 350);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video , modelloaded);

    poseNet.on('pose' , gotPoses);
}

function gotPoses(results)
    {
if(results.length > 0){
console.log(results);
moustachex = results[0].pose.nose.x;
moustachey = results[0].pose.nose.y;
}
    }



function modelloaded(){
    console.log("model is intialized");
}

function draw(){
image(video, 0 ,0, 350, 350);
image(img , moustachex - 170 , moustachey - 48 , 50 , 30);
}

function take_snapshot(){
    save("photo.png");
}

