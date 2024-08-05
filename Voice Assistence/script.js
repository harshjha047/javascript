const reactor = document.querySelector('.reactor')
const indigator = document.querySelector('.indigator')
const user = "harsh"
const enter = ()=>{
    gsap.to(".reactor",{
        scale: 1.1,
        ease: 'elastic.out(1, 0.3)',
        duration: 0.2,
        filter: 'drop-shadow(0px 0px 60px rgb(31, 38, 135))'
    })
}
const leave = ()=>{
    gsap.to(".reactor",{
        scale: 1,
        ease: 'elastic.out(1, 0.3)',
        duration: 0.2,
        filter: 'drop-shadow(0px 0px 35px rgb(31, 38, 135))'
    })
}


const speak = (text)=>{
    const textToSpeak = new SpeechSynthesisUtterance(text);
    textToSpeak.rate = 1;
    textToSpeak.volume = 1;
    textToSpeak.pitch = 1;
    window.speechSynthesis.speak(textToSpeak);
}
function wish(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak(`Good Morning ${user}`)
    }

    else if(hour>12 && hour<17){
        speak(`Good Afternoon ${user}`)
    }

    else{
        speak(`Good Evenining ${user}`)
    }

}

window.addEventListener('load', ()=>{
    speak(`initializing... `);
    speak(`Press Reactor for voice control `);
    // speak(`Hellow...`);
    wish()
})

 const SpeechRecognition = window.SpeechRecognition ||  window.webkitSpeechRecognition;
 const recognition = new SpeechRecognition();

 recognition.onresult =(e)=>{
    const correntIndex = e.resultIndex;
    const transcript = e.results[correntIndex][0].transcript;
    indigator.textContent = transcript;
    takeCommand(transcript.toLowerCase())
 }
 reactor.addEventListener("click",()=>{
    indigator.textContent = "Decoding..."
    recognition.start()
 })



 const takeCommand = (command)=>{

    if(command.includes('search')){
        const searchTerm = command.split('search ')[1]
        window.open(`https://www.google.com/search?q=${searchTerm}`)
        speak(`searching for ${searchTerm}`)
    }
    else if(command.includes('play')){
        const songName = command.split('play ')[1]
        speak(`playing ${songName}`)
    }
    else if(command.includes('weather')){
        const cityName = command.split('weather ')[1]
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=96c01dbd7a9ca735381ec9a4b26c0d52`)
       .then(response => response.json())
       .then(data => {
            // speak(`The weather in ${cityName} is ${data.weather[0].description}. The temperature is ${data.main.temp}°C.`)
            speak(`sorry weather cannot be Access for now`)
        })
    }
    else if(command.includes('app')){
        const appName = command.split('app ')[1]
        window.open(`${appName}:///`)
        speak(`opening ${siteName}`)
    }
    else if(command.includes('open')){
        const siteName = command.split('open ')[1]
        window.open(`https://${siteName}.com`)
        speak(`opening ${siteName}`)
    }
    else if(command.includes('close')){
        const siteName = command.split('close ')[1]
        window.close(siteName)
        speak(`closing ${siteName}`)
    }
    else if(command.includes('time')){
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        speak(`The current time is ${hours}:${minutes}`)
    }
    else if(command.includes('date')){
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        speak(`The current date is ${day}/${month}/${year}`)
    }
    else if(command.includes('shut down')){
        speak(` Scripts may close only the windows that were opened by them.`)
        window.close()
    }
    else if(command.includes('restart')){
        speak(`Restarting...`)
        window.location.reload()
    }
    else if(command.includes('hello') || command.includes('hi') || command.includes('hey')){
        speak(`Hellow ${user} howw may i help you today`)
    }
    else{
        speak(`I'm sorry, I didn't understand that. Please try again.`)
    }
 }
