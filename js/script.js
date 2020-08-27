//Creare un oggetto che descriva uno studente con le seguenti proprietà:
//nome, cognome ed età. Stampare a schermo attraverso il for in tutte le proprietà.//

var studente = {
    "Nome" : "Mattia",
    "Cognome": "Anzalone",
    "Eta" : 23,
};

for ( var Nome in studente){
    console.log(studente[Nome]);
}

//Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.//
var studenti = [
    {
        "Nome": 'Mario',
        "Cognome": 'Rossi',
        "Eta": 23,
    },
    {
        "Nome": 'Giuseppe',
        "Cognome": 'Verdi',
        "Eta": 28,
    },
    {
        "Nome": 'Roberto',
        "Cognome": 'Gialli',
        "Eta": 23,
    }
];
for (var i = 0; i <studenti.length; i++){
    console.log(studenti[i].Nome + ' ' + studenti[i].Cognome);
}

//Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto 
//studente inserendo nell’ordine: nome, cognome e età.
var newStudenti = {
        "Nome": prompt('Inserisci il nome'),
        "Cognome": prompt('Inserisci il cognome'),
        "Eta": parseInt(prompt('Inserisci eta'))
};

studenti.push(newStudenti);
console.log(studenti);