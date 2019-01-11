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
            question: "Which TV show is about 4 nerd friends",
            answer: "The big bang theory"
        },
    
    ]
    
}

let i = 0;
const paragraph = document.createElement("p");
paragraph.innerText = data.questions[i].question;

const container = document.getElementById("question-answer");
container.appendChild(paragraph);

const button = document.getElementById("check-answer");
//button.onclick(flip);

function flip(i) {
    paragraph.innerText = data.questions[i].answer;
}

function nextQuestion(i) {
    paragraph.innerText = data.questions.question[i++];
    console.log(i);
};