// Ejercicio 38
const usersWithSounds = [
  { name: "Alberto", favoritesSounds: { waves: { volume: 50 }, rain: { volume: 60 } } },
  { name: "Antonio", favoritesSounds: { waves: { volume: 30 }, shower: { volume: 55 } } },
];

let totalVolume = 0;
let soundsCount = 0;

for(const user of usersWithSounds){
    for(const key in user.favoritesSounds){
        totalVolume += user.favoritesSounds[key].volume;
        soundsCount++;
    }
}
const averageVolume = totalVolume / soundsCount;
console.log("\n--- Ejercicio 38 ---");
console.log(averageVolume);