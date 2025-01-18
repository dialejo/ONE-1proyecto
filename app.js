//variables
let numeroSecreto = 6;
let numeroUsuario = prompt('¿Me indicas un numero por favor?');

console.log(numeroUsuario);
/*
este codigo 
realiza la comparacion
*/
if (numeroSecreto == numeroUsuario) {
    //acertamos fue veradera la condicion
    alert(`Adivinaste el número es: ${numeroUsuario}`);
}else{
    //no se acerto la condicion
    alert('No adivinaste el numero secreto');
};

