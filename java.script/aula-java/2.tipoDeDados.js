/*
Tipos de Dados - 

1. String -> Textos.
2. numbers -> Números
3. Boolean -> boleano
4. Objects -> Objetos 
5. Null & Undefined -> são ausencia de algum dado ou informação -- Null-nulo -> Undefined -> indefinido

Estrutura de Dados 

1. Array -> Vetor -> Matriz*/

/*const users = [
  {
    nome: "Rodrigo",
    idade: 25,
    nomeDoConjuge: "Pamela",
    id: null,
  },
  {
    nome: "Aline",
    idade: 30,
    nomeDoConjuge: "tarcio",
    id: null,
  },
]
               0    1   2     posição */
const users = [20, 30, 492]

/*console.log(users[2])*/

users[2] = 489 /* para poder alterar o numero   */

console.log(users) 








/*
  const texto1 = "textos com aspas duplas "
  const texto2 ='textos com aspas simples'
  const texto3 = `textos com a crase` //template literals ou template string

  console.log(texto1)
  console.log(texto2)
  console.log(texto3)
  
const myAge = 30

const myString = `Minha idade é ${myAge}`  //Template literals / Template String

console.log(myString)

     Numbers
const number1 = 32 / 2
const fakeNumber = "32 / 2"

console.log(number1)
console.log(fakeNumber)

* vezes
/ divisão
+ mais
- menos

     Boleanos

false 
true

let variavel = "234234"
01011110000101110010

   Objetos -- E vc pode colocar outros objetos dentro de outros objetos 
   

const name = "Rodrigo Domingos"
const age = 25
const address = "Rua dos Bobos, numero Zero"

const rodrigo = {
  name: "Rodrigo",
  age: 25,
  address: {
       street: "Dos Bobos",
       number: 0,
       city: "São Paulo",
       state: "SP",
       country: "Brasil"
  }
}

/*console.log(rodrigo.address.city)

com o const conseguimos mudar o item da nossa escolha, sem precisar mudar tudo como descrito em baixo


rodrigo.address.number = 1

console.log(rodrigo)

     Null & Undefined

const user = {
  nome: "Rodrigo",
  idade: 30,
  nomeDoConjuge: "Pamela",
  id: null
}

console.log(user.tomate) -> vai dar undefined por que não encontrou o tomate ou não tem mesmo*/



