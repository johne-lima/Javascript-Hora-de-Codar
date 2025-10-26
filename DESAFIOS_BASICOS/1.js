// Escreva uma função que receba 6 parâmetros

function parameters(a,b,c,d,e,f) {
    // faça a soma de a + b
    let soma = a + b 

    // o resultado da soma, subtraia o valor de c
    let subtracao = soma - c 

    // o resultado da subtração, multiplique por d e faça a divisão por e
    let multi = subtracao * d
    let div = multi / e

    // e para finalizar, faça o resultado elevado à potência de f.
    let potencia = div ** f
    let resultado = potencia
    return resultado
}

console.log(parameters(6,5,4,3,2,1))
console.log(parameters(6,2,1,4,2,3))
console.log(parameters(2,3,6,4,2,3))