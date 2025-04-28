let primeiroNumero = prompt("Digite um numero");
let segundoNumero = prompt("Digite o segundo numero");
let operacao = prompt("Qual operação desejada? +, -, * ou /");


function calculadora(primeiroNumero, segundoNumero, operacao){
    if (operacao == "+") {
        return primeiroNumero + segundoNumero;

    }
    else if (operacao == "-") {
        return primeiroNumero - segundoNumero;
    }
    else if (operacao == "*") {
        return primeiroNumero * segundoNumero;
    }
    else if (operacao == "/") {
        return primeiroNumero / segundoNumero;
    }
    else {
        return 0;
    }    
}
