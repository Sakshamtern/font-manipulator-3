leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    canvas = createCanvas(550, 500);
    canvas.position(560, 160);

    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#38fa07');
    textSize(difference);
    fill(0, 103, 153);
    text('Saksham', 100, 250); 
}

function modelLoaded()
{
    console.log("Model is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}