//! OBTENER COORDENADAS
//!!!!!!!!!!!!!!!!!!!!!

export async function obtenerCoordenadas(ciudad) {
    try {
        const url =`https://geocoding-api.open-meteo.com/v1/search?name=${ciudad}&count=1&language=es&format=json`;
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.results?.[0] || null;
    } catch(error) {
        console.error(
            "Error obteniendo ciudad:",
            error
        );
        return null;
    }
}

//! OBTENER CLIMA
//!!!!!!!!!!!!!!!
export async function obtenerDatosClima(latitud, longitud) {
    try {
        const params = new URLSearchParams({
            latitude: latitud,
            longitude: longitud,
            current: [
                "temperature_2m",
                "relative_humidity_2m",
                "apparent_temperature",
                "pressure_msl",
                "wind_speed_10m",
                "wind_direction_10m",
                "weather_code"
            ].join(","),
            hourly: [
                "temperature_2m",
                "weather_code",
                "wind_speed_10m",
                "wind_gusts_10m"
            ].join(","),
            daily: [
                "weather_code",
                "temperature_2m_max",
                "temperature_2m_min",
                "sunrise",
                "sunset",
                "precipitation_probability_max"
            ].join(","),
            timezone: "auto"
        });
        const url =`https://api.open-meteo.com/v1/forecast?${params}`;
        const respuesta = await fetch(url);
            if (!respuesta.ok) {
                throw new Error(
                    `Error API: ${respuesta.status}`
                );
            }
        return await respuesta.json();
    } catch(error) {
        console.error(
            "Error obteniendo clima:",
            error
        );
        return null;
    }
}