var nome = "lucas"
function obterNome() {
    var nome = "Jonas"
    console.log(this.nome) //lucas
}

obterNome()
console.log(this.nome) // lucas



var nome = "lucas"
function obterNome() {
    this.nome = "Jonas"
    console.log(this.nome) //Jonas
}

obterNome()
console.log(this.nome) // lucas