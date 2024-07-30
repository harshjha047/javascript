const input = document.querySelector('#inputBar')
const list = document.querySelector("#list")

function addEvent(){
    if(input.value === ''){
        alert('write somthing first')
    }
    else{
        const li = document.createElement('li')
        li.textContent = input.value
        list.appendChild(li)
        let span = document.createElement('span')
        li.appendChild(span)
    }
    input.value = ''
    storeData()
}
list.addEventListener('click', (e)=>{
    // console.log(e)
    if(e.target.tagName === 'SPAN'){
        e.target.parentNode.remove()
        storeData()
    }
    else if(e.target.tagName === 'LI'){
        e.target.classList.toggle('strike')
        storeData()
    }
})
function storeData (){
    localStorage.setItem('data',list.innerHTML)
}
function showData (){
    list.innerHTML=localStorage.getItem('data')
}
showData()