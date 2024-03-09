var dataNascimento = prompt("Digite sua data de nascimento no formato DD/MM/AAAA:");

var dataAtual = new Date();
var anoAtual = dataAtual.getFullYear();
var mesAtual = dataAtual.getMonth() + 1;
var diaAtual = dataAtual.getDate();

var partesDataNascimento = dataNascimento.split('/');
var diaNascimento = parseInt(partesDataNascimento[0]);
var mesNascimento = parseInt(partesDataNascimento[1]);
var anoNascimento = parseInt(partesDataNascimento[2]);

var idade = anoAtual - anoNascimento;
if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    idade--;
}

if (idade >= 18) {
    console.log("Você tem " + idade + " anos. Você é maior de idade.");
} else {
    console.log("Você tem " + idade + " anos. Você é menor de idade.");
}
