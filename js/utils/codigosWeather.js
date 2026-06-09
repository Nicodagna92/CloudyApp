export function obtenerClima(codigo, esDeNoche) {
    const codigosWeather = {
        0: {
            texto: "Despejado",
            icono: esDeNoche
                ? "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-night-clear.svg"
                : "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-day-sunny.svg"
        },
        1: {
            texto: "Mayormente despejado",
            icono: esDeNoche
                ? "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-night-alt-partly-cloudy.svg"
                : "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-day-cloudy.svg"
        },
        2: {
            texto: "Parcialmente nublado",
            icono: esDeNoche
                ? "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-night-alt-cloudy.svg"
                : "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-day-cloudy.svg"
        },
        3: {
            texto: "Nublado",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-cloudy.svg"
        },
        45: {
            texto: "Niebla",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-fog.svg"
        },
        48: {
            texto: "Niebla con escarcha",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-fog.svg"
        },
        51: {
            texto: "Llovizna ligera",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-sprinkle.svg"
        },
        53: {
            texto: "Llovizna moderada",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-sprinkle.svg"
        },
        55: {
            texto: "Llovizna intensa",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-rain.svg"
        },
        61: {
            texto: "Lluvia ligera",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-rain.svg"
        },
        63: {
            texto: "Lluvia moderada",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-rain.svg"
        },
        65: {
            texto: "Lluvia intensa",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-rain-wind.svg"
        },
        71: {
            texto: "Nevada ligera",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-snow.svg"
        },
        73: {
            texto: "Nevada moderada",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-snow.svg"
        },
        75: {
            texto: "Nevada intensa",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-snow-wind.svg"
        },
        80: {
            texto: "Chaparrones ligeros",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-showers.svg"
        },
        81: {
            texto: "Chaparrones moderados",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-showers.svg"
        },
        82: {
            texto: "Chaparrones fuertes",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-storm-showers.svg"
        },
        95: {
            texto: "Tormenta",
            icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-thunderstorm.svg"
        }
    };
    return codigosWeather[codigo] || {
        texto: "Desconocido",
        icono: "https://nicodagna92.github.io/CloudyApp/assets/iconos/wi-na.svg"
    };
}