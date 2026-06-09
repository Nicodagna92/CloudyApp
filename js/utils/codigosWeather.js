export function obtenerClima(codigo, esDeNoche) {
    const codigosWeather = {
        0: {
            texto: "Despejado",
            icono: esDeNoche
                ? "./assets/iconos/wi-night-clear.svg"
                : "./assets/iconos/wi-day-sunny.svg"
        },
        1: {
            texto: "Mayormente despejado",
            icono: esDeNoche
                ? "./assets/iconos/wi-night-alt-partly-cloudy.svg"
                : "./assets/iconos/wi-day-cloudy.svg"
        },
        2: {
            texto: "Parcialmente nublado",
            icono: esDeNoche
                ? "./assets/iconos/wi-night-alt-cloudy.svg"
                : "./assets/iconos/wi-day-cloudy.svg"
        },
        3: {
            texto: "Nublado",
            icono: "./assets/iconos/wi-cloudy.svg"
        },
        45: {
            texto: "Niebla",
            icono: "./assets/iconos/wi-fog.svg"
        },
        48: {
            texto: "Niebla con escarcha",
            icono: "./assets/iconos/wi-fog.svg"
        },
        51: {
            texto: "Llovizna ligera",
            icono: "./assets/iconos/wi-sprinkle.svg"
        },
        53: {
            texto: "Llovizna moderada",
            icono: "./assets/iconos/wi-sprinkle.svg"
        },
        55: {
            texto: "Llovizna intensa",
            icono: "./assets/iconos/wi-rain.svg"
        },
        61: {
            texto: "Lluvia ligera",
            icono: "./assets/iconos/wi-rain.svg"
        },
        63: {
            texto: "Lluvia moderada",
            icono: "./assets/iconos/wi-rain.svg"
        },
        65: {
            texto: "Lluvia intensa",
            icono: "./assets/iconos/wi-rain-wind.svg"
        },
        71: {
            texto: "Nevada ligera",
            icono: "./assets/iconos/wi-snow.svg"
        },
        73: {
            texto: "Nevada moderada",
            icono: "./assets/iconos/wi-snow.svg"
        },
        75: {
            texto: "Nevada intensa",
            icono: "./assets/iconos/wi-snow-wind.svg"
        },
        80: {
            texto: "Chaparrones ligeros",
            icono: "./assets/iconos/wi-showers.svg"
        },
        81: {
            texto: "Chaparrones moderados",
            icono: "./assets/iconos/wi-showers.svg"
        },
        82: {
            texto: "Chaparrones fuertes",
            icono: "./assets/iconos/wi-storm-showers.svg"
        },
        95: {
            texto: "Tormenta",
            icono: "./assets/iconos/wi-thunderstorm.svg"
        }
    };
    return codigosWeather[codigo] || {
        texto: "Desconocido",
        icono: "./assets/iconos/wi-na.svg"
    };
}