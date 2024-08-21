let fnameError = document.querySelector("#fnameError")
let PnameError = document.querySelector("#PnameError")
let EnameError = document.querySelector("#EnameError")

function validataName(){
    var name = document.querySelector("#fname").value;
    if(name.lenght==0){
        fnameError.innerHTML = "*Full Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        fnameError.innerHTML = "*Enter Valid Full Name";
        return false;
    }
    fnameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}
function validataPhone(){
    var phone = document.querySelector("#phone").value;
    if(phone.lenght==0){
        PnameError.innerHTML = "*Phone Number is required";
        return false;
    }
    if(!phone.lenght == 10){
        PnameError.innerHTML = "*Enter correct Phone Number";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        PnameError.innerHTML = "*Enter Valid Phone Number";
        return false;
    }
    PnameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
    var email = document.querySelector("#email").value;
    if(email.lenght==0){
        EnameError.innerHTML = "*Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
        EnameError.innerHTML = "*Enter Valid Email";
        return false;
    }
    EnameError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}