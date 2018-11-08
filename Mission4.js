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
    // Creamos una función para saber si el número introducido es primo o no.
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
        // Nos aseguramos de que el número introducido sea superior a 10
        if (numero < 11) {
          console.log('Error, ingresa un numero mayor que 10');
        } else{
            for(let j = 0; j < numero; j++){
                if(Primo(j)){
                    primos.push(j);
                } 
            }
            // Guardamos todos los números menos el último en una array a parte
            primosNoUltimo = primos.slice(0, -1);
            // Enseñamos la array que contiene todos los números menos el último y después mostramos el último número.
            console.log(`Los numeros primos de ${numero} son ${primosNoUltimo} y ${primos[primos.length - 1]}`);
        }   
    

    rl.close();
});


