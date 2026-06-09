export function renderDetalles(datos) {

    const detallesContainer = document.getElementById("detallesContainer");

    const humedad = datos.current.relative_humidity_2m;

    const sensacion = Math.round(datos.current.apparent_temperature);

    const presion = datos.current.pressure_msl;

    const lluvia = datos.daily.precipitation_probability_max[0];

    const amanecer = datos.daily.sunrise[0].split("T")[1];

    const anochecer = datos.daily.sunset[0].split("T")[1];

    const detalles = [
        {
            titulo: "Humedad",
            valor: `${humedad}%`
        },
        {
            titulo: "Sensación térmica",
            valor: `${sensacion}°C`
        },
        {
            titulo: "Presión atmosférica",
            valor: `${presion} hPa`
        },
        {
            titulo: "Probabilidad lluvia",
            valor: `${lluvia}%`
        },
        {
            titulo: "Amanecer",
            valor: amanecer
        },
        {
            titulo: "Anochecer",
            valor: anochecer
        }
    ];

    detallesContainer.innerHTML = "";
    detalles.forEach((detalle) => {
        const card = `
            <div class="detalle-card">

                <p class="detalle-titulo">
                    ${detalle.titulo}
                </p>

                <p class="detalle-valor">
                    ${detalle.valor}
                </p>
            </div>
        `;
        detallesContainer.innerHTML += card;
    });
}