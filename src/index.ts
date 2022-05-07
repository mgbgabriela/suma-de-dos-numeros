let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let btnEnv = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Ingrese primer numero";
rotulo2.innerHTML = "Ingrese segundo numero";

btnEnv.addEventListener("click", () => {
  let numero1: number = Number(dato1.value);
  let numero2: number = Number(dato2.value);
  let resultado: number = numero1 + numero2;
  console.log("el dato ingresado es ", resultado);
});
