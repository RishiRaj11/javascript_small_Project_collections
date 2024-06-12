const quizQuestion=[
    {
        question:"What is the Capital of France ?",
        options:[
            {text:"Paris",correct:true},
            {text:"Barlin",correct:false},
            {text:"Madrid",correct:false},
            {text:"Rome",correct:false}
        ]
    },
    {
        question:"What is the Capital of France ?",
        options:[
            {text:"Paris",correct:true},
            {text:"Barlin",correct:false},
            {text:"Madrid",correct:false},
            {text:"Rome",correct:false}
        ]
    },
    {
        question:"What is the Capital of France ?",
        options:[
            {text:"Paris",correct:true},
            {text:"Barlin",correct:false},
            {text:"Madrid",correct:false},
            {text:"Rome",correct:false}
        ]
    }
]

const questionElement=document.getElementById("question");
const answerbutton=document.getElementById("answer");
const nextButton=document.getElementById("btn-next");

let currentQIndex=0;
let score=0;
function startQuiz(){
    currentQIndex=0;
    score=0;
    nextButton.style.display="next"
    showQuestions();
}

function showQuestions(){
    resetState();
    let currentQuestion= quizQuestion[currentQIndex];
    let questionNo=currentQIndex+1;
    questionElement.innerHTML=questionNo+". "+currentQuestion.question
    currentQuestion.options.forEach((answer)=>{
            let button=document.createElement("button");
            button.innerHTML=answer.text;
            button.classList.add("btn");
            answerbutton.appendChild(button);
            if(answer.correct){
                button.dataset.correct=answer.correct;
            }
            button.addEventListener("click",selectAnswer)

    })

}

function resetState(){
    nextButton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild)

    }
}

function selectAnswer(e){
let selectedBtn=e.target;
let isCorrect=selectedBtn.dataset.correct==="true";
if(isCorrect){
   selectedBtn.classList.add("correct");
   score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerbutton.children).forEach((optionButton)=>{
      if(optionButton.dataset.correct==="true"){
        optionButton.classList.add("correct");
      }
      optionButton.disabled=true;
})

nextButton.style.display="block"

}
function handleNextButton(){
    currentQIndex++;
    if(currentQIndex<quizQuestion.length){
      showQuestions();
    }else{
        showsScore();
    }
}

function showsScore(){
    resetState();
    questionElement.innerHTML=`Your scored ${score} out of ${quizQuestion.length}`;
    nextButton.innerHTML="Play Again"
    nextButton.style.display="block"
}

nextButton.addEventListener("click",()=>{
    if(currentQIndex<quizQuestion.length){
        handleNextButton();

    }else{
        startQuiz()
    }
});

startQuiz();
