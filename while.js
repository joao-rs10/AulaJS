let numero = parseInt(prompt("Inserir numero")); // Exemplo de número para calcular o fatorial
let resultado = 1;

if (numero < 0) {
    console.log("Não existe fatorial para números negativos");
} else {
    while (numero > 1) {
        resultado *= numero; // Multiplica o resultado pelo número atual
        numero--; // Decrementa o número
    }
    console.log(resultado); // Exibe o fatorial
}