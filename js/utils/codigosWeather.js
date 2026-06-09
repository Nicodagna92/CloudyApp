const BASE_PATH = "https://nicodagna92.github.io/CloudyApp";

export function obtenerClima(codigo, esDeNoche) {
    const codigosWeather = {
        0: {
            texto: "Despejado",
            icono: esDeNoche
                ? `${BASE_PATH}/assets/iconos/wi-night-clear.svg`
                : `${BASE_PATH}/assets/iconos/wi-day-sunny.svg`
        },
        1: {
            texto: "Mayormente despejado",
            icono: esDeNoche
                ? `${BASE_PATH}/assets/iconos/wi-night-alt-partly-cloudy.svg`
                : `${BASE_PATH}/assets/iconos/wi-day-cloudy.svg`
        },
        2: {
            texto: "Parcialmente nublado",
            icono: esDeNoche
                ? `${BASE_PATH}/assets/iconos/wi-night-alt-cloudy.svg`
                : `${BASE_PATH}/assets/iconos/wi-day-cloudy.svg`
        },
        3: {
            texto: "Nublado",
            icono: `${BASE_PATH}/assets/iconos/wi-cloudy.svg`
        },
        45: {
            texto: "Niebla",
            icono: `${BASE_PATH}/assets/iconos/wi-fog.svg`
        },
        48: {
            texto: "Niebla con escarcha",
            icono: `${BASE_PATH}/assets/iconos/wi-fog.svg`
        },
        51: {
            texto: "Llovizna ligera",
            icono: `${BASE_PATH}/assets/iconos/wi-sprinkle.svg`
        },
        53: {
            texto: "Llovizna moderada",
            icono: `${BASE_PATH}/assets/iconos/wi-sprinkle.svg`
        },
        55: {
            texto: "Llovizna intensa",
            icono: `${BASE_PATH}/assets/iconos/wi-rain.svg`
        },
        61: {
            texto: "Lluvia ligera",
            icono: `${BASE_PATH}/assets/iconos/wi-rain.svg`
        },
        63: {
            texto: "Lluvia moderada",
            icono: `${BASE_PATH}/assets/iconos/wi-rain.svg`
        },
        65: {
            texto: "Lluvia intensa",
            icono: `${BASE_PATH}/assets/iconos/wi-rain-wind.svg`
        },
        71: {
            texto: "Nevada ligera",
            icono: `${BASE_PATH}/assets/iconos/wi-snow.svg`
        },
        73: {
            texto: "Nevada moderada",
            icono: `${BASE_PATH}/assets/iconos/wi-snow.svg`
        },
        75: {
            texto: "Nevada intensa",
            icono: `${BASE_PATH}/assets/iconos/wi-snow-wind.svg`
        },
        80: {
            texto: "Chaparrones ligeros",
            icono: `${BASE_PATH}/assets/iconos/wi-showers.svg`
        },
        81: {
            texto: "Chaparrones moderados",
            icono: `${BASE_PATH}/assets/iconos/wi-showers.svg`
        },
        82: {
            texto: "Chaparrones fuertes",
            icono: `${BASE_PATH}/assets/iconos/wi-storm-showers.svg`
        },
        95: {
            texto: "Tormenta",
            icono: `${BASE_PATH}/assets/iconos/wi-thunderstorm.svg`
        }
    };
    return codigosWeather[codigo] || {
        texto: "Desconocido",
        icono: `${BASE_PATH}/assets/iconos/wi-na.svg`
    };

}