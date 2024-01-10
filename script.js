let btnValide = document.getElementById("btnValide");
let btnRecherche = document.getElementById("btnRecherche");
let btnRefresh = document.getElementById("btnRefresh");

let input_text = document.getElementById("input_text");
let listeDeroulante = document.getElementById("choix_option");
let listeDeroulante_type = document.getElementById("option_recherche");

let listeAPuces = document.getElementById("listeAPuces");



let tousElementsLi = document.querySelectorAll('li');
let typeSelectionne = listeDeroulante.value;


let tabNotes = [
    {texte:"C'est la première note", type: "note"},
];

let tabNotesFiltre = [
    {texte:"C'est la première note filtrée", type: "note"},
];




document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
});

//Ajouter une ligne dans la liste 
document.addEventListener('DOMContentLoaded', function () {
    btnValide.addEventListener('click', function (event) {
        event.preventDefault();
        ajouteUnElementDansLaListe(input_text.value, listeDeroulante.value);
    });
});

function ajouteUnElementDansLaListe(texte, type) {
 
    //Ajout de l'élément dans le tableau
    tabNotes.push({texte: "- " + texte, type: type});

    //Vider la liste
    while (listeAPuces.firstChild) {
        listeAPuces.removeChild(listeAPuces.firstChild);
    }

    for(var i = 0; i<tabNotes.length;i++)
    {
        var newLi = document.createElement("li");
        newLi.textContent = tabNotes[i].texte;
        newLi.classList.add(tabNotes[i].type);

        listeAPuces.appendChild(newLi);
    }

    //console.log(tabNotes);

}

//Supression d'un élément de la liste
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

//Filtrage des éléments de la liste 
document.addEventListener('DOMContentLoaded', function () {

    btnRecherche.addEventListener('click', function (event) {
        event.preventDefault();   

        let typeRecherche = listeDeroulante_type.value;
        
        tabNotesFiltre = [];

        // Vider la liste
        while (listeAPuces.firstChild) {
            listeAPuces.removeChild(listeAPuces.firstChild);
        }

        console.log("apres vidage " + listeAPuces);

        for(var i = 0; i<tabNotes.length;i++)
        {
            console.log("type de la recherche : " + typeRecherche);
            console.log("type note : " + tabNotes[i].type);
           

            if(tabNotes[i].type === typeRecherche)
            {
                tabNotesFiltre.push(tabNotes[i]);    
                console.log(tabNotesFiltre);
                
            }
        }

        for(var i = 0; i<tabNotesFiltre.length;i++)
        {
            var newLi = document.createElement("li");
            newLi.textContent = tabNotesFiltre[i].texte;
            newLi.classList.add(tabNotesFiltre[i].type);

            listeAPuces.appendChild(newLi);
        }
        

    });

});
//Redimensionnement de la fenêtre

window.addEventListener('resize', function() {
    
    var largeurMinimale = 365; 
    
    if (window.innerWidth < largeurMinimale) {
        
        window.resizeTo(largeurMinimale, window.innerHeight);
    }
});
