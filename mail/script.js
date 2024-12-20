// Crea una lista di email di invitati ad una festa. Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.

 
// Chiedo al utente la mail
// controllo che ci sia nella lista 
// stampo l'esito al utente 
// Creo la lista
let listaInvitati = [ 
    'Alessandro',
    'Martina',
    'Luca',
    'Giorgia',
    'Matteo',
    'Chiara',
    'Davide',
    'Francesca',
    'Simone',
    'Elena'
]
// Chiedo il nome dell'utente
let nomeDaCercare = prompt("Inserisci il tuo nome: ")
// Imposto una variabile per vedere se il nome è stato trovato
let trovato = false;
for(i = 0; i < listaInvitati.length; i++){
    if (listaInvitati[i] === nomeDaCercare){
        console.log("Ciao " + nomeDaCercare + " Sei presente nella lista");
        trovato = true;
        //Una volta verificato che il nome è presente nella lista, chideo all'utente di inserire la mail
        prompt("Inserisci la tua mail: ")
    }
}
if (!trovato) {
    console.log("Nome non trovato nella lista, riprova!")
} 
