const inputDate =document.querySelector('.date')
const btn =document.querySelector('.btn')
const results = document.querySelector('.results')
inputDate.max=new Date().toISOString().split('T')[0]
btn.addEventListener('click',()=>{
    let Birthday = new Date(inputDate.value)
    let d1 = Birthday.getDate()
    let m1 = Birthday.getMonth() + 1
    let y1 = Birthday.getFullYear() 

    let today = new Date()
    let y2 =today.getFullYear()
    let m2 =today.getMonth() + 1
    let d2 =today.getDate()

    let d3,m3,y3;

    y3 = y2 - y1;

    if(m2>=m1){
        m3 = m2 - m1
    } else{
        y3--;
        m3 = 12 + m2 - m1 
    }
    
    if(d2>=d1){
        d3 = d2 - d1
    } 
    else{
        m3--;
        d3 = dayCare(y1, m1)+d2-d1
    } 
    if(m3<0){
        m3 = 11
        y3--
    }

    console.log(y3,m3,d3);
    results.innerHTML=` You are <span class="year yellow">${y3}</span> years <span class="month yellow">${m3}</span> months and <span class="day yellow">${d3}</span> days old`
    
})

let dayCare =(year,month)=>{
    return new Date(year,month,0).getDate()
} 