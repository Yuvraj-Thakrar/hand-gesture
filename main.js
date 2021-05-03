Webcam.set({
    width: 340,
    height:300,
    img_format:'png',
    png_quality:100,
});

cam=document.getElementById("cam");

Webcam.attach('#cam');

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("snap").innerHTML='<img id="captured_img" src="'+data_uri+'">';
});
}

console.log("ml5",ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/cZOIaOtjh/model.json",modelLoaded);

function modelLoaded(){
console.log("Model is now loaded");
}

function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if (error) {
        console.error(error);
    } else {
        console.log(results);
document.getElementById("gesture").innerHTML=results[0].label;
    }
}