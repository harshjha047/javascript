const boxes = document.querySelector('.case')
const Success = "<i class='fa-solid fa-circle-check'></i>Successfully submitted"
const setError = '<i class="fa-solid fa-circle-xmark"></i>Error'
const Invalid = '<i class="fa-solid fa-circle-exclamation"></i> Invalid request'

function showNotification(msg){
    const box = document.createElement('div');
    box.classList.add('box');
    box.innerHTML = msg
    boxes.appendChild(box);

    if (msg.includes('Successfully')) {
        box.classList.add('success');
    }
    else if (msg.includes('Error')) {
        box.classList.add('error');
    }
    else if (msg.includes('Invalid')) {
        box.classList.add('invalid');
    }
    setTimeout(() => {
        box.remove();
    }, 5000);
}