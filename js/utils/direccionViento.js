export function obtenerDireccionViento(grados){

    if(grados>=337.5 || grados<22.5)
        return "Norte ↑";

    if(grados<67.5)
        return "Nordeste ↗";

    if(grados<112.5)
        return "Este →";

    if(grados<157.5)
        return "Sudeste ↘";

    if(grados<202.5)
        return "Sur ↓";

    if(grados<247.5)
        return "Sudoeste ↙";

    if(grados<292.5)
        return "Oeste ←";

    return "Noroeste ↖";

}