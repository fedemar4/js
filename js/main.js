const opciones = {
  pantalones: ["Jean", "Chino", "Cargo", "Shorts"],
  remeras: ["Manga corta", "Manga larga", "Sin mangas", "Polo"],
  camperas: ["Cuero", "Denim", "Bomber", "Impermeable"],
  zapatos: ["Zapatillas", "Botas", "Mocasines", "Sandalias"],
  sombreros: ["Gorra", "Sombrero de ala ancha", "Beanie"],
  accesorios: ["Collar", "Pulsera", "Bufanda"],
  gafas: ["Gafas de Sol", "Gafas de Lectura", "Gafas de Protección"],
  workshop: ["Camiseta de Workshop", "Sudadera de Workshop", "Pantalones de Workshop"],
};

function obtenerSeleccion(opciones, categoria) {
  if (opciones[categoria]) {
    const selectElement = document.getElementById(`${categoria}-select`);
    const imagenElement = document.getElementById(`${categoria}-image`);
    
    selectElement.addEventListener("change", () => {
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      const selectedValue = selectedOption.value;
      const selectedText = selectedOption.text;
      
      if (selectedValue) {
        imagenElement.src = `./imagenes/${selectedValue}.jpg`;
        imagenElement.alt = `Imagen de ${selectedText}`;
      }
    });
  }
}

for (const categoria in opciones) {
  obtenerSeleccion(opciones, categoria);
}

document.getElementById("combinar-button").addEventListener("click", () => {
  const seleccion = {};
  for (const categoria in opciones) {
    const selectElement = document.getElementById(`${categoria}-select`);
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    const selectedValue = selectedOption.value;

    if (selectedValue) {
      seleccion[categoria] = selectedOption.text;
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
