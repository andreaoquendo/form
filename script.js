const pages = Array.from(document.getElementsByClassName('page'));
const btn_avancar = document.getElementById("avancar");
const btn_voltar = document.getElementById("voltar");
const btn_enviar = document.getElementById("enviar");
const form = document.getElementById("form-contato")
const max_pages = pages.length;


var display_page = 0;

function showPage(){

    pages.forEach(page => {
        page.style.display = 'none';
    })

    pages[display_page].style.display = 'block';


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

function submitForm(){
    for (const i of pages[display_page].querySelectorAll("[required]")) {
        if (!i.reportValidity()) return;
    }
    
    form.submit();
    alert('Sua mensagem foi enviada!');
    
}

//form.addEventListener('submit', handleSubmit);

showPage();