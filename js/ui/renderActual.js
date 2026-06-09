import { obtenerClima } from "../utils/codigosWeather.js";

export function renderClimaActual(datos, ubicacion) {

    const boxActual = document.getElementById("boxActual");
    const horaActual = datos.current.time;
    const hora = Number(horaActual.split("T")[1].split(":")[0]);
    const esDeNoche = hora >= 20 || hora < 6;
    const clima = obtenerClima(datos.current.weather_code,esDeNoche);
    boxActual.innerHTML = `    
        <div class="clima-header">
            <div class="clima-info">
                <p class="clima-ciudad">
                    <span class="ciudad">${ubicacion.name}</span>
                    <span class="pais">${ubicacion.country}</span>
                </p>

                <p class="clima-temperatura">
                    ${Math.round(datos.current.temperature_2m)}°C
                </p>
            </div>

            <div class="clima-icono-grande">
                <img
                    src="${clima.icono}"
                    alt="${clima.texto}"
                >
            </div>
        </div>
    `;
}