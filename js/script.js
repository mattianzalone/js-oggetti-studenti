//Creare un oggetto che descriva uno studente con le seguenti proprietà:
//nome, cognome ed età. Stampare a schermo attraverso il for in tutte le proprietà.//

var studente = {
    "Nome" : "Mattia",
    "Cognome": "Anzalone",
    "Eta" : 23,
};

for ( var Nome in studente){
    console.log(Nome + ': ' + studente[Nome]);
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

for (var i = 0; i < 3; i++){
    var nome = prompt('Inserisci il nome');
    var cognome = prompt('Inserisci il cognome');
    var eta = prompt('Inserisci eta');
    studenti.push([nome, cognome, eta]);
}
console.log(studenti);