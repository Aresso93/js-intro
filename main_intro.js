// // console.log('hello world')

// // //javascript riconosce le stringhe fatte con virgolette singole 'così', virgolette doppie "così" o queste `così` che si fanno con ALT+96 
// // //noi useremo soprattutto le virgolette singole e, a volte, quelle storte di ALT+96. E appunto, il nome del dato è STRING
// // //riconosce anche numeri interi, numeri decimali col punto, numeri negativi ecc. chiamati NUMBER
// // //riconosce anche i BOOLEAN che sono true/false
// // //questi tre sono i principali
// // //variabile: "scatola" dentro la quale può essere messo un valore. Tre modi per dichiarare le variabili, messe in seguito:

// // //VARIABILI CON LET----------------------------------------------------------------------------------------

// // let pippo = 5; //crea una scatola di nome pippo che contiene 5

// // console.log('pippo')
// // console.log(typeof pippo);
// // //gli ho dato valore 5, per cui guardando la console della pagina web printerò un 5

// // pippo = 'viva il caffè!';
// // console.log(typeof pippo);
// // //qui gli ho cambiato valore in una stringa, e ora mi printa la stringa "viva il caffè". Pippo passa da NUMBER a STRING
// // //il comando console gli ha fatto printare il tipo di pippo nella console, ovvero "number" seguito da "string"

// // //VARIABILI CON CONST--------------------------------------------------------------------------------------

// // // const pluto = 12;
// // // //const è una costante, pertanto non può variare. Simuliamo sotto un conflitto. Se scrivo che è uguale a 23 
// // // console.log(pluto);

// // // const pluto = 23;

// // //se metto questo il codice si rompe e ci dà un messaggio di errore che vediamo dal log
// // //let permette al contenuto della sua "scatola" di cambiare, mentre const no

// // //VARIABILI CON VAR---------------------------------------------------------------------------------------- 
// // //Andrea ci taglia le mani se le usiamo, quindi evitiamo

// // var paperino = true;

// // console.log(paperino);

// // paperino = -123;

// // console.log(paperino);

// // //con questo codice la console ci printa tranquillamente i suoi valori. Ma vediamo la differenza con let sotto

// // //differenza con let

// // // topolino = 5;

// // // let topolino;

// // //visto che la pagina legge il codice dall'alto verso il basso, se do un valore a Topolino prima di aver definito che Topolino esiste, il codice non lo può esprimere

// // // minnie =5;

// // // var minnie;

// // // console.log(minnie);

// // //con var invece funziona, per cui posso usare variabili prima di averle create


// // let qui = 5 + 9;
// // let qua = 5 * 9;
// // let quo = 5 / 9;

// // console.log(qui);

// // //posso usare le 4 operazioni fondamentali: +, -, * e / (qui ho printato solo qui, ma nella console mi printano tutte il risultato dell'operazione)

// // let paperone = 5 ** 3; //questo fa l'elevamento a potenza

// // console.log(paperone);

// // let basettoni = 6 % 2; //questo fa l'operazione modulo, vale a dire che deve printare il resto della divisione tra 6 e 2 (in questo caso 0)
// // //per esempio posso usarlo per capire se un numero è divisibile per un altro o se è pari o dispari. Se ha resto 0, è pari

// // let ilNumeroPiuPiccolo = -Infinity;
// // let ilNumeroPiuGrande = Infinity;

// // //convenzioni di scrittura delle variabili: camel case, vale a dire lettera minuscola e poi ogni parola nuova ha l'iniziale maiuscola. Inoltre Javascript è case sensitive
// // //eventuali altre operazioni matematiche sono possibili con la libreria math. Osserviamo come si fa la radice quadrata:

// // const paperoga = Math.sqrt(16); //quando invoco la libreria, va SEMPRE con la maiuscola
// // //Libreria.nomefunzione(quello che devo elaborare con la funzione)

// // console.log (paperoga);

// // const rockerduck = 'pippo' / 3;

// // console.log(rockerduck);

// //questa cosa, se la printo, mi dà "NaN", vale a dire "not a number"

// //Tipi di base------------------------------------------------------------------------

// //blabla la STRINGA

// //35 789 -5611 i NUMBER

// //true false il BOOLEAN

// //TIPI STRANI------------------------------------------------------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// //Null

// //NaN, Not a Number

// //undefined

// //Boolean---------------------------------------------------------------------------------------------------------------------------------

// const etabeta = true;

// console.log (etabeta);

// //! esprime l'operazione not. !true => false;
// //!false => true

// console.log (!etabeta); //questo mi printa "false" perché gli ho detto di printare l'opposto di etabeta (che era true)

// // && esprime "and"                        true && true => true
// //tutti gli altri casi mi rendono "false": true && false => false
// //                                         false && true => false
// //                                         false && false => false   

// const gastone = false;

// console.log(etabeta && gastone); //questo ci printa true && false, quindi false

// console.log(etabeta && !gastone); //questo ci printa true && non-false, quindi true && true, quindi true


// // || questo esprime "or", che è vero quando almeno uno dei due è vero

// //          true || true => true
// //          true || false => true
// //          false || true => true
// //          false || false => false

// console.log(etabeta || gastone); //questo printa true perché etabeta è vero e gaston false, quindi true || false, quindi false
// console.log(!etabeta || gastone); //questo printa false perché !etabeta è false e gastone è false, quindi false || false, quindi false

// console.log((etabeta || gastone ) && etabeta); //la prima parentesi è true, con la && della seconda (che è true), viene true and true, dunque true
//             //true   || false     && true
// //le parentesi si leggono come nelle espressioni matematiche

// String--------------------------------------------------------------------------------------------------------------

// const orazio = 'io adoro javascript';

// //si inizia a contare da 0, non da 1. Per cui la I è 0, la O è 1, lo spazio è 2 ecc.

// console.log(orazio[0]); //questo mi printerà l'elemento zero, appunto. Ovvero la I di "io". Gli spazi VANNO CONTATI. I numeri dentro una stringa sono anche loro caratteri, non numeri
// //la J di javascript qui è 9, per esempio

// const clarabella = 'perché non sono sano di mente';

// //posso concatenare le due stringhe e printare la frase intera "io adoro javascript perché non soono sano di mente" senza lo spazio

// console.log(orazio + clarabella); //se voglio mettere lo spazio posso scrivere uno spazio dopo "javascript" o prima di "perché" oppure scrivere il comando come (segue sotto)
// // console.log(orazio + ' ' + clarabella);

// const aladin = 27;

// console.log(orazio + 27); //se sommo una stringa e un numero, l'operazione di concatenazione vince su quella di somma e, invece di printare un NaN, mi printerà "javascript27"

// console.log(clarabella.length); //questo ci printa il numero di caratteri di clarabella. Length = la lunghezza della stringa

// console.log(clarabella.toUpperCase); //questo ci printa la stringa "perché non sono sano di mente" ma in caps

//undefined----------------------------------------------------------------------------------------------

// const macchiaNera;
//                     //non posso fare così e mettere const con il suo nome e il suo valore in due righe separate
// macchianera = 5;

// let paperinik;
//                     //con il lett lo posso fare, invece
// paperinik = 12;

// //se io scrivo il log di paperinik prima di avergli detto che = 12, mi printerà undefined. Undefined è una "scatola vuota"

// //IN JAVASCRIPT L'ORDINE DELLE COSE CHE SCRIVO IN VERTICALE È IMPORTANTE!!!

// paperinik = undefined; //questo però non si fa mai, perché per definire i valori vuoti c'è null

// //se metto in linea il log di paperinik, poi dico che è undefined e faccio di nuovo il log, mi printa prima 12 e dopo undefined

// paperinik = null;

// console.log(paperinik); //buona pratica: mettere null per indicare che qualcosa è vuoto di proposito, mentre undefined è una scatola vuota ma non necessariamente volutamente

//operatori di confronto------------------------------------------------------------------------------------------------------------------------------------------------------

// const nonnaPapera =12;

// const ciccio = 24;

// const joseCarioca = '12';

// console.log(ciccio > nonnaPapera); //questo mi printa che effettivamente è vero che 24 (Ciccio) > 12 (Nonna Papera)

// // > maggiore
// // < minore
// // >= maggiore o uguale
// // <= minore o uguale

// //!== (diverso)
// //esiste anche diverso semplice, cioè !=, ma non lo useremo MAI

// console.log(ciccio !== nonnaPapera); //questo mi printa true perché è vero che sono diversi

// // == (uguale con cast)
// // === (uguale stretto)

// console.log(nonnaPapera==joseCarioca); //questo è true //ma non la useremo mai perché sennò Andrea ci picchia a sangue
// console.log(nonnaPapera===joseCarioca); //questo è false

//mettendo due volte uguale (==) converte la stringa in un numero
//mettendo tre volte uguale (===) non converte la stringa bensì dà false perché una stringa e un numero non sono confrontabili



// corto circuito degli operatori

// let biancaNeve;

// let ariel = 'ciao';

// console.log(biancaNeve || ariel);  //questo mi printa "ciao". Cosa succede? or (||) va a guardare il primo e vede se mi serve come parametro. Ma siccome
// //biancaneve non ha un valore, non può printarlo e guarda il secondo. Se però do a biancaNeve un valore (es. spaghetti) e faccio il log, printa "spaghetti" perché mi
// //printa il primo disponibile

// let cenerentola = biancaNeve || ariel;

//se lo faccio con due cose senza un valore assegnato, ottengo "undefined"

// alert e prompt----------------------------------------------------------------------------------------------------------------------------------------------------

// alert('ciao a tutti!'); //questo ci apre un alert

// const elsa = prompt('come ti chiami?'); //quello che mi printa il log è ciò che è stato chiesto dal prompt

// console.log(elsa);

//if else control flow

// const mulan = prompt('dimmi un numero');


// // if (mulan < 50) {
// //     console.log('numero piccolo');    
// // }                            //quello che mettiamo tra le parentesi tonde della condizione, deve essere qualcosa che si può valutare con un boolean

// // else {
// //     console.log('numero grande');
// // }    


// // console.log('fine del programma');

// //se il booleano è true, succede la cosa delle parentesi graffe. Nel caso sopra mi printa "numero piccolo". Sennò mi printa "fine del programma"

// if (mulan % 2 === 0) {
//     alert('hai inserito un numero pari');
// } 
// else {
//     console.log('hai inserito un numero dispari') //questo quindi mi printa una cosa se ho inserito un numero pari e un'altra se ho messo un numero dispari
// }

// const jasmine = prompt ('dimmi un numero');

// const isJasminDivisibleBy3 = jasmine % 3 === 0;

// const isJasminDivisibleBy5 = jasmine % 5 === 0;

// if (isJasminDivisibleBy3 && jasmine % 5 === 0) {                       //questo if dice che il numero jasmine deve essere divisibile per 3 E per 5 al tempo stesso
//     alert('FIZZBUZZ')
// }
// else if(isJasminDivisibleBy3) {
//     alert ('FIZZ')
// }
// else if (isJasminDivisibleBy5) {
//     alert ('BUZZ')
// }
// else  {                       //questo ultimo else non deve essere else if perché non è una conseguenza degli altri sopra, bensì un caso indipendente in cui non è nessuna delle cose sopra
//     alert(jasmine);
// } 

//se avessi avuto 3 if consecutivi senza gli else, avremmo avuto tanti alert a seconda del numero di condizioni soddisfatte
//per cui un numero come 15 avrebbe triggerato tutti e tre gli alert in sequenza


// switch control flow -----------------------------------------------------------------------------------------------------------------------------

const rapunzel = prompt ('inserisci FIZZ, BUZZ O FIZZBUZZ');

switch (rapunzel) {
    case 'FIZZ':
        alert('vuoi un numero divisibile per tre');
        break;
    case 'BUZZ':
            alert('vuoi un numero divisibile per cinque');
            break;
    case 'FIZZBUZZ':
        alert('vuoi un numero divisibile per tre e per cinque');
        break;
    default:
        alert('hai sbagliato ad inserire la parola');
        break;
}

//questo è un modo alternativo per fare FIZZBUZZ

//se togliamo i break (l'ultimo si può lasciare), ci dà di nuovo tutti gli alert in ordine da sopra a sotto