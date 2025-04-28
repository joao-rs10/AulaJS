let n1 = prompt ("Insira um número");
let n2 = prompt ("Insira outro número");
let numero1 = parseInt (n1);
let numero2 = parseInt (n2);

function subtracao(numero1, numero2){
    if (numero1 > numero2) {
        return numero1 - numero2;
        
    }
    else {
      return numero2 - numero1;
        
    }
}
alert(subtracao(numero1, numero2))
