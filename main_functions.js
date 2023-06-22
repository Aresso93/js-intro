//le funzioni mi servono a riutilizzare codice che ho già scritto senza doverlo riscrivere
//dico al mio codice di rifare lo script. Sennò normalmente lo fa mentre scende dall'alto al basso e basta. Una volta sola

function square (specialNumber) {
    const result = specialNumber * specialNumber;
    return result;
}

//questa qui sopra è una funzione standard. 

// Function, nome della funzione, tra due parentesi tonde il nome
// e poi il codice della funzione
// Return dice che mi deve mostrare la costante result

const pippo = square (16);

console.log (pippo);

//prima di eseguire qualsiasi cosa, il browser legge tutte le funzioni e invoca la funzione alla riga 15, cioè quella messa alla riga 4

//il return non è obbligatorio

function logUppercase (stringToLog) {
    const upperCaseString = stringToLog.toUpperCase()
    console.log(upperCaseString);
}

logUppercase('viva le funzioni!')

function gentleAllert(){
    alert('caro amico, non vorrei farmi gli affari tuoi, ma sarà il caso che ti metti a studiare!')
}

gentleAllert();

logMultipleTimes('pizza', 100);

//questa funzione qui sopra mi fa printare pizza 100 volte. Guardando nel console log, posso vedere 100 iterazioni di "pizza"

function logMultipleTimes(stringToLog, times){
    for (let i = 0; i < times; i++) {
       console.log(stringToLog);
        
    }
}

function isEven(number){
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

const pluto = isEven(27);

console.log(pluto);

function pow(base, exponent) {
    const result = base ** exponent;
    return result;
}

const paperino = pow (2, 10);

console.log(paperino);

function lastCharUpperCase(selectedSring){
    const char = selectedString [selectedSring.length - 1];
    const lastCharUppercase = char.toUppercase();
}

//pippo length = 5
//01234 4 è indice dell'ultima lettera di Pippo

//clarabella length = 10
//0123456789 indice dell'ultimo = 9

//quello da mettere nelle quadre è sempre la length - 1