const quizData = [
    {
      question: "1. JavaScript is the programming language of the _____.",
      options: ["Desktop", 
      "Mobile", 
      "Web", 
      "Server"],
      correctAnswer: "Web"
    },
    {
      question: "2. Which type of JavaScript language is _____?",
      options: ["Object-oriented", 
      "Object-based", 
      "Functional programming", 
      "All of the above"],
      correctAnswer: "Object-based"
    },
    {
      question: " Which symbol is used separate JavaScript statements??",
      options: ["Comma (,)", 
      "Semicolon (;)", 
      "Hyphen (_)", 
      "Hippopotamus"],
      correctAnswer: "Semicolon (;)"
    },
    {
      question:" Which JavaScript method is used to write HTML output?",
      options: ["document.write()",
      "document.output()",
      "console.log()",
      "document.writeHTML()"],
      correctAnswer:" document.write()"
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
  });
  
  function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-button");
    const resultElement = document.getElementById("result");
    const scoreButton = document.getElementById("score-button");
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
  
    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.textContent = option;
      optionButton.onclick = () => checkAnswer(option);
      optionsElement.appendChild(optionButton);
    });
  
    nextButton.disabled = true;
    resultElement.style.display = "none";
  }
  
  function checkAnswer(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    const nextButton = document.getElementById("next-button");
    const resultElement = document.getElementById("result");
  
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
      resultElement.textContent = "Correct!";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = `Wrong! The correct answer is ${currentQuestion.correctAnswer}.`;
      resultElement.style.color = "red";
    }
  
    resultElement.style.display = "block";
    nextButton.disabled = false;
  }
  
  function nextQuestion() {
    const nextButton = document.getElementById("next-button");
    const resultElement = document.getElementById("result");
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
      nextButton.disabled = true;
      resultElement.style.display = "none";
    } else {
      showFinalResult();
    }
  }
  
  function showFinalResult() {
    const quizElement = document.getElementById("quiz");
    const resultElement = document.getElementById("result");
    const nextButton = document.getElementById("next-button");
  
    quizElement.style.display = "none";
    resultElement.style.display = "block";
    resultElement.textContent = `Quiz complete! Your score is ${score} out of ${quizData.length}.`;
    nextButton.style.display = "none";
  }
  




// ... (unchanged code)
