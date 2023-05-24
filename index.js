// ¡Bienvenidas y bienvenidos a nuestro primer desafío!

// Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
// Por ejemplo:
// "gato" => "gaitober"
// gaitober" => "gato"

const d = document;
const myTextarea = d.getElementById("myTextarea");
const copyText = d.getElementById("copyText");
const $resultado = d.querySelector(".resultado");
const $mensajeEncriptado = d.querySelector(".mensaje")

const btnEncriptar = d.getElementById('btnEncriptar');
const btnDesencriptar =d.getElementById("btnDesencritpar");
const btnCopiar= d.getElementById("btnCopiar");

let textoGuardado = '';
let textCodificado="";

function validarVacio(texto) {
  if(texto == ""){
    // Agregar clase para cuando no hay un texto y quitar el textarea
    $resultado.classList.remove("ocultar");
    $resultado.classList.add("visible");
    $mensajeEncriptado.classList.add("ocultar");
    $mensajeEncriptado.classList.remove("visible");
    return true;
  } else{
    // Agregar el textarea y oculatar el mensaje de no texto
    $mensajeEncriptado.classList.remove("ocultar");
    $mensajeEncriptado.classList.add("visible");
    $resultado.classList.add("ocultar");
    $resultado.classList.remove("visible");
    return false;
  }
}


// Boton encargado de realizar la modificanción del texto que deseamos encriptar, reemplaza las vocales con el metodo replace anidado
btnEncriptar.addEventListener('click', () => {
  textoGuardado = myTextarea.value;

  // Metodo del array que reemplaza
    textCodificado = textoGuardado
    .split('')
    .map((char) => {
      switch (char) {
        case 'a':
          return 'ai';
        case 'e':
          return 'enter';
        case 'o':
          return 'ober';
        case 'i':
          return 'imes';
        case 'u':
          return 'ufat';
        default:
          return char;
      }
    })
    .join('');
    myTextarea.value ="";
    copyText.value = textCodificado;
    validarVacio(textCodificado);
});


btnDesencriptar.addEventListener('click', () => {
  textoGuardado = myTextarea.value;
  textCodificado= textoGuardado
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/ober/g, "o")
    .replace(/imes/g, "i")
    .replace(/ufat/g, "u");
   console.log(textCodificado)
   myTextarea.value ="";
  copyText.value = textCodificado;

  validarVacio(textCodificado);

});


// Boton que se usa para poder copiar el texto que se incripto o desencripto

btnCopiar.addEventListener("click",()=>{
  copyText.select();
  d.execCommand("copy");
  window.getSelection().removeAllRanges();
})


// Pendiente hacer para hacer la pagina responsive mejor

// window.addEventListener("resize",(e)=>{
// console.clear(); // El clear no usamos para que cada vez que la resolucion cambie y el evento se ejecute, no quede todo en consola, entonces cuando cambia el evento anterior se borra y solo muestra el actual
// console.log("__________Evento Resize_____________")
// console.log(innerWidth); // Hace referencia del tamaño del ancho del viewport
// console.log(innerHeight); // Hace referencia del tamaño del alto del viewport
// console.log(outerWidth); // Referencia del tamaño del ancho del navegador
// console.log(outerHeight) // Referencia del tamaño del ancho del navegador
// console.log(e)
// })













