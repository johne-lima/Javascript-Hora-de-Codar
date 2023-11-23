// 1 - Variáveis

let nome = "Johne"
console.log(nome)

nome = "Johne Lima"
console.log(nome)

const idade = 20
console.log(idade)
 

console.log(typeof nome)
console.log(typeof idade)

// Mais sobre variáveis

// let 2teste = "inválido"
// let @2teste = "inválido"

let a = 10, b = 20, c = 30
console.log(a, b, c)

/*const nomecompleto = "Johne Lima"
const nomecompleto = "Johne Keyvid Lima"

console.log(nomecompleto)
console.log(nomecompleto)*/

let _teste = "ok"
let $teste = "ok"

console.log(_teste, $teste)

// 3 - Prompt

const age = prompt("Digite a sua idade?")
console.log(`Você tem ${age} anos`)

// 4 - Alert

alert("Testando")

// 5 - Math 

console.log(Math.max(5, 2, 1, 10)) // retorna o número maior
console.log(Math.floor(5.15)) // arredonda o número para baixo
console.log(Math.ceil(5.14)) //arredonda o número para cima

// 6 - Console

console.error("Erro!!")
console.warn("Aviso!")


// 7 - If

const m = 10

if (m > 10) {
    console.log("m é maior que 5")
}

const user = "João"

if(user === "João") {
    console.log("Olá João!", true)
}

if(user !== "Maria") {
    console.log(false) //
}

// 8 - Else

const loggedIn = false

if(loggedIn) {
    console.log("Está autenticado")
} else {
    console.log("Não está autenticado")
}

const q = 10
const w = 15

if(q > 5 && w > 20) {
    console.log("Números mais altos")
} else {
    console.log("Os números não são mais altos")
}

// 9 - Else if

if(1 > 2) {
    console.log("Teste")
} else if(2 > 3) {
    console.log("Teste2")
} else if(5 > 1) {
    console.log("Agora sim")
}

const userName = "Johne"
const userAge = 20

if(userName === "José") {
    console.log("Bem vindo José!")
} else if(userName === "Johne" && userAge === 20) {
    console.log("Olá Johne, você tem 20 anos")
} else {
    console.log("Nenhuma condição aceita.")
}

// 10 - While 

let p = 0
while (p < 5) {
    console.log(`Repetindo ${p}`)
    p+=1
}


var x = 20
while(a < 50) {
   console.log(a) 
   a+= 2
    
}

// 11 -Do While 

let o = 10

do {
    console.log(`valor de o: ${o}`)
    o--
} while (o < 1)

// 12 - For

for(let t = 0; t < 10; t++) {
    console.log("Repetindo algo...")
}

let r = 10

for(r; r > 0; r= r - 1) {
    console.log(`O r está diminuindo ${r}`)
}

// 13 - Identação

for(let u = 0; u < 10; u++){
    if(u * 2 > 10){
        console.log(`Maior que 10! ${u}`)
    } else {
        if(u / 2 === 0) {
            console.log("Deu 0")
        }
    }
}

// 14 - Break

for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if(g === 12) {
        console.log("O g é 12")
        break
    }
}

// 15 - Continue 

for(let s = 1; s <10; s++) {
    //operador de resto = %
    if(s % 2 === 0) {
        console.log("Número par!")
        continue
    }
    
    console.log(s)
}

// 16 - Switch

const job = "Médico"

switch(job){
    case "Programador":
        console.log("Você é um programador")
        break
    case "Advogado":
        console.log("Você é um advogado")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro")
        break
    default:
        console.log("Profissão não encontrada")
}

// switch errado

const l = 100

switch(l) {
    case 200:
        console.log("L é 200")
    case 100:
        console.log("L é 100")
    case 10:
        console.log("L é 10")
    default:
        ("L não foi encontrado")
}