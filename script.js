
let lightX
let lightY

let initialTX
let initialTY

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

  let playerChoiceLightX = prompt(`Aidez Thor à rejoindre l'éclair de pouvoir ! Tout d'abord, donnez une position "X" à l'éclair entre 0 et 39 :`);

  let playerChoiceLightY = prompt(`Ensuite, donnez une position "X" à l'éclair entre 0 et 17 :`);

  let playerChoiceThorX = prompt(`Maintenant, donnez une position "X" à Thor entre 0 et 39 :`);

  let playerChoiceThorY = prompt(`Et enfin, donnez une position "Y" à Thor entre 0 et 17 :`);


  // The Power Lightning oordinates that Thor must reach according to the player's choice
lightX = Number(playerChoiceLightX);
lightY = Number(playerChoiceLightY);

// Thor's cordinates at the beginning of his journey according to the player's choice
initialTX = Number(playerChoiceThorX);
initialTY = Number(playerChoiceThorY);

  let message = prompt(
    "Choisissez une direction parmi les suivantes : N (Nord) ; NE (Nord-Est) ; E (Est) ; SE (Sud-Est) ; S (Sud) ; SW (Sud-Ouest) ; W (Ouest) ; NW (Nord-Ouest)."
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
    } else if (initialTX === 4 && initialTY === 8) {
      for (let i = 3 ; i > 0; i--) {
        if (i > 0){
          message = prompt(`Oups ! Vous venez de tomber sur Hela et vous n'avez plus que ${i - 1}/3 vies ; choisissez vite une autre direction :`);
        } else if (i === 0) {
          return alert("Mince, vous venez de croiser Hela, c'est fini pour vous !");
        }
      }
    } else {
      message = prompt(
        `Vous n'y êtes pas encore : choisissez une direction parmi les suivantes : N (Nord) ; NE (Nord-Est) ; E (Est) ; SE (Sud-Est) ; S (Sud) ; SW (Sud-Ouest) ; W (Ouest) ; NW (Nord-Ouest).`
      );
    }
  } 
  endGame = false;
}

lancerJeu();
NaN;
console.log(`Voici vos coordonnées finales : ${initialTX}, ${initialTY}`);
