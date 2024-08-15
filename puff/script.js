const images = []
const  canwe = document.querySelector('canvas')
const context = canwe.getContext('2d')
const frame = {
    currentFrame:0,
    maxFrame:403,
}
imgLoad = 0
function scrollAnimLoad() {
    for (let index = 1; index <= frame.maxFrame; index++) {
        let imgUrl =`./New folder/frame_${index.toString().padStart(4,"0")}.jpeg` ;
        // console.log(imgUrl);
        const img = new Image()
        img.src = imgUrl;
        img.onload = () => {
            // Add the image to the DOM here
            imgLoad++
            if(imgLoad === frame.maxFrame){
                console.log("loaded")
                scrollAnim(frame.currentFrame)
                startAnim()
            }
        }
        images.push(img)
    }
}
scrollAnimLoad()

function scrollAnim(index) {
    if (index >= 0 && index <= frame.maxFrame) {
        const img = images[index]
        // console.log(img);
        

        canwe.width = window.innerWidth
        canwe.height = window.innerHeight

        const scaleX = canwe.width / img.width
        const scaleY = canwe.height / img.height
        const scale = Math.max(scaleX, scaleY)

        const newWidtn = img.width * scale
        const newHeight = img.height * scale

        offsetX = (canwe.width - newWidtn) / 2
        offsetY = (canwe.height - newHeight) / 2

        context.clearRect(0, 0, canwe.width, canwe.height)
        context.imageSmoothingEnabled = true
        context.imageSmoothingQuality = "high"
        context.drawImage(img, offsetX, offsetY, newWidtn, newHeight)
        frame.currentFrame = index;
        // console.log(img);
    }
}
function startAnim(){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".parent",
            scrub: 2,
            start: "top top",
            marker: true
    }})
    tl.to(frame,{
        currentFrame:frame.maxFrame,
        onUpdate: function (){
            scrollAnim(Math.floor(frame.currentFrame))
        }
    })
}