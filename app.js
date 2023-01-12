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

let a = 0;
let storage = [myObject1, myObject2, myObject3];

function f() {
    document.getElementById("a1").style.backgroundColor = "purple";
    let r = 0;
    while (r < 1000) {
        r++;
    }
    var text = document.getElementById('span1').innerText;
    if (text === storage[a].answer) {
        document.getElementById("a1").style.backgroundColor = "green";
    } else {
        document.getElementById("a1").style.backgroundColor = "red";
        let text1 = document.getElementById("a2");
        let text2 = document.getElementById("a3");
        let text3 = document.getElementById("a4");
        if (text1 === storage[a].answer) {
            document.getElementById("a2").style.backgroundColor = "green";
        } else if (text2 === storage[a].answer) {
            document.getElementById("a3").style.backgroundColor = "green";
        } else if (text3 === storage[a].answer) {
            document.getElementById("a4").style.backgroundColor = "green";
        }
    }
}

function g() {
    document.getElementById("a2").style.backgroundColor = "purple";
    let r = 0;
    while (r < 1000) {
        r++;
    }
    var text = document.getElementById('span2').innerText;
    if (text === storage[a].answer) {
        document.getElementById("a2").style.backgroundColor = "green";
    } else {
        document.getElementById("a2").style.backgroundColor = "red";
        let text1 = document.getElementById("a1");
        let text2 = document.getElementById("a3");
        let text3 = document.getElementById("a4");
        if (text1 === storage[a].answer) {
            document.getElementById("a1").style.backgroundColor = "green";
        } else if (text2 === storage[a].answer) {
            document.getElementById("a3").style.backgroundColor = "green";
        } else if (text3 === storage[a].answer) {
            document.getElementById("a4").style.backgroundColor = "green";
        }
    }
}

function h() {
    document.getElementById("a3").style.backgroundColor = "purple";
    let r = 0;
    while (r < 1000) {
        r++;
    }
    var text = document.getElementById('span3').innerText;
    if (text === storage[a].answer) {
        document.getElementById("a3").style.backgroundColor = "green";
    } else {
        document.getElementById("a3").style.backgroundColor = "red";
        let text1 = document.getElementById("a1");
        let text2 = document.getElementById("a2");
        let text3 = document.getElementById("a4");
        if (text1 === storage[a].answer) {
            document.getElementById("a1").style.backgroundColor = "green";
        } else if (text2 === storage[a].answer) {
            document.getElementById("a2").style.backgroundColor = "green";
        } else if (text3 === storage[a].answer) {
            document.getElementById("a4").style.backgroundColor = "green";
        }
    }
}

function i() {
    document.getElementById("a4").style.backgroundColor = "purple";
    let r = 0;
    while (r < 1000) {
        r++;
    }
    var text = document.getElementById('span4').innerText;
    if (text === storage[a].answer) {
        document.getElementById("a4").style.backgroundColor = "green";
    } else {
        document.getElementById("a4").style.backgroundColor = "red";
        let text1 = document.getElementById("a1");
        let text2 = document.getElementById("a2");
        let text3 = document.getElementById("a3");
        if (text1 === storage[a].answer) {
            document.getElementById("a1").style.backgroundColor = "green";
        } else if (text2 === storage[a].answer) {
            document.getElementById("a2").style.backgroundColor = "green";
        } else if (text3 === storage[a].answer) {
            document.getElementById("a3").style.backgroundColor = "green";
        }
    }
}


function init() {
    var nomJoueur = prompt("Entrez un nom");

    alert("Vous disposez de 30 secondes pour répondre à un maximum de questions");
    alert("Vous disposez de 7 secondes par questions");
    document.getElementById("NomDeJoueur").innerHTML = nomJoueur;

    initialise_questions();
}

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
    a++;
    if (a < 3) {
        setTimeout("initialise_questions()", 10000);
    }

    // console.log(stockage);
}