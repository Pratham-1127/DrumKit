for(var i=0;i<7;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function handleClick(){
        var key = this.innerHTML;
        makesound(key);
        anime(key);
    });
}

document.addEventListener("keydown",function(event){
    makesound(event.key);
    anime(key);
});

function makesound(key){
   //this.style.color = "white";
   switch(key){
    case 'w':
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
    case 'a':
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
    case 's':
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
    case 'd':
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
    case 'j':
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
        break;
    case 'k':
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
        break;
    case 'l':
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
        break;
    //default:console.log(key);
   }
}

function anime(key){
    var addAnimation = document.querySelector("."+key);
    addAnimation.classList.add("pressed");
    setTimeout(function(){
        addAnimation.classList.remove("pressed");
    },100);

}









// var audio = new Audio("./sounds/tom-1.mp3");
// audio.play();