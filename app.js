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
var myObject4 = {
    question: "Qui a gagné la coupe du monde 2022 ?",
    reponses: ['Argentine', 'France', 'Brésil', 'Croatie'],
    answer: 'Argentine'
}
var myObject5 = {
    question: "Qui est le meilleur joueur de l'histoire du football ?",
    reponses: ['Cristiano Ronaldo', 'Lionel Messi', 'Pelé', 'Maradona Diego'],
    answer: 'Pelé'
}
var myObject6 = {
    question: '561*21+236%45 = ',
    reponses: ['Aucune', '20', '154', '76'],
    answer: 'Aucune'
}
var myObject7 = {
    question: '16*13 = ',
    reponses: ['456', '231', '765', 'Aucune'],
    answer: 'Aucune'
}
var myObject8 = {
    question: '2+2',
    reponses: ['4', '6', '1', '6'],
    answer: '4'
}
var myObject9 = {
    question: '3*4',
    reponses: ['23', '29', '19', '12'],
    answer: '12'
}
var myObject10 = {
    question: '9*9',
    reponses: ['45', '63', '51', '81'],
    answer: '81'
}
let storage = [myObject1, myObject2, myObject3, myObject4, myObject5, myObject6, myObject7, myObject8, myObject9, myObject10];
let a = 0;
let res = 0;

function f() {
    document.getElementById("a1").style.backgroundColor = "yellow";
    var text = document.getElementById('span1').innerText;
    setTimeout(() => {
        if (text === storage[a - 1].answer) {
            document.getElementById("a1").style.backgroundColor = "green";
            res++;
        } else {
            document.getElementById("a1").style.backgroundColor = "red";
            let text1 = document.getElementById("span2").innerText;
            let text2 = document.getElementById("span3").innerText;
            let text3 = document.getElementById("span4").innerText;
            console.log(storage[a - 1].answer);
            if (text1 === storage[a - 1].answer) {
                document.getElementById("a2").style.backgroundColor = "green";
            } else if (text2 === storage[a - 1].answer) {
                document.getElementById("a3").style.backgroundColor = "green";
            } else if (text3 === storage[a - 1].answer) {
                document.getElementById("a4").style.backgroundColor = "green";
            }
        }
    }, 2500);
}

function g() {
    document.getElementById("a2").style.backgroundColor = "yellow";
    var text = document.getElementById('span2').innerText;
    setTimeout(() => {
        if (text === storage[a - 1].answer) {
            document.getElementById("a2").style.backgroundColor = "green";
            res++;
        } else {
            document.getElementById("a2").style.backgroundColor = "red";
            let text1 = document.getElementById("span1").innerText;
            let text2 = document.getElementById("span3").innerText;
            let text3 = document.getElementById("span4").innerText;
            if (text1 === storage[a - 1].answer) {
                document.getElementById("a1").style.backgroundColor = "green";
            } else if (text2 === storage[a - 1].answer) {
                document.getElementById("a3").style.backgroundColor = "green";
            } else if (text3 === storage[a - 1].answer) {
                document.getElementById("a4").style.backgroundColor = "green";
            }
        }
    }, 2500);
}

function h() {
    document.getElementById("a3").style.backgroundColor = "yellow";
    var text = document.getElementById('span3').innerText;
    setTimeout(() => {
        if (text === storage[a - 1].answer) {
            document.getElementById("a3").style.backgroundColor = "green";
            res++;
        } else {
            document.getElementById("a3").style.backgroundColor = "red";
            let text1 = document.getElementById("span1").innerText;
            let text2 = document.getElementById("span2").innerText;
            let text3 = document.getElementById("span4").innerText;
            if (text1 === storage[a - 1].answer) {
                document.getElementById("a1").style.backgroundColor = "green";
            } else if (text2 === storage[a - 1].answer) {
                document.getElementById("a2").style.backgroundColor = "green";
            } else if (text3 === storage[a - 1].answer) {
                document.getElementById("a4").style.backgroundColor = "green";
            }
        }
    }, 2500);
}

function i() {
    document.getElementById("a4").style.backgroundColor = "yellow";
    var text = document.getElementById('span4').innerText;
    setTimeout(() => {
        if (text === storage[a - 1].answer) {
            document.getElementById("a4").style.backgroundColor = "green";
            res++;
        } else {
            document.getElementById("a4").style.backgroundColor = "red";
            let text1 = document.getElementById("span1").innerText;
            let text2 = document.getElementById("span2").innerText;
            let text3 = document.getElementById("span3").innerText;
            if (text1 === storage[a - 1].answer) {
                document.getElementById("a1").style.backgroundColor = "green";
            } else if (text2 === storage[a - 1].answer) {
                document.getElementById("a2").style.backgroundColor = "green";
            } else if (text3 === storage[a - 1].answer) {
                document.getElementById("a3").style.backgroundColor = "green";
            }
        }
    }, 2500);

}

function init() {
    var nomJoueur = prompt("Entrez un nom");

    // alert("Vous disposez de 30 secondes pour répondre à un maximum de questions");
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

    dcpt();
    var text1 = document.getElementById('span1').innerText;
    var text2 = document.getElementById('span2').innerText;
    var text3 = document.getElementById('span3').innerText;
    var text4 = document.getElementById('span4').innerText;
    a++;
    if (a < 10) {
        setTimeout("initialise_questions()", 10000);
        console.log(res);
        document.getElementById('resultat').innerHTML = res;
    }
}

let j = 10;

function dcpt() {
    if (j === 0) {
        j = 10;
    }
    setTimeout("dcpt()", 1000);
    document.formu.cpt.value = j;
    j--;
}