const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Hola, que tal?\n', (respuesta) => {
    console.log(`Tu respuesta ha sido: ${respuesta}`)
    rl.close();
    
});