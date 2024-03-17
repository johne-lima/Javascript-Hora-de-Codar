// 1 - movendo-se pelo DOM
console.log(document.body)

console.log(document.body.childNodes)
console.log(document.body.childNodes[1])
console.log(document.body.childNodes[1].childNodes)
console.log(document.body.childNodes[1].childNodes[1].textContent)

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li")
console.log(listItens)

// 3 - selecionando por id
const title =  document.getElementById("title")
console.log(title)

// 4 - selecionando por class

const products = document.getElementsByClassName("product")
console.log(products)

// 5 - selecionando os elementos por CSS 
const productsQuery = document.querySelector(".product")
console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")
console.log(mainContainer)

// 6 - insertBefore
const p = document.createElement("p")

const header = title.parentElement // vai acessar o elemento pai
header.insertBefore(p, title)

// 7 - appendChild
const navLinks = document.querySelector("nav ul")
const li = document.createElement("li")
navLinks.appendChild(li)

// 8 - replaceChild
 const h2 = document.createElement("h2")

 h2.textContent = "Meu novo título!"

 header.replaceChild(h2, title) // o replaceChild vai substituir um elemento criado pelo outro

 const p1 = document.createElement("p") // teste
 p1.textContent = "Substituido" // teste
 header.replaceChild(p1, p) // teste

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a") //querySe pega o primeiro elemento

firstLink.setAttribute("href", "https://google.com.br") 
console.log(firstLink.getAttribute("href"))

firstLink.setAttribute("target", "_blank")

// 11 - altura e largura
const footer = document.querySelector("footer")
console.log(footer.offsetHeight) 
console.log(footer.offsetWidth)

console.log(footer.clientWidth)
console.log()

// 12 - posição do elemento
const product1 = products[0]
console.log(product1.getBoundingClientRect())

// 13 - css com js
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "#111"
mainContainer.style.paddingBottom = "15px"

// 14 - alterando estilos de varios elementos
for(const li of listItens) {
    li.style.backgroundColor = "red"
}