const questions = [
    {
        question: 'What is the capital of France?',
        answer: [
            {text: 'France', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Delhi', correct: false},
            {text: 'New York', correct: false},
        ]
    },
    {
        question: 'how many fingers do you have in a head?',
        answer: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true},
            {text: '5', correct: false},
        ]
    },
    {
        question: 'What is the capital of France?',
        answer: [
            {text: 'France', correct: false},
            {text: 'Paris', correct: true},
            {text: 'Delhi', correct: false},
            {text: 'New York', correct: false},
        ]
    },
    {
        question: 'how many fingers do you have in a head?',
        answer: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: true},
            {text: '5', correct: false},
        ]
    },
]


const questionElem = document.querySelector(".qus")
const option = document.querySelector(".options")
const nextBtn = document.querySelector(".btn")

let score = 0;
let questionIndex = 0

const start =()=>{
    score = 0;
    questionIndex = 0;
    nextBtn.textContent = "Next";
    displayQues();
}
const displayQues =()=>{
    reset()
    let displayQuestion = questions[questionIndex]
    let displayNo = questionIndex+1;
    questionElem.innerHTML = displayNo +". "+ displayQuestion.question

    displayQuestion.answer.forEach(answers=>{
        const button = document.createElement("button")
        button.innerHTML = answers.text;
        button.classList.add("option")
        option.appendChild(button)
        if(answers.correct){
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click",selectAnswer)
    })
}
const reset = ()=>{
    nextBtn.style.display="noun"
    while(option.firstChild){
        option.removeChild(option.firstChild)
    }
}
const selectAnswer =(event)=>{
    const selectedBtn = event.target
    const correct = selectedBtn.dataset.correct === "true";
    if(correct){
        selectedBtn.classList.add("correct")
        score++
    }else{
        selectedBtn.classList.add("inCorrect")
    }
   Array.from(option.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct")
    }
    button.disabled = true
   })
   nextBtn.style.display = "flex"
 
}

const showScore = ()=>{
    questionElem.innerHTML = "Game Over! Your Score is: "+score
    nextBtn.innerHTML="Play Again"
   nextBtn.style.display = "flex"
}

const handleNextButton =()=>{
    questionIndex++
    if(questionIndex < questions.length){
        displayQues()
    }else{
        showScore()
    }
}
nextBtn.addEventListener("click",()=>{
    if(questionIndex < questions.length){
        handleNextButton()
    }else{
        alert("Game Over! Your Score is: "+score)
        start()
    }
 
})
start()