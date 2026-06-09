import { obtenerClima } from "../utils/codigosWeather.js";

export function renderPronosticoHoras(datos) {
    const horasContainer = document.getElementById("horasContainer");
    horasContainer.innerHTML = "";

    const horaActual = new Date().getHours();
    // arrays de la API
    const horas = datos.hourly.time;
    const temperaturas = datos.hourly.temperature_2m;
    const codigos = datos.hourly.weather_code;

    // buscamos desde la hora actual
    const indiceActual = horas.findIndex((hora) => {
        return hora.includes(
            String(horaActual).padStart(2, "0")
        );
    });

    // mostramos 9 bloques cada 2 horas
    for (let i = indiceActual; i < indiceActual + 22; i += 2) {
        const hora = horas[i];
        const temperatura = temperaturas[i];
        const codigo = codigos[i];
        // extraer HH:MM
        const horaFormateada = hora.split("T")[1];
        // detectar noche
        const numeroHora = Number(
            horaFormateada.split(":")[0]
        );
        const esDeNoche = numeroHora >= 19 || numeroHora < 6;
        const clima = obtenerClima(codigo, esDeNoche);
        const card = `
            <div class="hora-card">
                <p class="hora">
                    ${horaFormateada}
                </p>
                <div class="hora-icono">
                    <img
                        src="${clima.icono}"
                        alt="${clima.texto}"
                        title="${clima.texto}"
                    >
                </div>
                <p class="hora-temp">
                    ${Math.round(temperatura)}°
                </p>
            </div>
        `;
        horasContainer.innerHTML += card;
    }
}