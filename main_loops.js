//con i loops possiamo ripetere delle cose con i cicli, appunto

//CICLO WHILE----------------------------------------------------------------------------------------------------------------------------------------------------

// let indice = 0;

// //while è come se fosse un "finché" più che un mentre

// while (indice < 10) {
    
//     console.log('sono un\'istruzione che deve essere ripetuta')

//     // indice = indice + 1; //questa cosa di fare x = x + 1 è abbastanza comune

//     // indice += 1; //stessa cosa di sopra ma con sintassi più compressa. Vuol dire "a ogni giro, aggiungi 1". E l'operazione che metto dipende dall'operatore. Posso dirgli di aggiungere, sottrarre, moltiplicare o dividere per 1

//     indice++; //questa è specifica per aggiungere 1 ogni volta (esiste anche indice--, che è per diminuire di 1 ad ogni ciclo)
// }

//il loop sopra ci dice che finché una determinata condizione non ci dà il risultato true, continua a loopare

//facciamo un while per farci printare tutti i numeri pari minori di 100

// let indice = 0;

// while (indice < 100) {

//     if (indice % 2 === 0)

//     console.log(indice);

//     indice++;

// }

//vediamo dei cicli strani di while

// while (true) {

//     const input = prompt ('scrivi una frase o scrivi FINE per terminare'); //case sensitive, per cui l'utente deve scriverlo maiuscolo

//     if (input === 'FINE') {
        
//         break; //break interrompe il ciclo forzatamente

//     } else {
//         // alert('la lunghezza della frase inserita è di ' + input.length + ' caratteri');
//         alert (`la lunghezza della frase inserita è di ${input.length} caratteru`); //il simbolo del dollaro dice a quello che è contenuto nelle parentesi va messo lì.
//         //si può fare al posto della concatenazione, ma funziona soltanto se uso back tick e non '' per la stringa
//     }
    
// }


//CICLO DO WHILE-------------------------------------------------------------------------------------------------------------------------------------------------------------

// let indice = 0;

// do {
    
//     console.log('sono un\'istruzione che deve essere ripetuta')

//     indice++

// } while (indice < 10);

//questa è la prima funzione di questo codice ribaltata
//Prima ci fa il log, poi guarda il numero di indice e se è venuto 10 si ferma
//la differenza è che se il ciclo partisse già da 10, almeno una volta farebbe il log. Col ciclo di prima, invece, con l'indice che parte da 10, non farebbe il log nemmeno una volta

//CICLO FOR-----------------------------------------------------------------------------------------------------------------------------------------------------

// for (let index = 0; index < 10; index++) {  //questa è una versione molto complessa del nostro ciclo while iniziale
   
//     console.log('sono un\'istruzione che deve essere ripetuta');
    
// }

//se vediamo gli elementi sono gli stessi. Nell'ordine, prima controlla la variabile index. Se è minore di 10 come avevamo messo prima, fa l'incremento (due +, come abbiamo visto, per indicare +1)

// for (let index = 0; index < 100; index += 2) {
//     console.log ('sono un numero pari e sono:' + index);
// }

//al primo giro è 0, poi lo aumenta di 2 (lo 0 è pari per convenzione) e così via fino ad arrivare a 100

// for (let index = 0; index < 100; index++) {

//     if (index < 50) {
//         console.log(index * 2);
//     }
    
//     else {
//         console.log(index / 2);
//     }

// }

//prima mi fa tutti i numeri fino a 50 seguendo l'if, una volta finito l'if fa l'else. La richiesta è di stampare i numeri minori di 50 dopo averli moltiplicati
//per due, mentre di dividere per due quelli maggiori di 50.


//ciclo for per scrivere i numeri da 100 a 0

// for (let index = 100; index >= 0; index--) {              //questo mi printa tutti i numeri da 100 a 0
// console.log(index);
    
// }

//ciclo da 100 a 0 che scriva "pari" per i numeri pari e "dispari" per i numeri dispari

// for (let i = 100; i >=0; i--) {
    
//     if (1 % 2 ===0) {
//         console.log ('pari');
//     }
    
//     else {
//         console.log ('dispari');
//     }

// }

// for (let i = 100; i >= 0; i--) {

//     if (i % 2 === 0) {
//         console.log ('pari', i);
//     } else {
//         console.log ('dispari', i);
//     }
    
// }



//stampiamo questa stringa carattere per carattere

// const paperone = prompt ('scrivi una frase');

// for (let i = 0; i < paperone.length; i++) {
    
//     const char = paperone [i];

//     console.log (char);         //questo mi stamperà, uno per uno, i caratteri di "stringa di prova"
// }

//CICLI NESTATI---------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 0; i < 10; i++) {                                    //per fare n dimensioni, uso n cicli. Qui stiamo facendo un'ipotetica griglia
//     for (let j = 0; j < 10; j++) {                                //la mia griglia/tabella qui ha 10 righe e 10 colonne
        
//         console.log('riga: ' + i + ', colonna: ' + j);
//     }
    
// }





//ESERCIZI CAPITOLO 2 LIBRO-----------------------------------------------------------------------------------------------------

//let startingString = '#'
//for (let i = 0; i < 7; i++) {
 
//console.log(startingString);
//startingString = startingString + '#'

// }

// let startingString2 = '#';

// while (startingString2.length < 8) {
//     console.log (startingString2);
//     startingString2 = startingString2 + '#';         //metodo alternativo per fare l'esercizio
// }


//CAPITOLO 2 ESERCIZIO 2---------------------------------------------------------------------------------------------------------------------------------------------

// for (let i = 1; i <= 100; i++) { //qui potevo mettere anche < 101 invece di <=100
    
//     if (i % 3 === 0 && i % 5 === 0) { //la condizione più specifica e difficile da soddisfare tendiamo a metterla per prima
//         console.log('FIZZBUZZ');
//     } 
//     else if (i % 3 === 0) {
//         console.log('FIZZ');
//     }
//     else if (i % 5 === 0) {
//         console.log("BUZZ");
//     }
    
//     else {
//         console.log (i);
//     }

// }



// CAPITOLO 2 ESERCIZI DELLA SCACCHIERA-------------------------------------------------------------------------------------------------------------------------

//VERSIONE EASY

// for (let i = 0; i < 8; i++) {
    
//     if (i % 2 === 0) {
//         console.log(' # # # #')
//     }

//     else {
//         console.log('# # # # ')
//     }

// }

//questo sopra ci stampa la stringa che volevamo, ma non è una stringa sola come invece chiedeva il task


//  let chessboard = ' '; //qui ho fatto una variabile vuota perché mi serviva per "scriverci dentro"

// for (let i = 0; i < 8; i++) {

//     if (i % 2 === 0) {
//     chessboard = chessboard + ' # # # #\n'
//      }

//     else {
//         chessboard = chessboard + '# # # #\n'
//     }

// }

// console.log (chessboard);

//VERSIONE HARD
// la faremo col loop doppio

let chessboard ='';
const size = 8;                                            // con questo scheletro farà sempre una tabella con pari e dispari uguali, a livello di pattern.
                                                           //nelle coordinate pari pari e dispari dispari, avrò lo spazio (vedi foto mia), mentre alle coordinate pari dispari o dispari pari, ci sarà l'asterisco

for (let i = 0; i < size; i++) 

{
    
    for (let j = 0; j < size; j++) 
    
    {
        
        if (i % 2 === 0) 
        
        {
            
            if (j % 2 === 0) {
                chessboard = chessboard + ' ';
            } else {
                chessboard = chessboard + '#';
             }
        }

        else {

            if (j % 2 === 0) {
            
                chessboard = chessboard + '#';
                } else {
                chessboard = chessboard + ' ';
                }
        }
         
    }; 
chessboard = chessboard + '\n'
} 
console.log (chessboard +'\n')


        //se i è pari {
            //se j è pari {
              //aggiungo a chessboard uno spazio  
            //}
            //altrimenti aggiungo a chessboard un cancelletto
        //}
        //altrimenti (se i è dispari, dunque)
        // se j è pari {
            //aggiungo un cancelletto
            //altrimenti {
                //aggiungo uno spazio
            //}
        //}
    
    //aggiungo a chessboard uno \n
 


    // for (let i = 0; i < size; i++) {
    //     for (let j = 0; j < size; j++) {
    //         if (i%2===0 && j%2===0) {
    //             scacchiera += '#'
    
    //          }
    //         if (i%2===1 && j%2===1) {
    //             scacchiera += 'f'
    //         }
    //          else {
    //             scacchiera += '0'
    
    //          }
    //     }
    // }