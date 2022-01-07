
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(650, 600);
    video.position(100, 100)
 

    canvas = createCanvas(600, 550);
    canvas.position(800, 150)
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Intialized!')
}

function draw() {
    background('#FFC0CB');
    textSize(difference);
    fill('#00FFFF');
    text('Sameeraj', 50, 400);
    document.getElementById('font_size').innerHTML = "Font Size of The Text will be " + difference + "px";
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX =" + leftWristX + " rightWristX = "+ rightWristX+ " difference =" + difference);
    }
}