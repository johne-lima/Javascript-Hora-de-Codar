// Escreva uma função que receba dois parâmetros (text, flag)

function myFunction(text, flag = "start") {
    // se flag for igual a "start" retorne os 3 primeiros caracteres do parâmetro text
    if (flag === "start") {
        return text.slice(0, 3)
    } 

    // se flag for igual a "end" retorn os 3 ultimos caracteres do parâmetro text
    else if (flag === "end") {
        return text.slice(-3)
    } 

    // se o parâmetro text tiver menos de 3 caracteres, apenas retornar o text
    else if (text.length < 3) {
        return text
    }
}

console.log(myFunction("abcdefg", "start"))
console.log(myFunction("abcdefg", "end"))
console.log(myFunction("ab", "end"))
console.log(myFunction("abcdefg"))