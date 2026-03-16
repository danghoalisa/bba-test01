
let playerName ='Mario';

let currentLives = 3;

const levelOne= 25;
const levelTwo = 30;
const levelThree = 45;

const sum= levelOne + levelTwo + levelThree
const gttb = sum/3;
const coinConLai = sum % 3;
console.log (coinConLai);
let powerUp = "flower";
let effect = '';

if (powerUp === 'mushroom') {
    effect = "Mario becomes Super!";
    console.log(effect);
} else if (powerUp === 'flower') {
    effect = "Mario can shoot fireballs!";
    console.log(effect);
} else if (powerUp === 'star') {
    effect = "Mario is invincible!";
    console.log(effect);
} else if (powerUp === 'none') {
    effect = "Mario is normal";
    console.log(effect);
} else if (powerUp === 'Other') { console.log("Unknown power-up"); }
