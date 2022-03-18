

/*
Acessando
Por TAG: getElementByTagName()
Por ID: getElementById()
Por nome: getElementByName()
Por classe: getElementsByClassName()
Por seletor: querrySelector()
*/

let nome = window.document.getElementById('nome');
let email = window.document.querySelector('#email');
let assunto = window.document.querySelector('#assunto');
let mapa = window.document.querySelector('#mapa')

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;


function validaNome(){
    let txtNome = document.querySelector('#txt-nome');

    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
        }else{
            txtNome.innerHTML='Nome Válido'
            txtNome.style.color ='green'
            nomeOk = true;
        }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txt-email')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML ='Email Invalido'
        txtEmail.style.color ='red'
    }else{
        txtEmail.innerHTML ='Email Válido'
        txtEmail.style.color ='green'
        emailOk = true;
    }
}

function validaAssunto(){
    txtAssunto = document.querySelector('#txt-assunto')
    
    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito comprido! Digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display ='block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true;
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulario enviado com sucesso!!!')
    }
    else{
        alert('Preencha o formulario corretamente')
    }
}

function mapaZoom(){
    mapa.style.width = '80vw'

}
function mapaNormal(){
    mapa.style.width = '40vw'

}