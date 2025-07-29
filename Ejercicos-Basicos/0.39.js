// Ejercicio 39
const soundCounter = {};
for (const user of usersWithSounds) {
    for (const soundName in user.favoritesSounds) {
        if (soundCounter[soundName]) {
            soundCounter[soundName]++;
        } else {
            soundCounter[soundName] = 1;
        }
    }
}
console.log("\n--- Ejercicio 39 ---");
console.log(soundCounter);
