var numeroSecreto = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;

function iniciarJogo() {
    var palpite = parseInt(prompt("Tente adivinhar o número secreto (entre 1 e 100):"));

    while (palpite !== numeroSecreto) {
        if (palpite < numeroSecreto) {
            alert("O número que você digitou é menor que o número secreto. Tente novamente!");
        } else {
            alert("O número que você digitou é maior que o número secreto. Tente novamente!");
        }
        
        palpite = parseInt(prompt("Tente adivinhar o número secreto (entre 1 e 100):"));
        tentativas++;
    }

    alert("Parabéns! Você acertou o número secreto " + numeroSecreto + " em " + (tentativas + 1) + " tentativas.");
}

iniciarJogo();
