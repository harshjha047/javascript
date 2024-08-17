
function popup(){
    gsap.to(".box",{
        scale:1,
    })
    gsap.from(".box",{
        top:0,
    })
}
function popout(){
    gsap.to(".box",{
        scale:0,
    })
}