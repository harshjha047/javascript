const link =document.querySelector('input')
const QR =document.querySelector('.QR')

async function createQrCode(){
    console.log(link.value)
    if (!link.value) {
        QR.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://youtu.be/dQw4w9WgXcQ?si=DzJP13ljVt2jhJmP" alt="">`
    }else{
        QR.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link.value}" alt="">`
    }
   
}

