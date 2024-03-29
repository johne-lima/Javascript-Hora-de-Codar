// 1 - var, let e const
var x = 10
var y = 15

if (y > 10) {
    var x = 5
    console.log(x)
}
console.log(x)

let a = 10
let b = 15

if(b > 10) {
    let a = 5
    console.log(a)
}
console.log(b)

// 2 - arrow function
const sum = function(a,b) {
    return a + b
}

const arrowSum = (a,b) => a + b

console.log(sum(5,5))
console.log(arrowSum(6,6))

const greeting = (name) => {
    if(name) {
        return `Hello ${name}`
    } else {
        return "Hello"
    }
}

console.log(greeting("Johne"))
console.log(greeting())

const user = {
    name:"Jk",
    sayUserName() {
        setTimeout(function() {
            console.log(this)
            console.log(`username: ${this.name}`)
        },1000)
    }
}

user.sayUserName()

// 3 - filter
const arr = [1,2,3,4,5,6]

const highNumbers = arr.filter((n) => { 
    if(n >- 3)
    return n
})

console.log(highNumbers) // filtrou a array tirando os numeros menores

const users = [
    {name: "Johne", avaliable: true},
    {name: "Joao", avaliable: false},
    {name: "Maria", avaliable: false},
    {name: "Josias", avaliable: true},
    {name: "Danone", avaliable: true},
]

const avaliableUsers = users.filter((user) => user.avaliable)

console.log(avaliableUsers) // vai filtrar só os users disponiveis

// 4 - map
const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"},
]

products.map((product) => {
    if(product.category === "Roupas") {
        product.onSale = true
    }
})

console.log(products) // vai mostrar os protudos que estão com promoção

// 5 - template literals
const userName = "Johne"
const age = 20

console.log(`O nome do usuário é: ${userName} e ele tem ${age} anos.`)

// 6 - destructuring
const fruits = ["Maçã", "Mamão", "Laranja"]

const [f1, f2, f3] = fruits

console.log(f1, f2, f3)

const productDetais = {
    name:"Mouse",
    price: 39.99,
    category: "Periferico",
    color:"Cinza"
}

const {name: productName, price, category, color} = productDetais

console.log(`O nome do produto é ${productName}, ele custa R$${price}, e é da cor ${color}`)

// 7 - spread operator
const a1 = [1,2,3]
const a2 = [4,5,6]

const a3 = [...a1, ...a2] //mescla array
console.log(a3)

const a4 = [0, ...a3, 7] //mescla e adiciciona
console.log(a4)

const carName = {name: "Gol"}
const carBrand = {brand: "VW"}
const otherInfos = {km: 100000, price: 49999}

const car = {...carName, ...carBrand, ...otherInfos}

// 8 - classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWithDiscount(discount) {
        return this.price * ((100 - discount) / 100)
    }
}

const shirt = new Product("camisa gola v", 20)
console.log(shirt)

console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(15))

// 9 - herança
class ProductWithAtttributs extends Product {
    constructor(name, price, colors) {
        super(name, price)
        this.color = colors
    }

    showColors() {
        console.elog("As cores são:")
        this.color.forEach(color => {
            console.log(color)
        });
    }
}

const hat = new ProductWithAtttributs("Chapéu", 29.99, ["Preto", "Amarelo", "Verde"])

console.log(hat)
console.log(hat.name)

hat.showColors()

