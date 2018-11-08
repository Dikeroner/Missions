const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numero = 0;

let primos = [];

let primosNoUltimo = [];

rl.question('Ingresa un número: ', (respuesta) => {
    numero = respuesta;

    function Primo(numero){
        if (numero < 0) {
            return false;
        } else {
    
            for (let i = 2; i < numero; i++){
                if (numero % i == 0){
                    return false;
                } else{
                    return true;
                }
            }
        }
    
    }

        if (numero < 11) {
          console.log('Error, ingresa un numero mayor que 10');
        } else{
            for(let j = 0; j < numero; j++){
                if(Primo(j)){
                    primos.push(j);
                } 
            }
            primosNoUltimo = primos.slice(0, -1);
            console.log(`Los numeros primos de ${numero} son ${primosNoUltimo} y ${primos[primos.length - 1]}`);
            // ${primos.forEach(function(primo, indice, array) {if primos})}`);
        }   
    

    rl.close();
});


