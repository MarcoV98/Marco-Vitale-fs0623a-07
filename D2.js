/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num1_1 = prompt("Inserisci il primo numero:")
let num2_1 = prompt("Inserisci il secondo numero:")

const risultato_1 = "è il numero più grande"

if(num1_1 > num2_1){
  alert(num1_1 + " " + risultato_1)
}

else if(num2_1 > num1_1){
  alert(num2_1 + " " + risultato_1)
}

else {
  alert("I numeri sono uguali")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const num1_2 = 5
let num2_2 = parseInt(prompt("Inserisci il numero"))

if(!(num1_2 == num2_2)) {
  alert("not equal")
}

else {
  alert("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num1_3 = parseInt(prompt("Inserisci il numero:"))
let risultato3 = (num1_3 % 5 === 0)

if(risultato3) {
  alert("Il numero è divisibile")
}

else {
  alert("Il numero non è divisibile")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num1_4 = parseInt(prompt("Inserisci il primo numero:"))
let num2_4 = parseInt(prompt("Inserisci il secondo numero:"))

if(num1_4 === 8 || num2_4 === 8 || num1_4 + num2_4 === 8 || num1_4 - num2_4 === 8) {
  alert("true")
}

else {
  alert("false")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart = parseInt(prompt("A quanto ammonta il tuo carrello?"))
let costoSpedizione = totalShoppingCart + 10


if(totalShoppingCart >= 50) {
  alert("Il tuo costo totale è " + totalShoppingCart + "." + " Hai diritto alla spedizione gratuita!")
}

else {
  alert("Il tuo costo totale è " + costoSpedizione)
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart2 = parseInt(prompt("Hai diritto al 20% di sconto! A quanto ammonta il tuo carrello?"))
let ShoppingCartSconto = totalShoppingCart2 - (totalShoppingCart2 * 20 / 100)
let costoSpedizione2 = totalShoppingCart2 + 10

if(totalShoppingCart2 >= 50) {
  alert("Il tuo costo totale è " + ShoppingCartSconto + "." + " Hai diritto alla spedizione gratuita!")
}

else {
  alert("Il tuo costo totale è " + costoSpedizione2)
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num1_7 = prompt("Primo numero")
let num2_7 = prompt("Secondo numero")
let num3_7 = prompt("Terzo numero")

if(num1_7 >= num2_7 && num1_7 >= num3_7 && num2_7 >= num3_7) {
  console.log("I numeri in ordine sono " + num1_7 + " " + num2_7 + " "+ num3_7)
}

else if(num1_7 >= num2_7 && num1_7 >=  num3_7 && num3_7 >= num2_7) {
  console.log("I numeri in ordine sono " + num1_7 + " " + num3_7 + " " + num2_7) 
}

else if(num2_7 >= num1_7 && num2_7 >= num3_7 && num1_7 >= num3_7) {
  console.log("I numeri in ordine sono " + num2_7 + " " + num1_7 + " "+ num3_7)
}

else if(num2_7 >= num1_7 && num2_7 >= num3_7 && num3_7 >= num1_7 ) {
  console.log("I numeri in ordine sono " + num2_7 + " " + num3_7 + " " + num1_7)
}

else if(num3_7 >= num1_7 && num3_7 >= num2_7 && num1_7 >= num2_7) {
  console.log("I numeri in ordine sono " + num3_7 + " " + num1_7 + " " + num2_7)
}

else {
  console.log("I numeri in ordine sono " + num3_7 + " " + num2_7 + " " + num1_7)
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num1_8 = prompt("Il tuo valore")
console.log(typeof num1_8)


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let num1_9 = parseInt(prompt("Inserisci il numero:"))
let risultato9 = (num1_9 % 2 === 0)

if(risultato3) {
  alert("Il numero è pari")
}

else {
  alert("Il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
  let val = 7
  if (val < 5) {
    console.log("Meno di 5")
  } 
  else if (val < 10) {
    console.log("Meno di 10")
  } 
  else {
    console.log("Uguale a 10 o maggiore")
  }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me)

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
/* SCRIVI QUI LA TUA RISPOSTA */

me.splice(3) ;
console.log(me)


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

//const numeri = []

const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeri)



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

numeri[9] = 100;
