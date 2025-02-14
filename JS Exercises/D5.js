/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
pets.forEach((animal) => {
  console.log("Animal:" + " " + animal)
})

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
const pets1 = ['dog', 'cat', 'hamster', 'redfish']
pets1.sort()
console.log(pets1)

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const pets2 = ['dog', 'cat', 'hamster', 'redfish']
pets2.reverse()
console.log(pets2)

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
const pets3 = ['dog', 'cat', 'hamster', 'redfish']
const firstPet = pets3.shift()
pets3.push(firstPet)
console.log(pets3)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach((kuruma) => {
  kuruma.licencePlate = "turbo" 
})
console.log(cars) // "kuruma" non è una parolaccia >_<'. Significa "automobile" in giapponese (ho studiato lingue orietali, quindi sono sicura al 100% ＾∇＾) 

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const cars1 = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars1.push({
  brand: 'Suzuki',
  model: 'Ignis',
  color: 'rosso',
  trims: ['speed', 'sporty', 'comfort']
})

cars1.forEach((kuruma1) => {
  kuruma1.trims.pop()
})

console.log(cars1)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const cars3 = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars1.push({
  brand: 'Suzuki',
  model: 'Ignis',
  color: 'rosso',
  trims: ['speed', 'sporty', 'comfort']
})

const justTrims = []

cars.forEach((kuruma3) => {
  justTrims.push(kuruma3.trims[0])
})

console.log(justTrims)


/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

const cars4 = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars4.forEach((kuruma4) => {
  if (kuruma4.color[0].toLowerCase() === "b"){
    console.log("Fizz")
  } else {
    console.log("Buzz")}
}) 

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let i = 0
while(numericArray[i] < 32) {
  console.log(numericArray[i], i++)
}


/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const alphabet = "alfabeto italiano"

const newArray = charactersArray.map(lettera => {
  switch(lettera) {
     case "a": return 1
     case "b": return 2
     case "c": return 3
     case "d": return 4
     case "e": return 5
     case "f": return 6
     case "g": return 7
     case "h": return 8
     case "i": return 9
     case "j": return 10
     case "k": return 11
     case "l": return 12
     case "m": return 13
     case "n": return 14
     case "o": return 15
     case "p": return 16
     case "q": return 17
     case "r": return 18
     case "s": return 19
     case "t": return 20
     case "u": return 21
     case "v": return 22
     case "w": return 23
     case "x": return 24
     case "y": return 25
     case "z": return 26
    }

})

console.log(newArray)
