const playBtn = document.getElementById('play-btn');
const homeContainer=document.getElementById('home');
const gameContainer = document.getElementById('game');
const endContainer = document.getElementById('end');
const highscoresBtn = document.getElementById('high-score-btn');
const highscoresContainer = document.getElementById('highScores');
const homeBtn = document.getElementById('home-btn');

// Hiding and Showing home/game/end/highscore Containers
playBtn.onclick = function () {
    homeContainer.parentElement.classList.add('hidden');
    gameContainer.parentElement.classList.remove('hidden');
    endContainer.parentElement.classList.add('hidden');
    homeBtn.classList.remove('hidden');
}
highscoresBtn.onclick = function () {
    highscoresContainer.parentElement.classList.remove('hidden');
    homeContainer.parentElement.classList.add('hidden');
    gameContainer.parentElement.classList.add('hidden');
    homeBtn.classList.remove('hidden');
}
homeBtn.onclick = function () {
    highscoresContainer.parentElement.classList.add('hidden');
    homeContainer.parentElement.classList.remove('hidden');
    endContainer.parentElement.classList.add('hidden');
    gameContainer.parentElement.classList.add('hidden');
    homeBtn.classList.add('hidden');
}


// Game script
const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptinganswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choice1: "strings",
        choice2: "booleans",
        choice3: "alerts",
        choice4: "numbers",
        answer: 3,
    },
    {
        question: "The condition in an if / else statement is enclosed with______.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4:"square brackets",
        answer: 3,
    },
    {
        question: "Arrays in JavaScript can be used to store______.",
        choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4:"all of the above",
        answer: 4,
    },
    {
        question:"String values must be enclosed within ______ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4:"parenthesis",
        answer: 3,
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4:"console.log",
        answer: 4,
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}

getNewQuestions = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)
        endContainer.parentElement.classList.remove('hidden');
        // return window.location.assign('/end.html')
        return gameContainer.parentElement.classList.add('hidden')
        

    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width= `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    
    availableQuestions.splice(questionsIndex, 1)

        acceptinganswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptinganswers) return

        acceptinganswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestions()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame ()

// End page Script
const username = document.querySelector('#username')
const saveScore = document.querySelector('#saveScore')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
})

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)
    
    highScores.sort((a,b) => {
        return b.score - a.score
    })

    highScores.splice(5)

    localStorage.setItem('highScores', JSON.stringify(highScores))
    resetQuiz()
}

resetQuiz = () => { 
    console.log("am I an idiot")
    endContainer.parentElement.classList.add('hidden');
    highscoresContainer.parentElement.classList.remove('hidden');

}
// High Scores Script
const highScoresList = document.querySelector('#highScoresList')
const highScoresLocal = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
highScoresLocal.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')



































































































// const Questions = [{
//     id: 0,
//     q: "Commonly used data types DO NOT include:",
//     a: [{ text: "strings", isCorrect: false},
//         {text: "booleans", isCorrect: false},
//         {text: "alerts", isCorrect: true},
//         {text: "numbers", isCorrect: false}
//     ]
// },
// {
//     id: 1,
//     q: "The condition in an if / else statement is enclosed with______.",
//     a: [{ text: "quotes", isCorrect: false},
//         {text: "curly brackets", isCorrect: false},
//         {text: "parenthesis", isCorrect: true},
//         {text: "square brackets", isCorrect: false}
//     ]
// },
// {
//     id: 2,
//     q: "Arrays in JavaScript can be used to store______.",
//     a: [{ text: "numbers and strings", isCorrect: false},
//         {text: "other arrays", isCorrect: false},
//         {text: "booleans", isCorrect: false},
//         {text: "all of the above", isCorrect: true}
//     ]
// },
// {
//     id: 3,
//     q: "String values must be enclosed within ______ when being assigned to variables.",
//     a: [{ text: "commas", isCorrect: false},
//         {text: "curly brackets", isCorrect: false},
//         {text: "quotes", isCorrect: true},
//         {text: "parenthesis", isCorrect: false}
//     ]
// },
// {
//     id: 4,
//     q: "A very useful tool used during development and debugging for printing content to the debugger is:",
//     a: [{ text: "JavaScript", isCorrect: false},
//         {text: "terminal/bash", isCorrect: false},
//         {text: "for loops", isCorrect: false},
//         {text: "console.log", isCorrect: true}
//     ]
// }]
// // set start
// var start = true;
// //iterate, perform repeatedly, cycles through questions
// function iterate (id) {
//     //Geting the result display section
//     var result = document.getElementsByClassName("result");
//     result[0].innerText = "";
//     //getting the question
//     const question = document.getElementById("question");
//     //setting the question text
//     question.innerText = Questions [id].q;
//     //getting the options
//     const op1 = document.getElementById('op1');
//     const op2 = document.getElementById('op2');
//     const op3 = document.getElementById('op3');
//     const op4 = document.getElementById('op4');
//     //providing option text
//     op1.innerText = Questions[id].a[0].text;
//     op2.innerText = Questions[id].a[1].text;
//     op3.innerText = Questions[id].a[2].text;
//     op4.innerText = Questions[id].a[3].text;
//     //providing the true or false value to the options
//     op1.value = Questions[id].a[0].isCorrect;
//     op2.value = Questions[id].a[1].isCorrect;
//     op3.value = Questions[id].a[2].isCorrect;
//     op4.value = Questions[id].a[3].isCorrect;

//     var selected = "";
//     var sel = "mediumpurple"
//     var resting ="indigo"
//     // Show selection for op1
//     op1.addEventListener("click", () => {
//         op1.style.backgroundColor = sel;
//         op2.style.backgroundColor = resting;
//         op3.style.backgroundColor = resting;
//         op4.style.backgroundColor = resting;
//         selected = op1.value;
//     })
  
//     // Show selection for op2
//     op2.addEventListener("click", () => {
//         op1.style.backgroundColor = resting;
//         op2.style.backgroundColor = sel;
//         op3.style.backgroundColor = resting;
//         op4.style.backgroundColor = resting;
//         selected = op2.value;
//     })
  
//     // Show selection for op3
//     op3.addEventListener("click", () => {
//         op1.style.backgroundColor = resting;
//         op2.style.backgroundColor = resting;
//         op3.style.backgroundColor = sel;
//         op4.style.backgroundColor = resting;
//         selected = op3.value;
//     })
  
//     // Show selection for op4
//     op4.addEventListener("click", () => {
//         op1.style.backgroundColor = resting;
//         op2.style.backgroundColor = resting;
//         op3.style.backgroundColor = resting;
//         op4.style.backgroundColor = sel;
//         selected = op4.value;
// })
// }

// if (start) {
//     iterate("0");
// }

// // Next button and question
// const next = document.getElementsByClassName('next')[0];
// var id = 0;
  
// next.addEventListener("click", () => {
//     start = false;
//     if (id < 5) {
//         id++;
//         iterate(id);
//         console.log(id);
//     }
// })
