var amarelo = document.getElementById("amarelo")
var azul = document.getElementById("azul")
var laranja = document.getElementById("laranja")
var rosa = document.getElementById("rosa")
var verde = document.getElementById("verde")
var vermelho = document.getElementById("vermelho")
var liga = document.getElementById("off")
const i = document.getElementById("lampada")
const onoff = document.getElementById("imgoff")

/*
function ligarDesliga(){

    var imagem = document.getElementById('imgoff').src;
    var imagem_ligado = './img/on.png';
    var imagem_desligado = './img/onoff.png';
    
    if(imagem == imagem_ligado){
    	document.getElementById('imgoff').src = imagem_desligado;
    }else {
    	document.getElementById('imgoff').src = imagem_ligado;

*/
var atual_state = 'DESLIGADA';

function mudaEstado() {
    atual_state === 'DESLIGADA' ? atual_state = 'LIGADA' : atual_state = 'DESLIGADA';
    return atual_state;
}

function ligaDesliga() {

    if (atual_state === 'DESLIGADA'){
        document.getElementById('imgoff').src = './img/on.png';
        amarelo.addEventListener('click',()=>{
            botao = 1
            i.src = "./img/lampada-amarela.png";
        })
        azul.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-azul.png"
        })
        laranja.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-laranja.png"
        })
        rosa.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-rosa.png"
        })
        verde.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-verda.png"
        })
        vermelho.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-vermelha.png"
        })
    }
    else{
        document.getElementById('imgoff').src = './img/onoff.png';

    }
    mudaEstado();
    

}

liga.addEventListener("click", ligaDesliga)

        amarelo.addEventListener('click',()=>{
            botao = 1
            i.src = "./img/lampada-amarela.png";
        })
        azul.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-azul.png"
        })
        laranja.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-laranja.png"
        })
        rosa.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-rosa.png"
        })
        verde.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-verda.png"
        })
        vermelho.addEventListener('click', ()=>{
            botao = 1
            i.src = "./img/lampada-vermelha.png"
        })

    





