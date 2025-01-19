//variables
let numeroMaximorango = parseInt(prompt('Indica el rango máximo para adivinar el número secreto enrte 1 y el rango que indiques:'));
let numeroSecreto = Math.floor(Math.random() * numeroMaximorango) + 1;
let numeroUsuario = 0;
let contadorIntentos = 1;

if (numeroMaximorango <= 10) {
    var MaximoIntentos = 3;
}else if(numeroMaximorango <= 20){
    var MaximoIntentos = 5;
}else if(numeroMaximorango <= 50){
    var MaximoIntentos = 7;
}else if(numeroMaximorango <= 100){
    var MaximoIntentos = 10;
}else if(numeroMaximorango <= 200){
    var MaximoIntentos = 15;
}else if(numeroMaximorango <= 500){
    var MaximoIntentos = 20;
}else{
    var MaximoIntentos = 30;
};

console.log(MaximoIntentos);
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt(`Me indicas un numero entre 1 y ${numeroMaximorango} por favor:`);
    numeroUsuario = parseInt(numeroUsuario);
    console.log(typeof(numeroUsuario));
    if (numeroSecreto == numeroUsuario) {
        //acertamos fue veradera la condicion
        alert(`Adivinaste el número es: ${numeroUsuario}, lo hiciste en ${contadorIntentos} ${contadorIntentos ==1 ? 'intento' : 'intentos'}`);
        break;
    }else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        }else{
            alert('el numero es mayor');
        }
        //incrmeementamos el contador de intentos cuando no hacierta
        contadorIntentos++;
        if(contadorIntentos > MaximoIntentos){
            alert(`llegaste al maximo de intentos que es ${MaximoIntentos} intentos y el numero secreto es ${numeroSecreto}`);
            break;
        }
    }
};
