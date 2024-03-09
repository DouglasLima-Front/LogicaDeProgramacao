var peso = parseFloat(prompt("Digite seu peso em kg:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));

var imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está no peso normal.");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com excesso de peso.");
} else if (imc >= 30 && imc <= 34.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau I.");
} else if (imc >= 35 && imc <= 39.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau II.");
} else {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau III.");
}
