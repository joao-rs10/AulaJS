var nome = prompt ('Insirir nome');
var sobrenome = prompt ('Inserir sobrenome');

if ((nome != '') && (sobrenome != '')) {
    alert ("Nome:" + nome + '\nSobrenome: ' + sobrenome);
}
else {
    alert ('Erro ao inserir nome e sobrenome');
}