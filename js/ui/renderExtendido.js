import { obtenerClima } from "../utils/codigosWeather.js";

export function renderSemana(datos) {

    const semanaContainer = document.getElementById("semanaContainer");
    semanaContainer.innerHTML = "";

    const fechas = datos.daily.time;
    const codigos = datos.daily.weather_code;
    const temperaturasMax = datos.daily.temperature_2m_max;
    const temperaturasMin = datos.daily.temperature_2m_min;

    const nombresDias = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado"
    ];

    // dia actual REAL
    const hoy = new Date().getDay();
    for (let i = 0; i < 7; i++) {
        let nombreDia;
        // hoy y maniana
        if (i === 0) {
            nombreDia = "Hoy";
        } else if (i === 1) {
            nombreDia = "Mañana";
        } else {
            // calcular siguientes dias
            const indiceDia =
                (hoy + i) % 7;
            nombreDia = nombresDias[indiceDia];
        }
        const codigo = codigos[i];
        const clima = obtenerClima(codigo, false);
        const tempMax = Math.round(temperaturasMax[i]);
        const tempMin = Math.round(temperaturasMin[i]);
        const card = `
            <div class="dia-card">

                <p class="dia-nombre">
                    ${nombreDia}
                </p>

                <div class="dia-clima">

                    <img
                        class="dia-icono"
                        src="${clima.icono}"
                        alt="${clima.texto}"
                        title="${clima.texto}"
                    >

                    <span class="dia-desc">
                        ${clima.texto}
                    </span>

                </div>

                <div class="dia-temp">

                    <span class="temp-max">
                        ${tempMax}°
                    </span>

                    <span class="temp-min">
                        ${tempMin}°
                    </span>

                </div>

            </div>

        `;

        semanaContainer.innerHTML += card;
    }
}