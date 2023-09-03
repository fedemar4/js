


const edad = prompt("Ingrese su edad");

if (edad >= 18) {
  alert("Eres mayor de edad, puedes crear tu combinación tranquilamente.");
} else {
  alert("Eres menor de edad. Necesitas la ayuda de un adulto para crear tu combinación.");
}


const opciones = {
  pantalones: ["Jean", "Chino", "Carga", "Shorts"],
  remeras: ["Manga corta", "Manga larga", "Sin mangas", "Polo"],
  camperas: ["Cuero", "Denim", "Bomber", "Impermeable"],
  zapatos: ["Zapatillas", "Botas", "Mocasines", "Sandalias"],
};


function obtenerSeleccion(opciones, categoria) {
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


for (const categoria in opciones) {
  obtenerSeleccion(opciones, categoria);
}


document.getElementById("combinar-button").addEventListener("click", () => {
  const seleccion = {};
  for (const categoria in opciones) {
    const inputElements = document.getElementsByName(categoria);
    for (const input of inputElements) {
      if (input.checked) {
        seleccion[categoria] = input.value;
      }
    }
  }

  if (Object.keys(seleccion).length === 4) {
    alert(`¡Elegiste la combinación: ${seleccion.pantalones} + ${seleccion.remeras} + ${seleccion.camperas} + ${seleccion.zapatos}!`);
    
   
    localStorage.setItem("combinacion", JSON.stringify(seleccion));
  } else {
    alert("Por favor, selecciona una opción de cada categoría.");
  }
});


const ultimaCombinacion = localStorage.getItem("combinacion");
if (ultimaCombinacion) {
  const seleccionGuardada = JSON.parse(ultimaCombinacion);
  console.log("Última combinación seleccionada:", seleccionGuardada);
}
    