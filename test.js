let nombre = "Alejandro"
let apellido = "Niño"
let nombreUsuarioPlatzi = "Alejandro Niño"
let edad = 28
let correoElectronico = "ejemplo@ejemplo.com"
let mayorEdad = true
let dineroAhorrado = 2000
let deudas = 1500

console.log(nombre+" "+apellido)
let dineroReal = dineroAhorrado - deudas
console.log(dineroReal)

function llamarPersona (name,lastname,nickname) {
    console.log("Mi nombre es " + name + " " + lastname + ", pero prefiero que me digas " + nickname + ".");
}

llamarPersona("Juan David","Castro Gallego","juandc")

const tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} 
if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} 
if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

let i = 0;

while (i<5) {
    console.log("El valor de i es: " + i);
    i += 1;
}

i = 10;

while (i>=2) {
    console.log("El valor de i es: " + i);
    i -= 1;
}

let flag = true

while (flag) {
    let respuesta = prompt("¿Cuánto es 2+2?")
    if (respuesta == 4) {
        alert("felicitaciones")
        flag = false
    }
}

function primerElemento(array) {
    console.log(array[0])
}

function imprimirArray(array) {
    for (i=0;i<array.length;i++) {
        console.log(array[i])
    }
}

function imprimirObject(object) {
    const keys = Object.keys(object)
    const values = Object.values(object)

    for (i=0;i<keys.length;i++) {
        console.log(keys[i]+":"+values[i])
    }
}

array = ["hola", "si", "carro"]

