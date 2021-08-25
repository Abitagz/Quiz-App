const quizData = [
    {
      question: "When was William Shakespeare born?",
      a: "25 September 1580",
      b: "23 April 1564",
      c: "12 June 1600",
      d: "30 October",
      correct: "b"
    }, {
      question: "When was euro introduced as legal currency on the world market?",
      a: "1 January 1999",
      b: "20 January 2000",
      c: "12 June 1998",
      d: "1 February 1999",
      correct: "a"
    }, {
      question: "What is the largest freshwater lake in the world?",
      a: "lake Superior",
      b: "Nile",
      c: "Lake Chad",
      d: "Lake Balaton",
      correct: "a"
    }, {
      question: "What is the seventh planet far from the sun?",
      a: "Earth",
      b: "Mars",
      c: "Saturn",
      d: "Uranus",
      correct: "d"
    }, {
      question: "What is the world's longest river?",
      a: "Pacific",
      b: "Amazon",
      c: "Columbia",
      d: "Nile",
      correct: "d"
    }, {
      question: "What is the diameter of Earth?",
      a: "10,000miles",
      b: "8,000miles",
      c: "2000km",
      d: "None of the above",
      correct: "b"
    }, {
      question: "Who played Neo in The Matrix?",
      a: "Peter Jackson",
      b: "David Ray",
      c: "Keanu Reeves",
      b: "Denzel Washington",
      correct: "c"
    }, {
      question: "Who directed the Lord of the Ring trilogy?",
      a: "Peter Jackson",
      b: "Andrew Peter",
      c: "Reo Galvin",
      d: "Bob Andrew",
      correct: "a"
    }, {
      question: "What is John Leach famous for making?",
      a: "Music",
      b: "Art",
      c: "Dance",
      d: "Pottery",
      correct: "d"
    }, {
      question: "What dose the musical term 'piano' mean?",
      a: "To dance",
      b: "Sing",
      c: "To be played softly",
      d: "Perform",
      correct: "c"
    }
  ]

  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const nextBtn = document.getElementById("next");
  

  let currentQuiz = 0;

  loadQuiz();

  function loadQuiz() {

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d; 

  
  
  }

  nextBtn.addEventListener("click", () => {
    currentQuiz++;

    loadQuiz();
  });

  