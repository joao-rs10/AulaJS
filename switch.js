let entrada = prompt("Inserir um nome");
//Repetimos até que "sair" seja inserido.
while (entrada != "sair") {
    switch (entrada) {
        case "ANA":
            alert("OLÁ, ANA");
            break;
        case "JOÃO":
            alert("OLÁ, JOÃO");
            break;
        default:
            alert("QUEM É VOCÊ?")
            break;
    }
    entrada = prompt("Inserir um nome");
}
