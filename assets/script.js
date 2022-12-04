const Questions = [{
    id: 0,
    q: "Commonly used data types DO NOT include:",
    a: [{ text: "strings", isCorrect: false},
        {text: "booleans", isCorrect: false},
        {text: "alerts", isCorrect: true},
        {text: "numbers", isCorrect: false}
    ]
},
{
    id: 1,
    q: "The condition in an if / else statement is enclosed with______.",
    a: [{ text: "quotes", isCorrect: false},
        {text: "curly brackets", isCorrect: false},
        {text: "parenthesis", isCorrect: true},
        {text: "square brackets", isCorrect: false}
    ]
},
{
    id: 2,
    q: "Arrays in JavaScript can be used to store______.",
    a: [{ text: "numbers and strings", isCorrect: false},
        {text: "other arrays", isCorrect: false},
        {text: "booleans", isCorrect: false},
        {text: "all of the above", isCorrect: true}
    ]
},
{
    id: 3,
    q: "String values must be enclosed within ______ when being assigned to variables.",
    a: [{ text: "commas", isCorrect: false},
        {text: "curly brackets", isCorrect: false},
        {text: "quotes", isCorrect: true},
        {text: "parenthesis", isCorrect: false}
    ]
},
{
    id: 4,
    q: "A very useful tool used during development and debugging for printing content to the debugger is:",
    a: [{ text: "JavaScript", isCorrect: false},
        {text: "terminal/bash", isCorrect: false},
        {text: "for loops", isCorrect: false},
        {text: "console.log", isCorrect: true}
    ]
}]
// set start
var start = true;
//iterate, perform repeatedly, cycles through questions
function iterate (id) {
    //Geting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";
    //getting the question
    const question = document.getElementById("question");
    //setting the question text
    question.innerText = Questions [id].q;
    //getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');
    //providing option text
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    //providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";
    var sel = "mediumpurple"
    var resting ="indigo"
    // Show selection for op1
    op1.addEventListener("click", () => {
        op1.style.backgroundColor = sel;
        op2.style.backgroundColor = resting;
        op3.style.backgroundColor = resting;
        op4.style.backgroundColor = resting;
        selected = op1.value;
    })
  
    // Show selection for op2
    op2.addEventListener("click", () => {
        op1.style.backgroundColor = resting;
        op2.style.backgroundColor = sel;
        op3.style.backgroundColor = resting;
        op4.style.backgroundColor = resting;
        selected = op2.value;
    })
  
    // Show selection for op3
    op3.addEventListener("click", () => {
        op1.style.backgroundColor = resting;
        op2.style.backgroundColor = resting;
        op3.style.backgroundColor = sel;
        op4.style.backgroundColor = resting;
        selected = op3.value;
    })
  
    // Show selection for op4
    op4.addEventListener("click", () => {
        op1.style.backgroundColor = resting;
        op2.style.backgroundColor = resting;
        op3.style.backgroundColor = resting;
        op4.style.backgroundColor = sel;
        selected = op4.value;
})
}

if (start) {
    iterate("0");
}

// Next button and question
const next = document.getElementsByClassName('next')[0];
var id = 0;
  
next.addEventListener("click", () => {
    start = false;
    if (id < 5) {
        id++;
        iterate(id);
        console.log(id);
    }
})
