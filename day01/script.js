const playSound = function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio){
        return // if key not found stops function
    };
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");

const removeTransition = function(e){
    if(e.propertyName !== "transform"){
        return
    }   
    this.classList.remove("playing")
}

keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition)
})

window.addEventListener("keydown", playSound)