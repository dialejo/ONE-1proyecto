//variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let contadorIntentos = 1;
let palabraIntento = 'intento';

while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt('Me indicas un numero entre 1 y 10 por favor:');

    console.log(numeroUsuario);
    if (numeroSecreto == numeroUsuario) {
        //acertamos fue veradera la condicion
        alert(`Adivinaste el número es: ${numeroUsuario}, lo hiciste en ${contadorIntentos} ${palabraIntento}`);
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('el numero es mayor');
        }
        //incrmementamos el contador de intentos cuando no hacierta
        contadorIntentos = contadorIntentos + 1;
        palabraIntento = 'intentos';
    }
};
