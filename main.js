function preload(){
    noseX=0;
    noseY=0;
    img=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
    
    }
    function setup(){
        canvas = createCanvas(300,300);
        canvas.center();
        video = createCapture(VIDEO);
        video.size(300,300);
        video.hide();
        poseNet = ml5.poseNet(video, modelLoaded);
        poseNet.on('pose',gotPoses);
    }
    function modelLoaded(){
        console.log("Pose net is initialized");
    }
    function gotPoses(results){
    if(results.length> 0){
    console.log(results);
    console.log("nose_x=" +results[0].pose.nose.x);
    console.log("nose_y=" +results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    
       } 
    }
    function take_snapshot(){
        save("image.png");
    }
    function draw(apply_lipstick,apply_mustache){
       
        image(video,0,0,300,300);
        function apply_lipstick(){
            image(img,noseX-20,noseY-15,40,30)
        }
        image(video,0,0,300,300);
        function apply_mustache(){
            image(mustache,noseX-20,noseY-15,40,30)
        }
       
        
        
        
    
    }
    