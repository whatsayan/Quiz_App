const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris"
    },
    {
      question: "What is 4 + 7?",
      options: ["10", "11", "12", "13"],
      answer: "11"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Mars", "Jupiter", "Venus", "Saturn"],
      answer: "Jupiter"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");
  const submitButton = document.getElementById("submit-btn");
  
  function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsElement.innerHTML = "";
  
    question.options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = option;
      li.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(li);
    });
  }
  
  function checkAnswer(selectedOption) {
    const question = questions[currentQuestion];
  
    if (selectedOption === question.answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    questionElement.style.display = "none";
    optionsElement.style.display = "none";
    submitButton.style.display = "none";
  
    resultElement.textContent = `You scored ${score} out of ${questions.length} questions.`;
  }
  
  submitButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("li.selected");
    if (selectedOption) {
      const answer = selectedOption.textContent;
      checkAnswer(answer);
    }
  });
  
  showQuestion();
  