const data = [
    {
        question: "CSS stands for ?",
        a: "Cascading start sheet",
        b: "Capacity style sheet",
        c: "Cascading style sheet",
        d: "Command start sheet",
        correct: "c"
    },
    {
        question: "JS stands for ?",
        a: "Java start",
        b: "Java Script",
        c: "Just Start",
        d: "Just Script",
        correct: "b"
    },
    {
        question: "HTML stands for ?",
        a: "Hyper text markup language",
        b: "Hype try made language",
        c: "high text markup language",
        d: "hyper text madeup language",
        correct: "a"
    }
]

const quizContainer = document.getElementById("quiz");

var questionText = document.getElementById("question");
var answer = document.querySelectorAll(".answer");

var aText = document.getElementById("a_text");
var bText = document.getElementById("b_text");
var cText = document.getElementById("c_text");
var dText = document.getElementById("d_text");
var submit = document.getElementById("submit");
let score = 0;

let i = 0;
Load();
function Load() {
    deSelection();
    const currentData = data[i];
    questionText.innerText = currentData.question;
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
    dText.innerText = currentData.d;
}
function selection() {
    let ans;
    answer.forEach(a => {
        if (a.checked) {
            ans = a.id;
        }
    }
    )
    return ans;
}

function deSelection() {
    answer.forEach(a => {
        a.checked = false;
    })
}

submit.addEventListener("click", () => {
    const userAns = selection();
    if (userAns) {
        if (userAns == data[i].correct) {
            score++;
        }
        i++;
        if (i < data.length) {
            Load();
        }
        else {
            quizContainer.innerHTML = `<h2>You have Scored: ${score} / ${data.length} </h2> 
            <button onClick="location.reload()">Reload</button>`;
        }
    }
})

