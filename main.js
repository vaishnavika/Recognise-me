Webcam.set({
    width:350,
    hight:300,
    image_format:'png',
    png_qulity:90
});
camera=document.getElementById("camera");

Webcam.attach('#camara');

function capture()()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri'"/>'>
    });
}
console.log('ml5 version:',ml5.version);

classifer=ml5.imageClassifier(' https://teachablemachine.withgoogle.com/models/jAokk-6OD/model.json',modelLoded);