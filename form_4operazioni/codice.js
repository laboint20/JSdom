
// Recupera i riferimenti agli elementi HTML per i due campi di input 'txt_a' e 'txt_b'.
let a = document.getElementById('txt_a');
let b = document.getElementById('txt_b');
// Questa funzione imposta il focus sul campo di input 'a'.

function canc() {
    a.focus();
}
// Questa funzione imposta il focus sul campo di input 'txt_a' quando la finestra si carica completamente.
window.onload = a.focus();
// Questa funzione esegue i calcoli quando l'utente preme il pulsante di calcolo.
function calcola() {
    // Recupera i valori inseriti nei campi di input e li converte in numeri.
    let num1 = parseFloat(a.value);
    let num2 = parseFloat(b.value);
    // Recupera l'elemento HTML dove mostrare il risultato.
    let risultato = document.getElementById('txt_risultato');
    // Recupera l'elemento HTML relativo all'elenco delle operazioni.
    let selectOperando = document.querySelector('select');
    // definisce il pattern(sequenza di caratteri) da controllare con la regular expression.
    let pattern=/^[0-9]+(\.[0-9]+)?$/;//le regexp sono modelli utilizzati per individuare combinazioni di caratteri all'interno di stringhe
    // Verifica se il primo numero è valido.     
        if (!a.value.match(pattern)){//il metodo match() restituisce un array contenente le corrispondenze trovate. Se nessuna corrispondenza viene trovata, restituirà null
        // Mostra un messaggio di avviso e reimposta il focus sul campo 'txt_a'.
        alert("Inserisci il primo valore");
        a.focus();
        a.value = ""; // Cancella il contenuto del campo 'txt_a'.
        return false; // Interrompe l'esecuzione della funzione.
    }

    // Verifica se il secondo numero è valido.
          
        if (!b.value.match(pattern)){
        // Mostra un messaggio di avviso e reimposta il focus sul campo 'txt_b'.
        alert("Inserisci il secondo valore");
        b.focus();
        b.value = ""; // Cancella il contenuto del campo 'txt_b'.
        return false; // Interrompe l'esecuzione della funzione.
    }

    // Recupera l'operazione selezionata dall'utente.
    let operando= selectOperando.selectedIndex;

    // Esegue il calcolo in base all'operazione selezionata.
    switch (operando) {
        case 0:
            break; // Selezionata l'opzione "Seleziona operazione", non fare nulla.
        case 1:
            risultato.value = num1 + num2; // Somma i due numeri.
            break;
        case 2:
            risultato.value = num1 - num2; // Sottrae il secondo numero dal primo.
            break;
        case 3:
            risultato.value = num1 / num2; // Divide il primo numero per il secondo.
            break;
        case 4:
            risultato.value = num1 * num2; // Moltiplica i due numeri.
            break;
    }
}
