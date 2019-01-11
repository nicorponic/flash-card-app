const questions = {
    category: "TV-Shows",
    question: "Which TV show is about cooking meth?",
    answer: " Breaking Bad"
}

const paragraph = document.createElement("p");
paragraph.innerText = questions.question;

const container = document.getElementById("question-answer");
container.appendChild(paragraph);

const button = document.getElementById("check-answer");
//button.onclick(flip);

function flip() {
    paragraph.innerText = questions.answer;
}