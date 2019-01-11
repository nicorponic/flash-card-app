const data = {
  TV: {
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
        question: "Which TV show is about cars",
        answer: "Top Gear"
      },
      {
        question: "Which TV show is about law",
        answer: "Suits"
      },
      {
        question: "Which TV show is about yellow sponge",
        answer: "Sponge Bob"
      }
    ]
  },
  music: {
    questions: [
      {
        question: "Who sings Hello?",
        answer: "Adelle"
      },
      {
        question: "Who sings Baby",
        answer: "Justin Bieber"
      },
      {
        question: "Who sings Bohemian Raphsody",
        answer: "Queen"
      },
      {
        question: "Who sings Single Ladies",
        answer: "Beyonce"
      },
      {
        question: "Who sings Hades",
        answer: "Kalmah"
      }
    ]
  }
};

let i = 0;
const button = document.getElementById("check-answer");
const paragraph = document.createElement("p");
const container = document.getElementById("question-answer");
//button.onclick(flip);

const dropdown = document.getElementById("categoryList");
let selectedCategory = dropdown.options[dropdown.selectedIndex].value;
 
function changeCategory() {

    selectedCategory = dropdown.options[dropdown.selectedIndex].value;
    

}
//const changeCategory = selectedCategory
//selectedCategory.onchange = dropdown.options[dropdown.selectedIndex].value;

function flip() {
  paragraph.innerText = data[selectedCategory].questions[i].answer;
}

function randomizer() {
  const currentQuestion = i;
  let randomizer = Math.floor(Math.random() * data[selectedCategory].questions.length);

  while (randomizer === currentQuestion) {
    randomizer = Math.floor(Math.random() * data[selectedCategory].questions.length);
  }

  i = randomizer;
}


function nextQuestion() {
  randomizer();

  //let randomize = Math.floor(Math.random() * 2 Math.floor(i))
  //i++;
  paragraph.innerText = data[selectedCategory].questions[i].question;
}

function displayQuestion() {
  //randomizer();
  const currentQuestion = data[selectedCategory].questions[i]; 
  paragraph.innerText = currentQuestion.question;
  container.appendChild(paragraph);
}


