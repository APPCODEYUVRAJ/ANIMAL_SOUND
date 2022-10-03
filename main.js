var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;
function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/1bhPBh0qG/model.json',modelReady);
}
    function modelReady() {
        classifier.classify(gotReasults);
    }
    function gotReasults(error, results) {
        if(error) {
            console.error(error);
    }
    
    
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random()*255) + 1;
        random_number_g = Math.floor(Math.random()*255) + 1;
        random_number_b = Math.floor(Math.random()*255) + 1;

        document.getElementById("detected").innerHTML = "Detected Dog - "+dog+" Detected lion - "+lion+" , Detected Cow - "+cow;
        document.getElementById("detected").style.color = rgb("+random_number_r+, " , "+random_number_g+, " , "+random_number_b+, ")
        
document.getElementById("animal voices").innerHTML = "Detected Voice Is Of - "+ results[0].lable;
document.getElementById("animal voices").style.color = rgb("+random_number_r+, " , "+random_number_g+, " , "+random_number_b+, ")
    }
}
