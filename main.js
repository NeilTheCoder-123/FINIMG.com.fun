noseX = 0;
noseY = 0;
leftEarX=0;
leftEarY=0;

function preload(){
    clown_image = loadImage('https://i.postimg.cc/mrN2KK5s/Clown-Nose.png');
    hat_image = loadImage('https://i.postimg.cc/BQzwT6N8/JokerHat.png');
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is initialized....');
}

function gotPoses(results){
    console.log(results);
    if(results.length > 0){
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-10;
        leftEarX = results[0].pose.leftEar.x-170;
        leftEarY = results[0].pose.leftEar.y-190;
        console.log("Nose X is"+noseX);
        console.log("Nose Y is"+noseY);
    }
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_image, noseX, noseY, 30, 30);
    image(hat_image, leftEarX, leftEarY, 260, 150);
    //fill(255, 0, 0);
    //stroke(255, 255, 0);
    //circle(noseX, noseY, 20);
}

function take_snapshot(){
    save('FinIMG.png');
}