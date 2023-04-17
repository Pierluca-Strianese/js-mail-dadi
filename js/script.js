const mail_Arr = [
	'pio@piou.it',
	'qwerty@mail.it',
	'plio@pippo.com',
	'zxcv@pippo.it',
];

// console.log(mail_Arr);

const mail = prompt('Inserisci l\'email da cercare: ');

// console.log(mail);

for (let i=0; i < mail_Arr.length; i++) {

    if (mail_Arr[i] == mail) {
        console.log ("la mail è presente");
    }
    else if(i+1 == mail_Arr.length) {
            console.log ("la mail non è presente");
    }

}