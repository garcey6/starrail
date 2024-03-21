var song = document.getElementById("backgroundMusic")
var icon = document.getElementById("icon")

icon.onclick=function(){
    if (song.paused) {
        song.play();
        icon.src = "image/play.png"
    }else{
        song.pause();
        icon.src = "image/play.png"    
    }
}