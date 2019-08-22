nota1 = Number (prompt('Digite a nota de matématica: '));
nota2 = Number (prompt('Digite a nota de português: '));
media = (nota1 + nota2)/2;

console.log(media);

{
if (isNaN){
    alert('UÉ, O QUE VOCÊ TENTOU FAZER?');
}
if (media >=7 ){
    alert('Aprovado');
}

else if(media>= 5 && media <=6.9){
    alert('A vida te deu uma chance.');
}
else {
    alert('Reprovado');
}
}