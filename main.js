const btnJouer = document.querySelector('.btnJouer');
const btnRejouer = document.querySelector('.btnRejouer');

btnJouer.addEventListener('click', jouer);
btnRejouer.addEventListener('click', jouer);


// Sections de la partie
const resultatBox = document.querySelector('.resultatsWrapper');
const scoreBox = document.querySelector('.scoreboardWrapper');

// Section Résultats 
const victoire = document.querySelector('.victoireText');
const defaite = document.querySelector('.defaiteText');
const nul = document.querySelector('.nulText');


// Section des choix du jeu
const jeuChoix = document.querySelector('.jeuChoix');
const btnRoche = document.querySelector('.choix_Roche');
const btnPapier = document.querySelector('.choix_Papier');
const btnCiseaux = document.querySelector('.choix_Ciseaux');

btnRoche.addEventListener('click', choixRoche);
btnPapier.addEventListener('click', choixPapier);
btnCiseaux.addEventListener('click', choixCiseaux);


// Joueur
let joueurChoix;
let joueurScore = 0;
const joueurChoixHtml = document.querySelector('.joueurChoix');
const joueurScoreHtml = document.querySelector('.joueurScore');
joueurScoreHtml.innerHTML = joueurScore;


// Ordinateur
let ordiChoix;
let ordiScore = 0;
const ordiChoixHtml = document.querySelector('.ordiChoix');
const ordiScoreHtml = document.querySelector('.ordiScore');
ordiScoreHtml.innerHTML = ordiScore;


function jouer() {
    jeuChoix.style.display = "flex";
    btnJouer.style.display = 'none';
    btnRejouer.style.display = 'inline';
    reset();
}

function reset() {
    ordiChoix = 'Reset';
    console.log('Choix ordi -> ' + ordiChoix);
    joueurChoix = 'Reset';
    console.log('Choix joueur -> ' + joueurChoix);
    nul.style.display = 'none';
    victoire.style.display = 'none';
    defaite.style.display = 'none';
    resultatBox.style.display = 'none';
}

function choixRoche() {
    choixOrdinateur();
    joueurChoix = 'Roche';
    console.log ( joueurChoix + ' VS ' + ordiChoix);
    letsPlay();
}

function choixPapier() {
    choixOrdinateur();
    joueurChoix = 'Papier';
    console.log ( joueurChoix + ' VS ' + ordiChoix);
    letsPlay();
}

function choixCiseaux() {
    choixOrdinateur();
    joueurChoix = 'Ciseaux';
    console.log ( joueurChoix + ' VS ' + ordiChoix);
    letsPlay();
}

function choixOrdinateur() {
    const tableauChoix = ["Roche", "Papier", "Ciseaux"];
    const hasard = Math.floor(Math.random() * 3);
    ordiChoix = tableauChoix[hasard];
}

function letsPlay() {
    if (joueurChoix === ordiChoix) {
        resultat = "Nul";
        console.log(resultat);
        console.log(ordiScore, joueurScore)
        scoreBox.style.display = 'block';
        jeuChoix.style.display = "none";
        resultatBox.style.display = "block";
        joueurChoixHtml.innerHTML = joueurChoix;
        ordiChoixHtml.innerHTML = ordiChoix;
        nul.style.display = 'inline';

    } else if ((joueurChoix === "Roche" && ordiChoix === "Ciseaux") || (joueurChoix === "Papier" && ordiChoix === "Roche") || (joueurChoix === "Ciseaux" && ordiChoix === "Papier") ) {
        resultat = "Victoire";
        console.log(resultat);
        joueurScore++;
        joueurScoreHtml.innerHTML = joueurScore;
        scoreBox.style.display = 'block';
        jeuChoix.style.display = "none";
        resultatBox.style.display = "block";
        joueurChoixHtml.innerHTML = joueurChoix;
        ordiChoixHtml.innerHTML = ordiChoix;
        victoire.style.display = 'inline';


    } else {
        resultat = "Défaite";
        console.log(resultat);
        ordiScore++;
        ordiScoreHtml.innerHTML = ordiScore;
        scoreBox.style.display = 'block';
        jeuChoix.style.display = "none";
        resultatBox.style.display = "block";
        joueurChoixHtml.innerHTML = joueurChoix;
        ordiChoixHtml.innerHTML = ordiChoix;
        defaite.style.display = 'inline';
    }
}


