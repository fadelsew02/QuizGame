let a = 0;
/*--------------------------- Tableaux contenant les différentes questions ainsi que des propositions de réponses----------- */
var myObject1 = {
    question: "Quelle est la capitale politique du Bénin ?",
    reponses: ['Cotonou', 'Porto-Novo', 'Ouidah', 'Abomey'],
    answer: 'Porto-Novo'
}

var myObject2 = {
    question: "Combien de communes a le Bénin ?",
    reponses: ['77', '12', '80', '76'],
    answer: '77'
}

var myObject3 = {
    question: "2*2-4+2%2 = ?",
    reponses: ['1', '2', '8', '0'],
    answer: '1'
}

let storage = [myObject1, myObject2, myObject3];

let stockage = ['none'];

function initialise_questions() {
    /*-----------------------Définition de différentes variables ciblant les éventuels éléments que le joueur peut cliquer---------*/
    const answer1 = document.querySelector('.answer1');
    const answer2 = document.querySelector('.answer2');
    const answer4 = document.querySelector('.answer4');
    const answer3 = document.querySelector('.answer3');


    console.log(a);

    answer1.style.backgroundColor = "#ff702a";
    answer2.style.backgroundColor = "#ff702a";
    answer3.style.backgroundColor = "#ff702a";
    answer4.style.backgroundColor = "#ff702a";
    /*----------------------- Impression sur la page web des questions et des éléments de réponses----------------- */
    document.getElementById("question1").innerHTML = storage[a].question;
    document.getElementById("span1").innerHTML = storage[a].reponses[0];
    document.getElementById("span2").innerHTML = storage[a].reponses[1];
    document.getElementById("span3").innerHTML = storage[a].reponses[2];
    document.getElementById("span4").innerHTML = storage[a].reponses[3];

    var text1 = document.getElementById('span1').innerText;
    var text2 = document.getElementById('span2').innerText;
    var text3 = document.getElementById('span3').innerText;
    var text4 = document.getElementById('span4').innerText;

    /*---------------------------- Gestion des cliques------------------- */
    answer1.addEventListener('click', () => {
        document.getElementById("a1").style.backgroundColor = "purple";
        stockage.push(text1);
    });

    answer2.addEventListener('click', () => {
        document.getElementById("a2").style.backgroundColor = "purple";
        stockage.push(text2);
    });

    answer3.addEventListener('click', () => {
        document.getElementById("a3").style.backgroundColor = "purple";
        stockage.push(text3);
    });

    answer4.addEventListener('click', () => {
        document.getElementById("a4").style.backgroundColor = "purple";
        stockage.push(text4);
    });

    a++;
    if (a < 3) {
        setTimeout("initialise_questions()", 7000);
    }

    console.log(stockage);
}


let b = 0;

function afficheResultats() {
    const answer1 = document.querySelector('.answer1');
    const answer2 = document.querySelector('.answer2');
    const answer4 = document.querySelector('.answer4');
    const answer3 = document.querySelector('.answer3');

    answer1.style.backgroundColor = "#ff702a";
    answer2.style.backgroundColor = "#ff702a";
    answer3.style.backgroundColor = "#ff702a";
    answer4.style.backgroundColor = "#ff702a";
    /*----------------------- Impression sur la page web des questions et des éléments de réponses----------------- */
    document.getElementById("question1").innerHTML = storage[b].question;
    document.getElementById("span1").innerHTML = storage[b].reponses[0];
    document.getElementById("span2").innerHTML = storage[b].reponses[1];
    document.getElementById("span3").innerHTML = storage[b].reponses[2];
    document.getElementById("span4").innerHTML = storage[b].reponses[3];

    var text1 = document.getElementById('span1').innerText;
    var text2 = document.getElementById('span2').innerText;
    var text3 = document.getElementById('span3').innerText;
    var text4 = document.getElementById('span4').innerText;

    if (text1 === stockage[b]) {
        document.getElementById("a1").style.backgroundColor = "purple";
        let r = 0;
        while (r < 1000) {
            r++;
        }
        if (text1 === storage.answer) {
            document.getElementById("a1").style.backgroundColor = "Green";
        } else {
            document.getElementById("a1").style.backgroundColor = "red";
        }
    } else if (text2 === stockage[b]) {
        document.getElementById("a2").style.backgroundColor = "purple";
        let r = 0;
        while (r < 1000) {
            r++;
        }
        if (text2 === storage.answer) {
            document.getElementById("a2").style.backgroundColor = "Green";
        } else {
            document.getElementById("a2").style.backgroundColor = "red";
        }
    } else if (text3 === stockage[b]) {
        document.getElementById("a3").style.backgroundColor = "purple";
        let r = 0;
        while (r < 1000) {
            r++;
        }
        if (text3 === storage.answer) {
            document.getElementById("a3").style.backgroundColor = "Green";
        } else {
            document.getElementById("a3").style.backgroundColor = "red";
        }
    } else if (text4 === stockage[b]) {
        document.getElementById("a4").style.backgroundColor = "purple";
        let r = 0;
        while (r < 1000) {
            r++;
        }
        if (text4 === storage.answer) {
            document.getElementById("a4").style.backgroundColor = "Green";
        } else {
            document.getElementById("a4").style.backgroundColor = "red";
        }
    }

    // var test = [text1, text2, text3, text4];

    // for (let s = 0; s < 4; s++) {
    //     if (test[s] === storage.answer) {
    //         document.querySelector('.propo').style.backgroundColor = "Green";
    //     }
    // }

    b++;
    if (b < 3) {
        setTimeout("afficheResultats()", 7000);
    }

}


function f() {
    var nomJoueur = prompt("Entrez un nom");

    alert("Vous disposez de 30 secondes pour répondre à un maximum de questions");
    alert("Vous disposez de 7 secondes par questions");
    document.getElementById("NomDeJoueur").innerHTML = nomJoueur;

    initialise_questions();
}