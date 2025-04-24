const topologiaRed = { 
    nodos: [ 
    { id: "A", tipo: "Router", ubicacion: "Planta 1" }, 
    { id: "B", tipo: "Switch", ubicacion: "Planta 1" }, 
    { id: "C", tipo: "Switch", ubicacion: "Planta 2" }, 
    { id: "D", tipo: "Switch", ubicacion: "Planta 3" }, 
    { id: "E", tipo: "Router", ubicacion: "Planta 3" } 
    ], 
    conexiones: [ 
    { origen: "A", destino: "B", ancho_banda: 1000 }, 
    { origen: "A", destino: "C", ancho_banda: 1000 }, 
    { origen: "B", destino: "C", ancho_banda: 100 }, 
    { origen: "B", destino: "D", ancho_banda: 100 }, 
    { origen: "C", destino: "D", ancho_banda: 100 }, 
    { origen: "C", destino: "E", ancho_banda: 1000 }, 
    { origen: "D", destino: "E", ancho_banda: 1000 } 
    ] 
}; 
    
// Inicializamos contador de conexiones
const conexionesPorNodo = {}; 
topologiaRed.nodos.forEach(nodo => { 
    conexionesPorNodo[nodo.id] = 0; 
}); 

// Contamos conexiones de entrada y salida
topologiaRed.conexiones.forEach(({ origen, destino }) => {
    conexionesPorNodo[origen]++;
    conexionesPorNodo[destino]++;
});

// Ordenamos nodos por cantidad de conexiones de mayor a menor
const nodosOrdenados = Object.entries(conexionesPorNodo)
    .sort((a, b) => b[1] - a[1]);

console.log("Conexiones por nodo:");
console.table(conexionesPorNodo);

console.log("Nodos ordenados por conexiones:");
console.table(nodosOrdenados);

// Sugerencia de optimización básica
const maxConexiones = nodosOrdenados[0][1];
const nodosConMasConexiones = nodosOrdenados.filter(([_, count]) => count === maxConexiones);

console.log("Nodo(s) con más conexiones:", nodosConMasConexiones.map(n => n[0]));

// Ejemplo de sugerencia de optimización
nodosConMasConexiones.forEach(([id]) => {
    const nodo = topologiaRed.nodos.find(n => n.id === id);
    console.log(`Sugerencia: Evaluar balancear la carga del nodo ${id} (${nodo.tipo} en ${nodo.ubicacion})`);
});