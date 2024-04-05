//alert("Hola este es mi Javascript");
//let nombre = "Carlos";
//nombre = "Carlos";
//var nombre1 ="Marta";
//nombre1 = "Maria";
//const nombre2 = "Marta";
//console.log(nombre)
//console.log(nombre1)
//console.log(nombre2)

//SELECCIONAR ELEMENTOS SE LE PONE EL VALOR QUE DESEAS A UN ELEMENTO BUSCADO EN EL HTML
let contenidoTitulo="Carlos";
let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML =contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if(textoTitulo=="Nombre"){
    titulo.innerHTML="Otro";
} else{
    console.log("No se cumple");
}

//FUNCIONES

let nombre= "Eduardo";
let ciudad= "Chancay";
let gusto= "cacao";

let parrafo = document.querySelector(".parrafo2");

function cambiarTexto(nombre,ciudad,gusto){
    let contenido = `Me llamo ${nombre}, nací en ${ciudad} y vivo en Caballito.
    Me gusta el ${gusto} y salir a pasear en dias de sol.
    Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen.`
    return contenido;
}

parrafo.innerText= cambiarTexto(nombre,ciudad,gusto);

//FUNCIONES 2
let lugar= "La Web";

let parrafo1 = document.querySelector(".parrafo1");

function cambiarTexto1(lugar){
    let contenido1 = `¡Bienvenido a ${lugar}! Aquí, aprenderás más sobre mí.`
    return contenido1;
}

parrafo1.innerText= cambiarTexto1(lugar);