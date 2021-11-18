const pages = Array.from(document.getElementsByClassName('page'));
const btn_avancar = document.getElementById("avancar");
const btn_voltar = document.getElementById("voltar");
const btn_enviar = document.getElementById("enviar");
const form = document.getElementById("form-contato")
const slider = document.getElementById("page-slider");
const max_pages = pages.length;

console.log(slider);

var display_page = 0;

function showPage(){

    
    pages.forEach(page => {
        page.classList.remove('active');
    })

    pages[display_page].classList.add('active');
    
    if(display_page == 1){
        
        slider.classList.add("up");
        slider.classList.remove("down");
    }else if(display_page == 0){
        console.log('entrou')
        slider.classList.remove("up");
        slider.classList.add("down");
    }

    showButtons();
}

function showButtons(){

    btn_voltar.style.display = 'none';
    btn_avancar.style.display = 'none';
    btn_enviar.style.display = 'none';

    if(display_page == 0){
        btn_voltar.style.display = 'none';
        btn_avancar.style.display = 'inline-block';
    }
    else{
        btn_voltar.style.display = 'inline-block';
        btn_avancar.style.display = 'none';
        btn_enviar.style.display = 'inline-block';
    }

}

function changePage(n){

    
    if(n == 1){
        for (const i of pages[display_page].querySelectorAll("[required]")) {
            if (!i.reportValidity()) return;
        }
        display_page++;
    }else
        display_page--;
    
    showPage();
}

function submitForm(event){
    for (const i of pages[display_page].querySelectorAll("[required]")) {
        if (!i.reportValidity()) return;
    }

    form.submit();
    window.location.href = "thanks.html";
    alert('Sua mensagem foi enviada!');
    
}

showPage();