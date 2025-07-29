// Ejercicio 4
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
console.log("\n--- Ejercicio 4 ---");
console.log(aldeanos[3]); 
aldeanos.push("Cervasio"); 
aldeanos[0] = "Bambina"; 
aldeanos.reverse(); 
const indice = aldeanos.indexOf("Narciso");
if (indice !== -1) {
    aldeanos.splice(indice, 1, "Canela"); 
}
console.log(aldeanos[aldeanos.length - 1]); 
console.log("Array final:", aldeanos);