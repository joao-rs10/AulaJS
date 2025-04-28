//Declaração de variável para armazenar o resultado da soma
var resultado = 0;
//Função que soma dois números e atribui o resultado
function somar(primeiroNumero, segundoNumero) {
     resultado = primeiroNumero + segundoNumero
}
//Função que mostra o resultado no console
function mostrar(mensagem) {
     console.log(mensagem)
}
//Chamamos primeiro para somar e depois para mostrar
somar(6, 3);
mostrar(resultado);
