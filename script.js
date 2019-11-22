
function f() {
    var message = "Choisi un nombre entre 1 et 100";
    var saisie;
    var nb = Math.floor(Math.random() * 100) + 1;
    var nombreDessai = 0;
    var affichage = document.getElementById("affichage");


    do {
        saisie = parseInt(prompt(message));//pour afficher la boîte de dialogue
        nombreDessai++;
        console.log(saisie);
        affichage.innerHTML += saisie;
        if (saisie > nb) // si la saisie est supérieur au nombre alors "c'est moins"
        {
            message = "C'est moins";

        }

        else if (saisie < nb)
        {
            message = " C'est plus !!";

        }

        else
        {
            continuer = confirm("bravo tu as gagné en " + nombreDessai + " coups! \nVeux tu rejouer ?");
            break;
        }

        if (nombreDessai >= 10)
        {
            alert(" PERDU !! ");
            break;
        }

    }

    while (saisie !== nb){}


}

document.getElementById("boutonstart").addEventListener("click", f);
f();

















