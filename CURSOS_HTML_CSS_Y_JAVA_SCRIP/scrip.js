console.log("JavaScript es un lenguaje de programación interpretado, dinámico y multiparadigma.");

let nombrePersona = "Juan";
const EDAD_MINIMA = 18;
var ciudad = "Bogotá";

let precio = 100;
let impuesto = precio * 0.19;
let precioTotal = precio + impuesto;
console.log("Total a pagar:", precioTotal);

let edad = 20;
if (edad >= 18) {
  console.log("Es mayor de edad");
}

let nota = 3.5;
if (nota >= 3.0) {
  console.log("Aprobó el examen");
} else {
  console.log("Reprobó el examen");
}

let calificacion = 85;
if (calificacion >= 90) {
  console.log("Excelente");
} else if (calificacion >= 70) {
  console.log("Bueno");
} else {
  console.log("Necesita mejorar");
}

let tienePase = true;
let edadConductor = 22;
if (tienePase && edadConductor >= 18) {
  console.log("Puede conducir");
}

let esFinDeSemana = true;
let esFestivo = false;
if (esFinDeSemana || esFestivo) {
  console.log("Día de descanso");
}

let dia = 2;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  default:
    console.log("Día no válido");
}

let contadorWhile = 1;
while (contadorWhile <= 3) {
  console.log("Iteración while:", contadorWhile);
  contadorWhile++;
}

let suma = 0;
let i = 1;
while (i <= 5) {
  suma += i; 
  i++;
}
console.log("Suma acumulada del 1 al 5:", suma);

let k = 1;
do {
  console.log("Ejecución do/while número:", k);
  k++;
} while (k <= 2);

for (let f = 1; f <= 3; f++) {
  console.log("Bucle for número:", f);
}

function saludar() {
  console.log("¡Hola desde una función simple!");
}
saludar();

function sumar(a, b) {
  console.log("Suma:", a + b);
}
sumar(5, 3);

function multiplicar(a, b) {
  return a * b;
}
let resultadoMultiplicacion = multiplicar(4, 2);

let fechaActual = new Date();
console.log("Año actual:", fechaActual.getFullYear());

let frutas = new Array("Manzana", "Banana", "Naranja");

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

let texto = "JavaScript";
console.log("Longitud:", texto.length, "Mayúsculas:", texto.toUpperCase());

console.log("Ancho de la ventana:", window.innerWidth);

console.log("Ancho de pantalla:", window.screen.width);

console.log("Navegador:", window.navigator.userAgent);

function PersonaClasica(nombre) {
  this.nombre = nombre;
}
PersonaClasica.prototype.hablar = function() { console.log("Hola, soy " + this.nombre); };

class Animal { constructor(especie) { this.especie = especie; } }
class Vehiculo { constructor(marca) { this.marca = marca; } }

let inventario = [
  { producto: "Lápiz", precio: 2 },
  { producto: "Cuaderno", precio: 5 }
];

let coche = {
  marca: "Toyota",
  modelo: 2022
};

let arr1 = [1, 2, 3];
let arr2 = new Array(3);

let denso = [10, 20, 30]; 

let disperso = [];
disperso[0] = "A";
disperso[5] = "B";

let listaNumeros = [1, 2];
listaNumeros.push(3); 
listaNumeros.pop();    

listaNumeros.unshift(0); 
listaNumeros.shift();    

let valores = [100, 200, 300];
delete valores[1]; 

let letras = ["b", "a", "c"];
letras.sort();    
letras.reverse(); 

let elementos = ["A", "B", "C", "D"];
elementos.splice(1, 2, "X"); 

let subArray = elementos.slice(0, 1);

let cadenaFrutas = ["Uva", "Pera"].join(" - ");

let unificado = [1, 2].concat([3, 4]);

let arrayCadena = [1, 2, 3].toString();

let items = ["x", "y", "z"];
for (let idx = 0; idx < items.length; idx++) { console.log(items[idx]); }
items.forEach(item => console.log(item));

function contarArgumentos() {
  console.log("Cantidad de argumentos pasados:", arguments.length);
}
contarArgumentos(1, "hola", true);

let variableGlobal = "Soy global";
function testScope() {
  let variableLocal = "Soy local";
}

function $calcular_total2() { return true; }

function funcionExterna() {
  function funcionInterna() {
    return "Desde adentro";
  }
  return funcionInterna();
}

function procesarEntrada(callback) {
  let valor = 5;
  callback(valor);
}
procesarEntrada(num => console.log("Procesando número:", num));

console.log(5 == "5");  
console.log(5 === "5"); 

console.log(isNaN("Hola")); 

console.log(isFinite(100)); 

let temporizador = setTimeout(() => console.log("Transcurrió 1 segundo"), 1000);
clearTimeout(temporizador);

let edadCliente = 20;
let acceso = (edadCliente >= 18) ? "Permitido" : "Denegado";

let regex = /javascript/i;

let regexInicioFin = /^hola$/;

let regexVocales = /[aeiou]/;

let regexDigitos = /\d{3,5}/;

let regexCeroOMas = /a*/;

let contieneNumero = /\d/.test("Año 2026");

let regexOpciones = /gato|perro/;

let regexCualquiera = /c.sa/; 

let regexGrupo = /(abc)+/;

let patron = /test/;
console.log(patron.test("este es un test"));

let regexGlobalIgnoreCase = /abc/ig;

let textoBase = "JavaScript es genial";
let nuevoTexto = textoBase.replace(/genial/, "increíble");

const PI = 3.1416;
let contadorModerno = 0;

let usuario = "Ana";
console.log(`Hola, bienvenida ${usuario}`);

function saludarUsuario(nombre = "Invitado") {
  return `Hola ${nombre}`;
}

function sumarTodos(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}

let nums1 = [1, 2];
let nums2 = [...nums1, 3, 4];

const duplicar = x => x * 2;

const objetoSintaxis = {
  saludar() {
    console.log("Método simplificado en objeto");
  }
};

class Dispositivo {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

class Laptop extends Dispositivo {
  constructor(nombre, ram) {
    super(nombre);
    this.ram = ram;
  }
}

class Usuario {
  constructor(nombre) {
    this._nombre = nombre;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre) {
    this._nombre = nuevoNombre;
  }
}

class Calculadora {
  static sumar(a, b) {
    return a + b;
  }
}

let coleccion = ["Red", "Green", "Blue"];
for (let color of coleccion) {
  console.log("Color:", color);
}


export const mensajeModulo = "Hola desde un módulo";


const miMap = new Map();
miMap.set("clave", "valor");
console.log(miMap.get("clave"));


const miSet = new Set([1, 2, 2, 3]);
console.log(miSet);


let objetoClave = {};
const miWeakMap = new WeakMap();
miWeakMap.set(objetoClave, "dato guardado");

const miWeakSet = new WeakSet();
miWeakSet.add(objetoClave);


const numeros = [10, 20, 30, 40];
const encontrado = numeros.find(num => num > 25);
console.log(encontrado);


fetch("datos.json")
  .then(response => response.json())
  .then(data => console.log(data));


fetch("texto.txt")
  .then(response => response.text())
  .then(texto => console.log(texto));


fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(post => console.log(post));


fetch("imagen.jpg")
  .then(response => response.blob())
  .then(blob => {
    const imgUrl = URL.createObjectURL(blob);
    console.log(imgUrl);
  });


const datosFormulario = new FormData();
datosFormulario.append("usuario", "Juan");

fetch("https://ejemplo.com/api", {
  method: "POST",
  body: datosFormulario
});


const formDataConArchivo = new FormData();


fetch("https://ejemplo.com/upload", {
  method: "POST",
  body: formDataConArchivo
});