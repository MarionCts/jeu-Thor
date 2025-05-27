// Initialization of random cordinates for both the lightning and Thor

const randomXCordinates = () => {
  return Math.floor(Math.random() * 39);
};

const randomYCordinates = () => {
  return Math.floor(Math.random() * 17);
};

let lightX = randomXCordinates();
let lightY = randomYCordinates();

let initialTX = randomXCordinates();
let initialTY = randomYCordinates();

console.log(`Position de l'éclair : ${lightX}, ${lightY}`);
console.log(`Position de Thor : ${initialTX}, ${initialTY}`);

// THANOS ; Thanos' position at the beginning of the game

thanosX = lightX += 1;
thanosY = lightY;

console.log(`Thanos se trouve aux coordonnées ${thanosX}, ${thanosY}.`);

// Thor's new cordinates after the player's move

let d;

// Boolean condition that will need to be changed to end the game

let endGame = true;
let endTrap = true;
let endObstacle = true;

// Sets the initial amount of Thor's lives at "3"

let counting = 3;

// TRAPS ; Creates a function that generates random cordinates for a specific number of traps

// let helaTrapX = 4;
// let helaTrapY = 8;
let tableOfTraps = [];

const helaTraps = (numberOfTraps) => {
  for (let i = numberOfTraps; i > 0; i--) {
    let randomTrap = {
      x: Math.floor(Math.random() * 39),
      y: Math.floor(Math.random() * 17),
    };
    tableOfTraps.push(randomTrap);
  }
};

helaTraps(3);

// OBSTACLES ; Creates a function that generates random cordinates for a specific number of obstacles

let tableOfObstacles = [];

const obstacles = (numberOfObstacles) => {
  for (let i = numberOfObstacles; i > 0; i--) {
    let randomObstacle = {
      x: Math.floor(Math.random() * 39),
      y: Math.floor(Math.random() * 17),
    };
    tableOfObstacles.push(randomObstacle);
  }
};

obstacles(5);

// The extreme cordinates of the 40 cases game

const mapMinX = 0;
const mapMinY = 0;
const mapMaxX = 39;
const mapMaxY = 17;

//   // On démarre en demandant au joueur de saisir une direction

//   let playerChoiceLightX = prompt(`Aidez Thor à rejoindre l'éclair de pouvoir ! Tout d'abord, donnez une position "X" à l'éclair entre 0 et 39 :`);

//   let playerChoiceLightY = prompt(`Ensuite, donnez une position "X" à l'éclair entre 0 et 17 :`);

//   let playerChoiceThorX = prompt(`Maintenant, donnez une position "X" à Thor entre 0 et 39 :`);

//   let playerChoiceThorY = prompt(`Et enfin, donnez une position "Y" à Thor entre 0 et 17 :`);

//   // The Power Lightning oordinates that Thor must reach according to the player's choice
// lightX = Number(playerChoiceLightX);
// lightY = Number(playerChoiceLightY);

// // Thor's cordinates at the beginning of his journey according to the player's choice
// initialTX = Number(playerChoiceThorX);
// initialTY = Number(playerChoiceThorY);

const direction = () => {
  if (d === "N") {
    initialTY -= 1;
    initialTX += 0;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  } else if (d === "E") {
    initialTX += 1;
    initialTX += 0;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  } else if (d === "S") {
    initialTY += 1;
    initialTX += 0;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  } else if (d === "W") {
    initialTX -= 1;
    initialTX += 0;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  } else if (d === "NE") {
    initialTY -= 1;
    initialTX += 1;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  } else if (d === "NW") {
    initialTY -= 1;
    initialTX -= 1;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  } else if (d === "SE") {
    initialTY += 1;
    initialTX += 1;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  } else if (d === "SW") {
    initialTY += 1;
    initialTX -= 1;
    thanosX = Math.floor(Math.random() * 39);
    thanosY = Math.floor(Math.random() * 17);
  }
};

let message = prompt(
  `Vous démarrez aux coordonnées ${initialTX}, ${initialTY}, et l'éclair de pouvoir se trouve aux coordonnées ${lightX}, ${lightY}. Choisissez une direction parmi les suivantes : N (Nord) ; NE (Nord-Est) ; E (Est) ; SE (Sud-Est) ; S (Sud) ; SW (Sud-Ouest) ; W (Ouest) ; NW (Nord-Ouest).`
);

while (endGame === true) {
  d = message;
  endTrap = true;
  endObstacle = true;

  direction();

  console.log(
    `En prenant la direction ${d}, vous avez atteri aux coordonnées ${initialTX}, ${initialTY} ; Thanos, lui, se trouve désormais aux coordonnées ${thanosX}, ${thanosY}.`
  );

  for (let trap of tableOfTraps) {
    console.log(`Il y a un piège aux coordonnées : ${trap.x}, ${trap.y}`);
    if (initialTX === trap.x && initialTY === trap.y) {
      counting -= 1;
      if (counting > 0) {
        endTrap = false;
        message = prompt(
          `Oups ! Vous venez de tomber sur Hela et vous n'avez plus que ${counting} vies ; choisissez vite une autre direction :`
        );
      } else if (counting === 0) {
        alert("Défaite...");
        endGame = false;
      } 
    }
  }

  for (let obstacle of tableOfObstacles) {
    console.log(`Il y a un obstacle aux coordonnées : ${obstacle.x}, ${obstacle.y}`);
    if (initialTX === obstacle.x && initialTY === obstacle.y) {
        endObstacle = false;
        if (d === "N") {
    initialTY += 1;
    initialTX += 0;
  } else if (d === "E") {
    initialTX -= 1;
    initialTX += 0;
  } else if (d === "S") {
    initialTY -= 1;
    initialTX += 0;
  } else if (d === "W") {
    initialTX += 1;
    initialTX += 0;
  } else if (d === "NE") {
    initialTY += 1;
    initialTX -= 1;
  } else if (d === "NW") {
    initialTY += 1;
    initialTX += 1;
  } else if (d === "SE") {
    initialTY -= 1;
    initialTX -= 1;
  } else if (d === "SW") {
    initialTY -= 1;
    initialTX += 1;
  }
        message = prompt(
          `Oups ! Vous venez de tomber sur un obstacle et nous ne pouvez pas avancer ; vous restez à la position ${initialTX}, ${initialTY} ; choisissez une autre direction :`
        );
    }
  }

  if (initialTX === lightX && initialTY === lightY) {
    alert("Victoire !");
    endGame = false;
  } else if (
    initialTX === mapMinX - 1 ||
    initialTY === mapMinY - 1 ||
    initialTX === mapMaxX + 1 ||
    initialTY === mapMaxY + 1
  ) {
    alert("Défaite...");
    endGame = false;
  } else if (endGame === true && endTrap === true && endObstacle === true) {
    message = prompt(
      `En prenant la direction ${d}, vous venez d'atterir aux coordonnées ${initialTX}, ${initialTY} ; pour rappel, l'éclair se trouve aux coordonnées ${lightX}, ${lightY} ; choisissez une direction parmi les suivantes : N (Nord) ; NE (Nord-Est) ; E (Est) ; SE (Sud-Est) ; S (Sud) ; SW (Sud-Ouest) ; W (Ouest) ; NW (Nord-Ouest).`
    );
  }

}

console.log(`Voici vos coordonnées finales : ${initialTX}, ${initialTY}`);
