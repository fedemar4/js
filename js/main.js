
const opciones = {
  pantalones: ["Jean", "Chino", "Carga", "Shorts"],
  remeras: ["Manga corta", "Manga larga", "Sin mangas", "Polo"],
  camperas: ["Cuero", "Denim", "Bomber", "Impermeable"],
  zapatos: ["Zapatillas", "Botas", "Mocasines", "Sandalias"],
  sombreros: ["Gorra", "Sombrero de ala ancha", "Beanie"],
  accesorios: ["Collar", "Pulsera", "Bufanda"],
  gafas: ["Gafas de sol", "Gafas de lectura", "Gafas de protección"],
  workshop: ["Camiseta de workshop", "Sudadera de workshop", "Pantalones de workshop"]
};

function obtenerSeleccion(opciones, categoria) {
  if (opciones[categoria]) {
    const container = document.getElementById("opciones-container");
    const categoriaDiv = document.createElement("div");
    categoriaDiv.innerHTML = `<h3>Elige una opción de ${categoria}:</h3>`;
    container.appendChild(categoriaDiv);

    opciones[categoria].forEach((opcion, index) => {
      const opcionDiv = document.createElement("div");
      opcionDiv.innerHTML = `<label>${index + 1}. <input type="radio" name="${categoria}" value="${opcion}">${opcion}</label>`;
      categoriaDiv.appendChild(opcionDiv);
    });
  }
}

for (const categoria in opciones) {
  obtenerSeleccion(opciones, categoria);
}

document.getElementById("combinar-button").addEventListener("click", () => {
  const seleccion = {};
  for (const categoria in opciones) {
    const inputElements = document.getElementsByName(categoria);
    const selectedInput = Array.from(inputElements).find((input) => input.checked);

    if (selectedInput) {
      seleccion[categoria] = selectedInput.value;
    } else {
      console.log(`Por favor, selecciona una opción de ${categoria}.`);
      return; 
    }
  }

  const combinacionMensaje = `¡Elegiste la combinación: ${seleccion.pantalones} + ${seleccion.remeras} + ${seleccion.camperas} + ${seleccion.zapatos} + ${seleccion.sombreros} + ${seleccion.accesorios} + ${seleccion.gafas} + ${seleccion.workshop}!`;
  console.log(combinacionMensaje);


  const combinacionesGuardadas = JSON.parse(localStorage.getItem("combinaciones")) || [];
  combinacionesGuardadas.push(seleccion);
  localStorage.setItem("combinaciones", JSON.stringify(combinacionesGuardadas));

 
  mostrarCombinacionesGuardadas();
});

function mostrarCombinacionesGuardadas() {
  const combinacionesGuardadas = JSON.parse(localStorage.getItem("combinaciones")) || [];
  const combinacionesContainer = document.getElementById("combinaciones-guardadas");

  combinacionesContainer.innerHTML = "<h2>Combinaciones Guardadas:</h2>";

  if (combinacionesGuardadas.length === 0) {
    combinacionesContainer.innerHTML += "<p>No hay combinaciones guardadas.</p>";
  } else {
    combinacionesGuardadas.forEach((combinacion, index) => {
      combinacionesContainer.innerHTML += `<p>Combinación ${index + 1}: ${combinacion.pantalones} + ${combinacion.remeras} + ${combinacion.camperas} + ${combinacion.zapatos} + ${combinacion.sombreros} + ${combinacion.accesorios} + ${combinacion.gafas} + ${combinacion.workshop}</p>`;
    });
  }
}

mostrarCombinacionesGuardadas();
