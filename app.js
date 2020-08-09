var questions = [
    {
        "question" : "The first governer general of Pakistan was : ",
        "option1" : "Iskander Mirza",
        "option2" : "Liaquat Ali Khan",
        "option3" : "General Ayub Khan",
        "option4" : "Muhammad Ali Jinah",
        "answer" : "d"
    },
    {
        "question" : "The first constitution of Pakistan was made in the year : ",
        "option1" : "1960",
        "option2" : "1956",
        "option3" : "1972",
        "option4" : "1949",
        "answer" : "b"
    },
    {
        "question" : "Objective resolution was passed in the year : ",
        "option1" : "1949",
        "option2" : "1945",
        "option3" : "1939",
        "option4" : "1940",
        "answer" : "a"
    },
    {
        "question" : "Quaid e Azam passed away after ______ months of independence ",
        "option1" : "12",
        "option2" : "15",
        "option3" : "13",
        "option4" : "10",
        "answer" : "c"
    },
    {
        "question" : "This period is declared as The golden period of Pakistan in history",
        "option1" : "1947-1952",
        "option2" : "1953-1957",
        "option3" : "1957-1960",
        "option4" : "1960-1965",
        "answer" : "d"
    },
    {
        "question" : "Liaquat Ali khan was assasinated in the year : ",
        "option1" : "1950",
        "option2" : "1951",
        "option3" : "1953",
        "option4" : "1952",
        "answer" : "b"
    },
    {
        "question" : "The book 'Now or never' is written by  : ",
        "option1" : "Chaudhry Rehmat Ali",
        "option2" : "Allama Iqbal",
        "option3" : "Lord Mountbatten",
        "option4" : "Khalilur Rehman Qamar",
        "answer" : "a"
    }
]

var quest=0;
var score=0
var totQuest=questions.length

var questCont=document.getElementById("quest")
var opt1=document.getElementById("opt1")
var opt2=document.getElementById("opt2")
var opt3=document.getElementById("opt3")
var opt4=document.getElementById("opt4")
var next=document.getElementById("btn")
var result=document.getElementById("result")
var quizBody=document.getElementById("quizBody")

function loadQuestion(questionIndex){
    var q=questions[questionIndex]
    questCont.textContent = (questionIndex + 1) + '. ' + q.question
    opt1.textContent = q.option1
    opt2.textContent = q.option2
    opt3.textContent = q.option3
    opt4.textContent = q.option4
}
function nextQuestion(){
    var selected=document.querySelector('input[type=radio]:checked')
    if(!selected){
        alert("Please select an answer ! ")
        return
    }
    if(questions[quest].answer==selected.value){
        score+=10
    }
    selected.checked=false
    quest++
    if(quest==totQuest-1){
        next.textContent="Result"
    }
    if(quest==totQuest){
        quizBody.style.display = "none"
        result.style.display = ""
        result.textContent="Your Score: " + score + "/70"
        return
    }
    loadQuestion(quest)
}
loadQuestion(quest)