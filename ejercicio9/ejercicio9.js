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

// Cuenta el número de conexiones por nodo 
const conexionesPorNodo = {}; 
topologiaRed.nodos.forEach(nodo => { 
conexionesPorNodo[nodo.id] = 0; 
}); 

// Contar conexiones por cada nodo (tanto origen como destino)
topologiaRed.conexiones.forEach(conexion => {
conexionesPorNodo[conexion.origen]++;
conexionesPorNodo[conexion.destino]++;
});

// Ordenar nodos por número de conexiones de mayor a menor
const nodosOrdenados = Object.entries(conexionesPorNodo)
.sort((a, b) => b[1] - a[1]);

// Sugerencias de optimización
const sugerencias = [];
nodosOrdenados.forEach(([id, cantidad]) => {
if (cantidad > 2) {
   const nodo = topologiaRed.nodos.find(n => n.id === id);
   sugerencias.push(`El nodo ${id} (${nodo.tipo} en ${nodo.ubicacion}) tiene ${cantidad} conexiones. Considerar aumentar su capacidad o ancho de banda.`);
}
});

console.log("Conexiones por nodo:", conexionesPorNodo); 
console.log("Nodos ordenados por número de conexiones:", nodosOrdenados); 
console.log("Sugerencias de optimización:", sugerencias);