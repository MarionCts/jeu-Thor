// The Power Lightning oordinates that Thor must reach

const lightX = 3;
const lightY = 8;

// Thor's cordinates at the beginning of his journey

let initialTX = 3;
let initialTY = 6;

// Thor's new cordinates after the player's move

let d

// Boolean condition that will need to be changed to end the game

let endGame = true;

// The extreme cordinates of the 40 cases game

const mapMinX = 0;
const mapMinY = 0;
const mapMaxX = 39;
const mapMaxY = 17;

// The game starts here

function lancerJeu() {
  // On démarre en demandant au joueur de saisir une direction

  let message = prompt(
    "Aidez Thor à rejoindre l'éclair de pouvoir ! Choisissez une direction parmi les suivantes : N (Nord) ; NE (Nord-Est) ; E (Est) ; SE (Sud-Est) ; S (Sud) ; SW (Sud-Ouest) ; W (Ouest) ; NW (Nord-Ouest)."
  );

  // On démarre une boucle où on exécute la direction du joueur

  while (endGame === true) {
    d = message;
    
    if (d === "N") {
      initialTY -= 1;
      initialTX += 0;
    } else if (d === "E") {
      initialTX += 1;
      initialTX += 0;
    } else if (d === "S") {
      initialTY += 1;
      initialTX += 0;
    } else if (d === "W") {
      initialTX -= 1;
      initialTX += 0;
    } else if (d === "NE") {
      initialTY -= 1;
      initialTX += 1;
    } else if (d === "NW") {
      initialTY -= 1;
      initialTX -= 1;
    } else if (d === "SE") {
      initialTY += 1;
      initialTX += 1;
    } else if (d === "SW") {
      initialTY += 1;
      initialTX -= 1;
    }
    console.log(
      `En prenant la direction ${d}, vous avez atteri aux coordonnées ${initialTX}, ${initialTY}.`
    );

    if (initialTX === lightX && initialTY === lightY) {
      return alert("Victoire !");
    } else if (
      initialTX === mapMinX - 1 ||
      initialTY === mapMinY - 1 ||
      initialTX === mapMaxX + 1 ||
      initialTY === mapMaxY + 1
    ) {
      return alert("Défaite...");
    } else {
      let messageUpdate = prompt(
        `Vous n'y êtes pas encore : choisissez une direction parmi les suivantes : N (Nord) ; NE (Nord-Est) ; E (Est) ; SE (Sud-Est) ; S (Sud) ; SW (Sud-Ouest) ; W (Ouest) ; NW (Nord-Ouest).`
      );
    }
  } 
  endGame = false;
}

lancerJeu();
NaN;
console.log(`Voici vos coordonnées finales : ${initialTX}, ${initialTY}`);
