//Consigna:
// La regla general es que las palabras se deben transformar poniendo la primera letra al final y luego un "ay".

// Parte 1:
//  Cuando se ingresa "hello", se debe traducir a "ellohay"

function primerCaracter(texto) {
  if (texto.length >= 2) {
    let primerCaracter = texto[0];
    let stringFinal = "ay";
    texto = texto.slice(1) + primerCaracter + stringFinal;
    return texto;
  } else {
    return texto;
  }
}
let palabra = "hello";
console.log(primerCaracter(palabra));
