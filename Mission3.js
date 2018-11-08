const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero = 0;

rl.question('Ingresa un número: ', (respuesta) => {
    numero = respuesta;
    
    for (let i = 2; i < numero; i++){
        if ( numero % i === 0){
            console.log(numero + ' No es un numero primo.')
            return false;
        }
        
    };

    if (numero === 1) {
        console.log('El número 1 no puede primo.')
    } else{
        console.log(numero + ' Si es un numero primo.')
    }
    

    rl.close();
});

