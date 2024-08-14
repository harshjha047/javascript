const bar=document.querySelector('#bar');
const song=document.querySelector('#song');
const playBtn =document.querySelector('.play');
const source=document.querySelector('source');

source.src = "./WhatsApp Audio 2024-08-13 at 9.00.49 PM.mpeg";
song.innerHTML = `<source src="source.src" ></source>`
song.onloadedmetadata = function(){
    bar.max = song.duration;
    bar.value = song.currentTime;
}
if(song.play()){
    setInterval(()=>{
        bar.value = song.currentTime;
    },500)
}else{
    console.log('song not playing')
}

let isPlaying = false;
playPause =()=>{
    if (!isPlaying) {
        playBtn.innerHTML= "<i class='fa-solid fa-pause'></i>"
        isPlaying = true;
        song.play()
        console.log(bar.max)

    } else{
        playBtn.innerHTML= "<i class='fa-solid fa-play'></i>"
        isPlaying = false;
        song.pause()
    }
}
bar.onchange = function(){
    song.play();
    song.currentTime = bar.value; 
    play
}
// console.log(song.play());



