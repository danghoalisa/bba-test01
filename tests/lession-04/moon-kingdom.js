function createCharacters() {
    const characters = [
        { name: "Mario", level: 10, health: 400 },
        { name: "Luigi", level: 15, health: 500 },
        { name: "Peach", level: 20, health: 350 },
        { name: "Yoshi", level: 30, health: 600 }
    ];
    // power up characters
    const charactersPowerUp = characters.map((character) => ({
        name: character.name.toUpperCase(),
        level: character.level * 2,
        health: character.health * 3,
    }));
    // lọc health > 1000
    const possibleWinners = charactersPowerUp.filter(
        (character) => character.health > 1000
    );
    return possibleWinners;
}
console.log(createCharacters());

 const players = [
        { name: "Mario", score: 1000 },
        { name: "Luigi", score: 900 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 800 },
        { name: "Phong", score: 500 },
    ];
function printLeaderboard() {
   
    // Sort người chơi theo thứ tự score từ cao đến thấp.
    const sortPlayers = players.sort((a, b) => b.score - a.score)
    sortPlayers.forEach((player, index) => {
        let medal = "";

        if (index === 0) medal = "🥇 ";
        else if (index === 1) medal = "🥈 ";
        else if (index === 2) medal = "🥉 ";

        console.log(`${medal}${index + 1}. ${player.name} - ${player.score}`);
    });
}
printLeaderboard(players);


