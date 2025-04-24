const traficoRed = { 
    "08:00": 1250,  // MB transferidos 
    "09:00": 1870, 
    "10:00": 2100, 
    "11:00": 1950, 
    "12:00": 1600, 
    "13:00": 1300, 
    "14:00": 1700, 
    "15:00": 2200, 
    "16:00": 1800, 
    "17:00": 1500 
}; 
   // Calcula el total de datos transferidos 
   // Encuentra la hora con mayor tráfico

// Inicializamos variables para el total y la hora con mayor tráfico
let totalTransferido = 0;
let horaMayorTrafico = "";
let maxTrafico = 0;

// Recorremos el objeto traficoRed para calcular el total y encontrar la hora con mayor tráfico
for (let hora in traficoRed) {
    const datos = traficoRed[hora];
    totalTransferido += datos;
// Comprobamos si es la hora con mayor tráfico
    if (datos > maxTrafico) {
    maxTrafico = datos;
    horaMayorTrafico = hora;
}
}

console.log("Total de datos transferidos:", totalTransferido, "MB");
console.log("Hora con mayor tráfico:", horaMayorTrafico, "con", maxTrafico, "MB");