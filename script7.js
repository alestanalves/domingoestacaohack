let h1 = document.querySelector('#groger');
let nome = prompt('digite o seu nome: ');
let btnMostrar = document.querySelector('#mostrar');
let btnEsconder = document.querySelector('#esconder');

function mostrar(){
    h1.style.display = 'block';
}
function esconder(){
    h1.style.display = 'none';
}


h1.innerHTML = 'Olá,' + nome;
h1.style.color = 'blue';

btnMostrar.onclick = mostrar;
btnEsconder.onclick = esconder;

// ver no google lista de eventos do JS
// onMouseOver é uma funçao para passar o mouse