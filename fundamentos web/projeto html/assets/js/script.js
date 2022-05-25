/*
por Tag: getElementByTagName()
por id: getElementById()
por nome: getElementByName()
por Classe: getElementByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')//ou apenas '#email'
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOK = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome(){
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')
    
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Tamanho inválido, digite apenas 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOK = true
    }
}

function enviar(){
    if(nomeOk == true && assuntoOK == true && emailOk == true){
        alert('Formulário enviado com sucesso')
    }else{
        alert('Preencha o formulário corretamente antes de enviar')
    }
}
function zoom(){
    mapa.style.width= '800px'
    mapa.style.height= '600px'
}

function semZoom(){
    mapa.style.width= '500px'
    mapa.style.height= '300px'
}