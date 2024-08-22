const cover=document.querySelector(".cover")
const left=document.querySelector(".left")
const right=document.querySelector(".right")

cover.addEventListener("wheel",(e)=>{
    e.preventDefault()
    cover.scrollLeft += e.deltaY
})

left.addEventListener("click",()=>{
    cover.style.scrollBehavior="smooth"
    cover.scrollLeft -= 950
})
right.addEventListener("click",()=>{
    cover.style.scrollBehavior="smooth"
    cover.scrollLeft += 950
})