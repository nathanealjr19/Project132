status = "";

function preload(){
    img = loadImage('kitchen.png')
}

function setup(){
    canvas = createCanvas(640,420)
    canvas.center()
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Objects"
  }


  function modelLoaded(){
    console.log("model Loaded!")
    status = true
    objectDetector.detect(img,gotResult)
  }

  function gotResult(error, results){
    if(error){
     console.log(error)
    }
    console.log(results)
   }

   function draw(){
     image(img, 0,0, 640,420)
     fill("#FF0000")
     nofill()
     stroke("#FF0000")
     
   }