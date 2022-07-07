const numeroGiocatore = parseInt (prompt ('Scegli un numero da 1 a 6'));
console.log (numeroGiocatore)

const numeroComputer = Math.floor (Math.random ()*5) + 1;
console.log (numeroComputer)

const listaComputer = ['1', '2', '3', '4', '5', '6' ]
console.log (listaComputer)

let Vinto = 'Computer'

for ( let i = 0; i < 6 ; i++) {

if (numeroGiocatore > numeroComputer) {
    let Vinto = 'Tu'
    console.log (Vinto)
    alert ('Hai vinto tu!')
} 
}

if (Vinto != 'Tu') {
    alert ('Avete pareggiato!')
}





