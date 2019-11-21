var nb= nb_aleatoire(1, 100);
var nombreDessai = 10;
var saisie;
var message = 'entre 1 et 100';

document.getElementById("bouton").addEventListener()

function nb_aleatoire(min, max)
{
    var nb = min + (max-min+1)*Math.random();//
    return Math.floor(nb);//pour avoir un nombre entier
}

do{
    saisie = prompt(message);//pour afficher la boîte de dialogue
    nombreDessai= 10 ;//pour définir le nombre d'essai

    if(saisie>nb)// si la saisie est supérieur au nombre alors "c'est moins"
        message ="C'est moins";
    else//pour tout le reste c'est plus!!

        message = " C'est plus ! !";

}

while (saisie != nb);//a partir du moment où  la saisie est différente du nombre aléatoire

alert('bravo tu as gagné !');//quand la condition est exacte


function manche(min, max)
{
    var nb = nb_aleatoire(min, max);
    var nombreDessai =10;
    var saisie;
    var message = 'entre 1 et 100';

    do{
        saisie = prompt(message);
        if(saisie ==null) return 0;

        nombreDessai;
        if (saisie>nb)
            message = "c'est moins! ";
        else
            message = " c'est plus !";
    }
    while(saisie != nb);

    return nombreDessai;
}



function partie(min, max)
{

    var nombreDessai= 10;
    var score;
    var continuer;
    var bestscore = 0;

    do {
        score = manche(min, max)
        if (score)
        {
            nombreDessai;
            if (score < bestscore || bestscore == 0);
            bestscore = score;
            continuer=confirm( 'Tu as gagné en' + score + 'coups!! Jouer encore ?');
        }
    else
        continuer = false;
    }
    while(continuer);
    alert ("Tu as gagné en" + score + "manche(s).\n)Ton meilleur score est de" + bestscore + "coups !");
    return bestscore;

}





