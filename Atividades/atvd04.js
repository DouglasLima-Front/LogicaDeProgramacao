var lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
var lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
var lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("O triângulo é equilátero, pois todos os lados têm o mesmo comprimento.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("O triângulo é isósceles, pois possui dois lados com o mesmo comprimento.");
    } else {
        console.log("O triângulo é escaleno, pois todos os lados têm comprimentos diferentes.");
    }
} else {
    console.log("Os comprimentos fornecidos não formam um triângulo válido.");
}
