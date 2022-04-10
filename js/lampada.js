//lampada
var imgLampada = document.querySelector('#lampada')

//botao de ligar
const btnLD = document.querySelector('#btnLD')
var imgLDFonte = document.querySelector('#imgBotao').src
const imgLigado = "./img/on.png"
const imgDesligado = "./img/off.png"

//botoes de cores
const btnAmarelo = document.getElementById("amarelo")
const btnAzul = document.getElementById("azul")
const btnLaranja = document.getElementById("laranja")
const brnRosa = document.getElementById("rosa")
const btnVerde = document.getElementById("verde")
const btnVermelho = document.getElementById("vermelho")

 function mudarAmarelo(){
    imgLDFonte = document.querySelector('#imgBotao').src
    imgLampada = document.querySelector('#lampada')
     
     if(imgLDFonte.includes("on")){
        document.querySelector('#lampada').src = './img/lampada-amarelo.png'
     }
 }

 function mudarAzul(){
    imgLDFonte = document.querySelector('#imgBotao').src
    imgLampada = document.querySelector('#lampada')
     
     if(imgLDFonte.includes("on")){
        document.querySelector('#lampada').src = './img/lampada-azul.png'
     }
 }
 function mudarLaranja(){
    imgLDFonte = document.querySelector('#imgBotao').src
    imgLampada = document.querySelector('#lampada')
     
     if(imgLDFonte.includes("on")){
        document.querySelector('#lampada').src = './img/lampada-laranja.png'
     }
 }
 function mudarRosa(){
    imgLDFonte = document.querySelector('#imgBotao').src
    imgLampada = document.querySelector('#lampada')
     
     if(imgLDFonte.includes("on")){
        document.querySelector('#lampada').src = './img/lampada-rosa.png'
     }
 }
 function mudarVerde(){
    imgLDFonte = document.querySelector('#imgBotao').src
    imgLampada = document.querySelector('#lampada')
     
     if(imgLDFonte.includes("on")){
        document.querySelector('#lampada').src = './img/lampada-verde.png'
     }
 }
 function mudarVermelho(){
    imgLDFonte = document.querySelector('#imgBotao').src
    imgLampada = document.querySelector('#lampada')
     
     if(imgLDFonte.includes("on")){
        document.querySelector('#lampada').src = './img/lampada-vermelho.png'
     }
 }


//inferno
function mudarImagem(){
    imgLDFonte = document.querySelector('#imgBotao').src
    imgLampada = document.querySelector('#lampada')

    if(imgLDFonte.includes("off")){
        document.getElementById("imgBotao").src = imgLigado
    } else {
        document.querySelector('#lampada').src = './img/lampada-desligada.png'
        document.getElementById("imgBotao").src = imgDesligado
    }
}