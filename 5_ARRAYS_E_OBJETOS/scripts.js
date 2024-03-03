// 1 - arrays
const lista = [1,2,3,4,5]
console.log(lista)
console.log(typeof lista)

const itens = ["Johne", true, 14, ["Keyvid"], false]
console.log(itens)

// 2 - Mais sobre arrays
const arr = ["a", "b", "c", "d"]
console.log(arr[0])
console.log(arr[2])
console.log(arr[93])

// 3 - Propriedades
const numbers = [5, 3, 4]
console.log(numbers.length)
console.log(numbers["length"])

const myName = "Johne"
console.log(myName.length)

// 4 - Métodos
const otherNumbers = [1, 2, 3]

const allNumbers = numbers.concat(otherNumbers)
console.log(allNumbers)

const text = "algum texto"
console.log(text.toUpperCase())
console.log(typeof text.toUpperCase())
console.log(text.indexOf("g"))

// 5 - Objetos

const person = {
    name: "Johne",
    age: 20,
    job: "Motorista"
}

console.log(person)
console.log(person.name)
console.log(person.name.length)
console.log(typeof person)

// 6 - Criando e deletando propriedades

const car = {
    engine: 1.0,
    brand: "hyundai",
    model: "hb20",
    km: 23500
}

console.log(car)

car.doors = 4
console.log(car)

delete car.km
console.log(car)

// 7 - Mais sobre objetos
const obj = {
    a: "teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []
}

Object.assign(obj2, obj)
console.log(obj)
console.log(obj2)

// 8 - Conhecendo melhor os objetos
console.log(Object.keys(obj))
console.log(Object.keys(obj2))
console.log(Object.keys(car))

console.log(Object.entries(car))

// 9 - Mutação
const a = {
    name: "Johne"
}

const b = a
console.log(a)
console.log(b)

console.log(a === b)

a.age = 20
console.log(a)
console.log(b)

delete b.age
console.log(a)
console.log(b)

// 10 - Loop em array
const users = ["Johne", "Lucas", "Vini", "Daniel"]
for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário ${users[i]}`)
}

// 11 - push e pop
const array = ["a", "b", "c"]

array.push("d") // adiciona elementos a array
console.log(array)
console.log(array.length)

array.pop() //remevo elementos da array
console.log(array)
const itemRemovido = array.pop()

console.log(itemRemovido)
console.log(array)

array.push("z", "x", "y") // adiciona mais de um elemento

// 12 - shift e unshift
const letters = ["a", "b", "c"]

const letter = letters.shift()
console.log(letter)
console.log(letters)

letters.unshift("p", "q", "r")
letters.unshift("z")
console.log(letters)

// 13 - indexOf e lastIndexOf
const myElements = ["Morango", "Maçã", "Abacate", "Pêra", "Abacate"]
console.log(myElements.indexOf("Maçã"))
console.log(myElements.indexOf("Abacate")) //mesmo resultado
console.log(myElements[2]) // mesmo resultado

console.log(myElements.lastIndexOf("Abacate")) // retorna o ultimo valor mostrado

console.log(myElements.indexOf("Mamão")) // resultado não existente retorna -1
console.log(myElements.lastIndexOf("Mamão")) // resultado não existente retorna -1

// 14 - slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]
const subArray = testeSlice.slice(2, 4) //vai pegar a array do indice dois ao indice 4

console.log(testeSlice)
console.log(subArray) // não altera o array original

const subArray2 = testeSlice.slice(2, 4 + 1)
console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)
console.log(subArray3) // valores não existentes deixa a lista vazia []

const subArray4 = testeSlice.slice(2) // vai pegar os elementos do indice 2 em diante
console.log(subArray4)

// 15 - forEach
const nums = [1, 2, 3, 4, 5]
nums.forEach((numero) => {
    console.log(`O número é: ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "JavaScript"},
    {title: "Terceiro post", category: "Python"},
]

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`)
})

// 16 - includes
const brands = ["BMW", "VW", "Fiat"]
console.log(brands.includes("Fiat")) //verifica se o indice existe, retornando TRUE ou FALSE
console.log(brands.includes("Kia"))

if (brands.includes("BMW")) {
    console.log("Há carros da marca BMW!")
}

// 17 - reverse
const reverseTest = [1, 2, 3, 4, 5]

reverseTest.reverse() //inverte a array
console.log(reverseTest)

// 18 - trim
const trimTest = " testando \n  "
console.log(trimTest)
console.log(trimTest.trim) //remove espaços em brancos e caracteres que não sejam string
console.log(trimTest.trim().length)

// 19 - padStart
const testePadStart = "1"
const newNumber = testePadStart.padStart(4, "0") //adiciona caracteres no inicio da string

console.log(testePadStart)
console.log(newNumber)

const testePadEnd = newNumber.padEnd(10, "0" ) //adiciona caracteres no fim da string

// 20 - split
const frase = "O rato roeu a roupa do rei de roma"
const arrayDaFrase = frase.split(" ") //sera separada em string após o ESPAÇO/ponto e virgula/ ponto ou virgula transformando em array
console.log(arrayDaFrase)

arrayDaFrase.forEach((fra) => {
    console.log(fra)
})

// 21 - join 
const fraseDeNovo = arrayDaFrase.join(" ") // une arrays
console.log(fraseDeNovo)

const itensParaComprar = ["mouse", "teclado", "monitor"]

const fraseDeCompra = `precisamos comprar: ${itensParaComprar.join(", ")}.`
console.log(fraseDeCompra)

// 22 - repeat
const palavra = "Testando "
console.log(palavra.repeat(5)) //repeat é usado para repetir

// 23 - rest operator
const somaInfinita = (...args) => {
    let total = 0

    for(let i = 0; i< args.length; i++) {
        total += args[i]
    }

    return total;
}

console.log(somaInfinita(1, 2, 3))
console.log(somaInfinita(1, 20, 34, 12321, 44232, 42123, 544))

// 24 - for of
const somaInfinita2 = (...args) => {
    total = 0

    for(num of args) {
        total += num
    }

    return total
}

console.log(somaInfinita2(1, 2, 4))
console.log(somaInfinita2(3, 9, 5, 10, 99, 23134))

// 25 - desctructuring em objetos
const userDetails = {
    firstName: "Johne",
    lastName: "Lima",
    job: "Programador"
}

const {firstName, lastName, job} = userDetails
console.log(firstName, lastName, job)

// renomear variaveis
const {firstName: primeiroNome} = userDetails
console.log(primeiroNome)

// 26 - estructuring com arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]

const [veiculoA, veiculoB, veiculoC] = myList
console.log(veiculoA, veiculoB, veiculoC)

// 27 - JSON
const myJson = '{"name": "Johne", "age": 20, "skills": ["PHP", "JavaScript", "Python"]}'
console.log(myJson)
console.log(typeof myJson)

// 28 - JSON para objetos e objeto para JSON
const myObject = JSON.parse(myJson) //parse = transforma JSON em objeto
console.log(myObject)
console.log(myObject.name)
console.log(typeof myObject)

// json invalido
const badJson = '{"name": Johne, "age": 20}'
//const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true
console.log(myObject)

const myNewJson = JSON.stringify(myObject) //stringify = transforma um objeto em JSON
console.log(myNewJson)
console.log(typeof myNewJson)