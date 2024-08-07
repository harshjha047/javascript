const btn = document.querySelector(".btn");
const notes = document.querySelector(".notes");

function showData(){
    notes.innerHTML = localStorage.getItem("data")
}
showData()

btn.addEventListener("click",()=>{
    let note = document.createElement("div");
    note.className = "note";
    let p = document.createElement("p");
    p.className = "textarea";
    p.setAttribute("contenteditable", "true");
    let span = document.createElement("span");
    span.className = "delete-btn";
    notes.appendChild(note).appendChild(p);
    note.appendChild(span);
    storeData()
  })


notes.addEventListener("click",(e)=>{
    if(e.target.className === "delete-btn"){
        e.target.parentElement.remove()
        storeData()
    }
    else if(e.target.tagName === "P"){
        let text = document.querySelectorAll(".textarea")
        text.forEach(txt=>{
            txt.onkeyup = function(){
                storeData()
            }
        })

    }
})

function storeData(){
    localStorage.setItem("data", notes.innerHTML)
}

