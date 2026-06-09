import {obtenerCoordenadas, obtenerDatosClima  } from "./api/weatherApi.js";
import { renderClimaActual } from "./ui/renderActual.js";
import { renderPronosticoHoras } from "./ui/renderHoras.js";
import { renderDetalles } from "./ui/renderDetalles.js";
import { renderSemana } from "./ui/renderExtendido.js";
import { renderViento } from "./ui/renderViento.js";


//!!!!!!!! SELECTORES !!!!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const appContainer = document.getElementById("appContainer");

//!!!!!!!!! EVENTOS !!!!!!!!!
//!!!!!!!!!!!!!!!!!!!!!!!!!!!

searchBtn.addEventListener("click", buscarCiudad);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        buscarCiudad();
    }
});

//! 
//! FUNCION PRINCIPAL
//! 
async function buscarCiudad() {
    const ciudad = searchInput.value.trim();
    if (ciudad === ""){ 
        return;
    }
    try {
        const ubicacion = await obtenerCoordenadas(ciudad);
        if (!ubicacion) {
            alert("Ciudad no encontrada");
            return;
        }

        const datosClima = await obtenerDatosClima(ubicacion.latitude,ubicacion.longitude);
        if (!datosClima) {
            alert("No se pudieron obtener datos");
            return;
        }

    appContainer.classList.remove("oculto");
        renderClimaActual(datosClima, ubicacion);
        renderPronosticoHoras(datosClima);
        renderDetalles(datosClima);
        renderSemana(datosClima);
        renderViento(datosClima);
    }
    catch(error){
        alert(
            "Error de conexión con el servicio meteorológico"
        );
    }
}