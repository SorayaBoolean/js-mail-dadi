const emailAddress = prompt ('Inserisci la tua email');
console.log (emailAddress)

const listEmails = [ 'soraya@boolean.it', 'giovanni@boolean.it', 'marco@boolean.it', 'sara@boolean.it', 'michela@boolean.it', 'jacopo@boolean.it'];
console.log (listEmails)

let enterAllowed = 'Nope'

for (let i= 0; i< 6; i++ ) {
    console.log (listEmails [i]);

    if (emailAddress == listEmails [i]) {
        let enterAllowed = 'Allowed'
        console.log (enterAllowed);
        alert (emailAddress + ' sei entrato')
    }
}

if (enterAllowed != 'Allowed') {
    console.log ('You are note Allowed')
    alert (emailAddress + ' non sei entrato')
}