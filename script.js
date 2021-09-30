const disco1 = document.querySelector('.discoQuatro')
const disco2 = document.querySelector('.discoTres')
const disco3 = document.querySelector('.discoDois')
const disco4 = document.querySelector('.discoUm')
disco1.addEventListener('click',function(){
    console.log('disco1')
})
disco2.addEventListener('click',function(){
    console.log('disco2')
})
disco3.addEventListener('click',function(){
    console.log('disco3')
})
disco4.addEventListener('click',function(){
    console.log('disco4')
})
console.log(disco1)
console.log(disco2)
console.log(disco3)
console.log(disco4)

const torreMeio = document.querySelector('.torre1')
const torreDireita = document.querySelector('.torre2')
const torreEsquerda = document.querySelector('.torre3')
torreMeio.addEventListener('click',function(){
    console.log('torreMeio')
})
torreDireita.addEventListener('click',function(){
    console.log('torreDireita')
})
torreEsquerda.addEventListener('click',function(){
    console.log('torreEsquerda')
})
console.log(torreMeio)
console.log(torreDireita)
console.log(torreEsquerda)
// interceptar click
 function interceptar(evt){
     const div = evt.target
     if(div.tagName === 'DIV'){
         const disco = div.closest('div')
         moverDisco(torreMeio,disco)
         console.log(disco)
     }
 }
// ver funcionalidade mover o disco para torre
function moverDisco(torre,disco){
    torre.appendChild(disco)

}
function moverDisco(torre,disco){
    torre.appendChild(disco)

}
function moverDisco(torre,disco){
    torre.appendChild(disco)

}
// analisar regras do jogo
function condiçaoVitoria(){}
