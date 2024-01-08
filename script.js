let btnValide = document.getElementById("btnValide");
let btnRecherche = document.getElementById("btnRecherche");
let btnRefresh = document.getElementById("btnRefresh");

let input_text = document.getElementById("input_text");
let listeDeroulante = document.getElementById("choix_option");
let listeDeroulante_type = document.getElementById("option_recherche");

let listeAPuces = document.getElementById("listeAPuces");

let lstCourant = [];
let lstNote = [];
let lstEmail = [];
let lstTodo = [];

let listeChoisie = []; // Stockez les chaînes de caractères ici
let elementsChoisis = []; // Stockez les éléments HTML correspondants ici

function ajouteUnElementDansLaListe(input_text, listeDeroulante) {
    let itemSelectionne = listeDeroulante.value;
    console.log('l item selectionne est : ' + itemSelectionne);

    const newLi = document.createElement('li');
    newLi.classList.add(itemSelectionne);
    newLi.textContent = input_text.value;

    document.getElementById('listeAPuces').appendChild(newLi);

    lstCourant.push(input_text.value);

    // Stockez la chaîne de caractères et l'élément HTML correspondant
    listeChoisie.push(input_text.value);
   

    if (itemSelectionne == "note") {
        lstNote.push(input_text.value);
    } else {
        if (itemSelectionne == "email") {
            lstEmail.push(input_text.value);
        } else {
            lstTodo.push(input_text.value);
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    btnValide.addEventListener('click', function (event) {
        event.preventDefault();
        ajouteUnElementDansLaListe(input_text, listeDeroulante);
    });
});

document.addEventListener('DOMContentLoaded', function () {

    btnRecherche.addEventListener('click', function (event) {

        event.preventDefault();

        let typeSelectionne = listeDeroulante_type.value;

        while (listeAPuces.firstChild) {
            listeAPuces.removeChild(listeAPuces.firstChild);
        }

        console.log("la liste est vidée");

        if (typeSelectionne == "note") {
            listeChoisie = lstNote;
            console.log("la liste est 1");
        } else {
            if (typeSelectionne == "email") {
                listeChoisie = lstEmail;
                console.log("la liste est 2");
            } else {
                listeChoisie = lstTodo;
                console.log("la liste est 3");
            }
        }

        elementsChoisis = listeChoisie;
        // Affichez les éléments HTML stockés dans elementsChoisis
        elementsChoisis.forEach(function (element) {
            document.getElementById('listeAPuces').appendChild(element);
        });

    });
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function () {
    var maListe = document.getElementById('listeAPuces');

    maListe.addEventListener('click', function (event) {
        // Vérifiez si l'élément cliqué est un <li>
        if (event.target.tagName === 'LI') {
            // Récupérez l'élément <li> cliqué
            var elementClique = event.target;

            // Faites quelque chose avec l'élément cliqué, par exemple, affichez son texte
            console.log("Élément cliqué : " + elementClique.textContent);
            elementClique.remove();
        }
    });
});


