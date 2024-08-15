const playBtn =document.querySelector(".playBtn")
const playBtnIcon =document.querySelector(".playBtn i")
const count = document.querySelector(".count")
const resetBtn =document.querySelector(".resetBtn")
let [hour, minute, second] = [0,0,0]

let toggled = false;
let setTime = null

function timer(){
        second++;
        if(second == 60){
            second = 0;
            minute++;
            if(minute == 60){
                minute = 0;
                hour++;
            }
        
    }
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    count.innerHTML= h + ":" + m + ":" + s;
}

function btnAnim(){
    if(!toggled){
        if(setTime!==null){
            clearInterval(setTime)
        }
        setTime = setInterval(timer, 1000);
        playBtnIcon.classList.add("fa-pause")
        playBtnIcon.classList.remove("fa-play")
        toggled = true;
    } else {
        playBtnIcon.classList.add("fa-play")
        playBtnIcon.classList.remove("fa-pause")
        toggled = false;
        clearInterval(setTime);
    }
}
function reset(){
    clearInterval(setTime);
    [hour, minute, second] = [0,0,0]
    count.innerHTML="00:00:00"
}
