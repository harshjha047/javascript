const password = document.querySelector("#password")
const icon = document.querySelector(".icon")

function passwordOnClick(){
    if(password.type == "password"){
        password.type = "text"
        icon.innerHTML = '<i class="fa-regular fa-eye"></i>'
    }
    else{
        password.type = "password"
         icon.innerHTML = '<i class="fa-regular fa-eye-slash"></i>'
    }
}