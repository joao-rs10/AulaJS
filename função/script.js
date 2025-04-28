function verificarPar() {
        let entrada = prompt("Digite um número:");
        let numero = parseInt(entrada);
      
        if (isNaN(numero)) { // -> isNaN significa "is Not a Number"
          alert("Por favor, digite um número válido.");
          return; // -> Esse return interrompe a função.
        }
        if (numero % 2 === 0) {
          alert(numero + " é par.");
        } else {
          alert(numero + " é ímpar.");
        }
      }
      verificarPar();
      verificarPar();
      verificarPar();
    