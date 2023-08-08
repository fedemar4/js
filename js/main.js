let edad = prompt("ingrese su edad");

if (edad >= 18) {
    alert ("sos mayor de edad, quedate y hace tu combinacion tranquilo") } else{  alert("sos menor de edad, para poder combinar hacelo con un adulto") }  

    const pantalones = ["Jean", "Chino", "Carga"];
    const remeras = ["Manga corta", "Manga larga", "Sin mangas"];
    const camperas = ["Cuero", "Denim", "Bomber"];
    

    function obtenerSeleccion(opciones, categoria) {
      console.log(`Elige una opción de ${categoria}:`);
      for (let i = 0; i < opciones.length; i++) {
        console.log(`${i + 1}. ${opciones[i]}`);
      }
      const eleccion = prompt(`Ingresa el número de la opción de ${categoria}:`);
      return opciones[parseInt(eleccion) - 1];
    }
    
  
    const pantalonElegido = obtenerSeleccion(pantalones, "pantalones");
    const remeraElegida = obtenerSeleccion(remeras, "remeras");
    const camperaElegida = obtenerSeleccion(camperas, "camperas");
    

    console.log(`¡Elegiste la combinación: ${pantalonElegido} + ${remeraElegida} + ${camperaElegida}!`);