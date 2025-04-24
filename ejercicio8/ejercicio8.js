
const dispositivos = [ 
    { id: 1, nombre: "PC-Desarrollo", ip: "192.168.1.5", tipo: "Estación de trabajo" }, 
    { id: 2, nombre: "PC-Marketing", ip: "192.168.1.7", tipo: "Estación de trabajo" }, 
    { id: 3, nombre: "Servidor-Web", ip: "192.168.1.10", tipo: "Servidor" }, 
    { id: 4, nombre: "Servidor-BD", ip: "192.168.1.11", tipo: "Servidor" } 
]; 

const conexionesActivas = [ 
    { origen: "192.168.1.5", destino: "192.168.1.10", protocolo: "HTTP", bytes: 8500 }, 
    { origen: "192.168.1.7", destino: "192.168.1.11", protocolo: "MySQL", bytes: 12000 }, 
    { origen: "192.168.1.5", destino: "192.168.1.11", protocolo: "MySQL", bytes: 9200 } 
]; 

// Paso 1: Crear informe combinando dispositivos y conexiones
const informeActividad = conexionesActivas.map(conexion => {
    const origen = dispositivos.find(d => d.ip === conexion.origen);
    const destino = dispositivos.find(d => d.ip === conexion.destino);

    return {
    origenNombre: origen?.nombre,
    origenTipo: origen?.tipo,
    destinoNombre: destino?.nombre,
    destinoTipo: destino?.tipo,
    protocolo: conexion.protocolo,
    bytes: conexion.bytes
    };
});

console.log("Informe de actividad de red:", informeActividad);

  // Paso 2: Filtrar alertas de seguridad de nivel alto
const alertasNivelAlto = informeActividad.filter(info => 
    info.protocolo === "MySQL" && info.bytes > 9000
);

  // Paso 3: Transformar en mensajes para el administrador
const mensajesAdmin = alertasNivelAlto.map(alerta => 
    `ALERTA ALTA: ${alerta.origenNombre} (${alerta.origenTipo}) se conectó a ${alerta.destinoNombre} (${alerta.destinoTipo}) usando ${alerta.protocolo} transfiriendo ${alerta.bytes} bytes.`
);

console.log("Mensajes para el administrador:");
mensajesAdmin.forEach(msg => console.log(msg));
