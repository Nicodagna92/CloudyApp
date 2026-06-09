import { obtenerDireccionViento } from "../utils/direccionViento.js";

export function renderViento(datos) {
    const vientoContainer = document.getElementById("vientoContainer");
    vientoContainer.innerHTML = "";
    const velocidadActual = Math.round(datos.current.wind_speed_10m);
    const direccionActual = datos.current.wind_direction_10m;    

    // convertir grados → texto
    const direccionTexto = obtenerDireccionViento(direccionActual);

    // arrays horarios
    const horas = datos.hourly.time;
    const velocidades = datos.hourly.wind_speed_10m;
    const horaActual = new Date().getHours();
    const rafagas = Math.round(datos.hourly.wind_gusts_10m[horaActual]);
    const indiceActual = horas.findIndex((hora)=>{
            return hora.includes(
                String(horaActual)
                .padStart(2,"0")
            );
        });

    let evolucionHTML = "";

    // 7 barras cada 2 horas
    for(let i=indiceActual;i<indiceActual+14;i+=2){
        const hora = horas[i].split("T")[1].slice(0,2);

        const velocidad = Math.round(velocidades[i]);
        // escala visual
        const altura = velocidad*2;

        evolucionHTML +=`
            <div class="viento-hora">
                <p class="hora-viento">
                    ${hora}h
                </p>
                <div
                    class="barra-viento"
                    style="height:${altura}px">
                </div>
                <p class="valor-viento">
                    ${velocidad} km/h
                </p>
            </div>
        `;
    }

    vientoContainer.innerHTML = `
        <div class="viento-actual">
            <div class="viento-card">

                <p class="viento-label">
                    Velocidad Actual
                </p>
                <p class="viento-valor">
                    ${velocidadActual} km/h
                </p>
            </div>

            <div class="viento-card">
                <p class="viento-label">
                    Dirección
                </p>
                <p class="viento-valor">
                    ${direccionTexto}
                </p>
            </div>

            <div class="viento-card">
                <p class="viento-label">
                    Ráfagas Máximas
                </p>
                <p class="viento-valor">
                    ${rafagas} km/h
                </p>
            </div>
        </div>

        <div class="viento-evolucion">
            ${evolucionHTML}
        </div>
    `;
}