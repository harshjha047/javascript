const lowerCase = "qwertyuiopasdfghjklzxcvbnm"
const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM"
const numbers = "1234567890"
const characters = "!@#$%&"

const Input = document.querySelector(".input")
const passwordLength = 10;

const generatePassword = lowerCase+ upperCase+ numbers+ characters ;

function generate(){
    let password = "";
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += numbers[Math.floor(Math.random() * numbers.length)]
        password += characters[Math.floor(Math.random() * characters.length)]
    while( password.length<passwordLength){
        password += generatePassword[Math.floor(Math.random() * generatePassword.length)]
    }
    Input.value = password
}

generate()

function copyPassword (){
    Input.select()
    document.execCommand("copy")
}