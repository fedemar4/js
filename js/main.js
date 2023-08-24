

const edad = prompt("Ingrese su edad");

if (edad >= 18) {
  alert("Eres mayor de edad, puedes crear tu combinación tranquilamente.");
} else {
  alert("Eres menor de edad. Necesitas la ayuda de un adulto para crear tu combinación.");
}

const opciones = {
  pantalones: ["Jean", "Chino", "Carga"],
  remeras: ["Manga corta", "Manga larga", "Sin mangas"],
  camperas: ["Cuero", "Denim", "Bomber"],
};

function obtenerSeleccion(opciones, categoria) {
  console.log(`Elige una opción de ${categoria}:`);
  opciones[categoria].forEach((opcion, index) => {
    console.log(`${index + 1}. ${opcion}`);
  });
  const eleccion = prompt(`Ingresa el número de la opción de ${categoria}:`);
  return opciones[categoria][parseInt(eleccion) - 1];
}

const pantalonElegido = obtenerSeleccion(opciones, "pantalones");
const remeraElegida = obtenerSeleccion(opciones, "remeras");
const camperaElegida = obtenerSeleccion(opciones, "camperas");

console.log(`¡Elegiste la combinación: ${pantalonElegido} + ${remeraElegida} + ${camperaElegida}!`);


    