const data = {
    questions: [
        {
            question: "Which TV show is about cooking meth?",
            answer: " Breaking Bad"
        },
        {
            question: "Which TV show is about 4 nerd friends",
            answer: "The big bang theory"
        },
        {
            question: "Which TV s nerd friends",
            answer: "The big bang theory"
        },
    
    ]
    
}

let i = 0;
const button = document.getElementById("check-answer");
const paragraph = document.createElement("p");
const container = document.getElementById("question-answer");
//button.onclick(flip);

function flip() {
    console.log(i)
    paragraph.innerText = data.questions[i].answer;
}

function nextQuestion() {
    paragraph.innerText = data.questions[i].question;
    i++;
}

function displayQuestion() {
    const currentQuestion = data.questions[i];
    paragraph.innerText = currentQuestion.question;
    container.appendChild(paragraph);
    
};