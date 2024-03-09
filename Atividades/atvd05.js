var valorSaque = parseInt(prompt("Digite o valor que deseja sacar:"));

if (valorSaque % 10 === 0) {
    console.log("Saque realizado com sucesso.");
} else {
    console.log("Valor inválido. Digite um valor múltiplo de 10.");
}
