const toggelIcon = document.querySelector(".toggelIcon")


let light = true 
function tog(){
    document.body.classList.toggle("dark-mode")
    // const tl = gsap.timeline()
    if(light){
        gsap.to(toggelIcon,{
        x:"1.3vw",
        duration:0.3,
        rotate: "230deg",
        })

        toggelIcon.innerHTML='<i class="fa-solid fa-moon"></i>'
        light = false
    }else{
        gsap.to(toggelIcon,{
            x:0,
            duration:0.3,
            rotate: "0deg",

            })
            
        toggelIcon.innerHTML='<i class="fa-solid fa-sun"></i>'
            

        light = true
    }
}
{/* <i class="fa-solid fa-sun"></i> <i class="fa-solid fa-moon"></i> */}