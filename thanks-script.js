const form_again = document.getElementById('form-again');
const box = document.getElementById("box-left");
var timer = 100;

/* Voltar para o formulário. */
function formAgain(){
    window.location.href = "index.html";
}

/* Transição inicial de opacidade. */
var interval = setInterval(()=> {
    
    timer--;
    box.style.opacity = `${scale(100 - timer, 0, 100, 0, 1)}`;
    console.log('oi')
    if(timer == 0) clearInterval(interval);

}, 10);

const scale = (num, in_min, in_max, out_min, out_max) => {
    return((num- in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}