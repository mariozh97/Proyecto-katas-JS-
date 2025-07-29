// Ejercicio 21
const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

const usuariosMenores = [];
const usuariosMayores = [];

for(const user of users){
    if(user.years < 18){
        usuariosMenores.push(user.name);
    } else {
        usuariosMayores.push(user.name);
    }
}
console.log("\n--- Ejercicio 21 ---");
console.log("Usuarios menores de edad:", usuariosMenores.join(", "));
console.log("Usuarios mayores de edad:", usuariosMayores.join(", "));
