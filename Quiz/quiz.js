const data = {
    question: "what is the full form of css",
    a: "casscade styling sheet",
    b: "class sheet atyle",
    c: "none of these",
    d: "all of these",
    correct: "a"

};
{
    question: "What is full form of dom?";
    a: "document object model";
    b: "direct object model";
    c: "a or b";
    d: "none";
    correct: "a"

}
{
    question: "what is the full form of html";
    a: "Hyper text markup language";
    b: "hi class mark up language";
    c: "both a and b";
    d: "none";
    correct: "a"
}

const quiz = document.getElementById("quiz");
const question = documenty.getElementById("question");
const first = document.getElementById("a_text");
const second = document.getElementById("b_text");
const third = document.getElementById("c_text");
const fourth = document.getElementById("d_text");
const btn = document.getElementById("submit");
const ans = document.querySelectorAll(".ans");


let i = 0;
function Load() {
    const currentData = data[i];
    questionText.innerText = currentData.question;
    aText.innerText = currentData.a;
    bText.innerText = currentData.b;
    cText.innerText = currentData.c;
    dText.innerText = currentData.d;

}
function selection() {
    let ans;
    ans.forEach(a => {
        if (a.checked) {
            ans = a.id;
        }
    })
    return ans;


}

SubmitEvent.addEventListner("click", () => {
    const userAns = selection();
    if (userAns) {
        if (userAns === data[i].correct) {
            score++;
        }
        i++;
        if (i < data.length) {
            Load();
        }
        else {
            quiz - container.innerHtml = <h2>You have scored:${score}/ ${i.length}</h2>
        }
    }
})
Load();
    
  

    }
