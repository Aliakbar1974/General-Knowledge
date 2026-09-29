// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 05
// World History
// 20 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122117346921435742&set=a.122102731923435742";


// ============================================================
// SOUND ENGINE
// ============================================================

const sounds = {
    start: new Audio("Sounds/Start.wav"),
    correct: new Audio("Sounds/Correct.wav"),
    wrong: new Audio("Sounds/Wrong.wav"),
    tryAgain: new Audio("Sounds/TryAgain.wav"),
    success: new Audio("Sounds/Success.wav"),
    victory: new Audio("Sounds/Victory.wav"),
    complete: new Audio("Sounds/Complete.wav")
};


function playSound(soundName) {
    const sound = sounds[soundName];
    if (!sound) return;

    sound.currentTime = 0;
    sound.play().catch(error => {
        console.log("Sound could not play:", error);
    });
}


// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 05
// Questions 1–20
// World History
// ============================================================

const quizData = [

  {
    id: "WH321",
    question: "ইউরোপের Renaissance-এর সূচনা প্রধানত কোন দেশে হয়েছিল?",
    options: [
      "ইতালি",
      "ইংল্যান্ড",
      "জার্মানি",
      "স্পেন"
    ],
    answer: 0,
    explanation: "ইউরোপীয় Renaissance বা পুনর্জাগরণের সূচনা প্রধানত ইতালিতে হয়েছিল।",
    example: "The Renaissance began primarily in Italy."
  },

  {
    id: "WH322",
    question: "Renaissance শব্দের অর্থ কী?",
    options: [
      "যুদ্ধ",
      "পুনর্জাগরণ",
      "বিপ্লব",
      "সংস্কার"
    ],
    answer: 1,
    explanation: "Renaissance একটি ফরাসি শব্দ, যার অর্থ পুনর্জাগরণ বা Rebirth.",
    example: "The Renaissance means a rebirth of art, culture, and learning."
  },

  {
    id: "WH323",
    question: "ছাপাখানা বা Printing Press-এর উন্নয়নের সঙ্গে কার নাম সবচেয়ে বেশি যুক্ত?",
    options: [
      "গ্যালিলিও",
      "নিউটন",
      "জোহানেস গুটেনবার্গ",
      "কোপার্নিকাস"
    ],
    answer: 2,
    explanation: "ইউরোপে আধুনিক মুদ্রণযন্ত্রের বিকাশের সঙ্গে জোহানেস গুটেনবার্গের নাম বিশেষভাবে যুক্ত।",
    example: "Johannes Gutenberg is closely associated with the development of the printing press in Europe."
  },

  {
    id: "WH324",
    question: "Protestant Reformation-এর সূচনার সঙ্গে কার নাম বিশেষভাবে যুক্ত?",
    options: [
      "জন ক্যালভিন",
      "ইরাসমাস",
      "টমাস মোর",
      "মার্টিন লুথার"
    ],
    answer: 3,
    explanation: "১৫১৭ সালে মার্টিন লুথারের 95 Theses প্রকাশ Protestant Reformation-এর সূচনার সঙ্গে বিশেষভাবে যুক্ত।",
    example: "Martin Luther is closely associated with the Protestant Reformation."
  },

  {
    id: "WH325",
    question: "মার্টিন লুথার তাঁর 95 Theses কোথায় প্রকাশ করেন?",
    options: [
      "উইটেনবার্গ",
      "রোম",
      "প্যারিস",
      "লন্ডন"
    ],
    answer: 0,
    explanation: "১৫১৭ সালে মার্টিন লুথার জার্মানির উইটেনবার্গে তাঁর 95 Theses প্রকাশ করেন।",
    example: "Martin Luther's 95 Theses were associated with Wittenberg."
  },

  {
    id: "WH326",
    question: "ফরাসি বিপ্লব শুরু হয় কোন সালে?",
    options: [
      "১৭৭৬",
      "১৭৮৯",
      "১৭৯৯",
      "১৮০৪"
    ],
    answer: 1,
    explanation: "ফরাসি বিপ্লব ১৭৮৯ সালে শুরু হয়।",
    example: "The French Revolution began in 1789."
  },

  {
    id: "WH327",
    question: "ফরাসি বিপ্লবের বিখ্যাত মূলমন্ত্র কোনটি?",
    options: [
      "Peace, Land, Bread",
      "One Nation, One Flag",
      "Liberty, Equality, Fraternity",
      "Freedom and Justice"
    ],
    answer: 2,
    explanation: "Liberty, Equality, Fraternity বা স্বাধীনতা, সাম্য ও ভ্রাতৃত্ব ফরাসি বিপ্লবের সঙ্গে ঐতিহাসিকভাবে যুক্ত বিখ্যাত মূলমন্ত্র।",
    example: "Liberty, Equality, Fraternity became the famous motto of the French Revolution."
  },

  {
    id: "WH328",
    question: "বাস্তিল দুর্গ আক্রমণ কোন তারিখে সংঘটিত হয়?",
    options: [
      "৪ জুলাই ১৭৭৬",
      "২৬ আগস্ট ১৭৮৯",
      "২১ জানুয়ারি ১৭৯৩",
      "১৪ জুলাই ১৭৮৯"
    ],
    answer: 3,
    explanation: "১৭৮৯ সালের ১৪ জুলাই প্যারিসের বাস্তিল দুর্গ আক্রমণ করা হয়।",
    example: "The Bastille was stormed on July 14, 1789."
  },

  {
    id: "WH329",
    question: "নেপোলিয়ন বোনাপার্ট কোন দেশের সম্রাট ছিলেন?",
    options: [
      "ফ্রান্স",
      "ইতালি",
      "স্পেন",
      "অস্ট্রিয়া"
    ],
    answer: 0,
    explanation: "নেপোলিয়ন বোনাপার্ট ফ্রান্সের সম্রাট ছিলেন।",
    example: "Napoleon Bonaparte was Emperor of France."
  },

  {
    id: "WH330",
    question: "নেপোলিয়নের চূড়ান্ত পরাজয় কোন যুদ্ধে ঘটে?",
    options: [
      "ট্রাফালগার",
      "ওয়াটারলু",
      "লিপজিগ",
      "অস্টারলিটজ"
    ],
    answer: 1,
    explanation: "১৮১৫ সালের ওয়াটারলুর যুদ্ধে নেপোলিয়নের চূড়ান্ত পরাজয় ঘটে।",
    example: "Napoleon suffered his final defeat at the Battle of Waterloo."
  },

  {
    id: "WH331",
    question: "আমেরিকার স্বাধীনতার ঘোষণা কোন সালে গৃহীত হয়?",
    options: [
      "১৭৭০",
      "১৭৮১",
      "১৭৭৬",
      "১৭৮৭"
    ],
    answer: 2,
    explanation: "আমেরিকার Declaration of Independence ১৭৭৬ সালের ৪ জুলাই গৃহীত হয়।",
    example: "The Declaration of Independence was adopted in 1776."
  },

  {
    id: "WH332",
    question: "আমেরিকার স্বাধীনতার ঘোষণাপত্রের প্রধান রচয়িতা হিসেবে কে পরিচিত?",
    options: [
      "জর্জ ওয়াশিংটন",
      "১৭৭৬",
      "আব্রাহাম লিংকন",
      "থমাস জেফারসন"
    ],
    answer: 3,
    explanation: "থমাস জেফারসন Declaration of Independence-এর প্রধান রচয়িতা হিসেবে পরিচিত।",
    example: "Thomas Jefferson is widely known as the principal author of the Declaration of Independence."
  },

  {
    id: "WH333",
    question: "আমেরিকার গৃহযুদ্ধের সময় প্রেসিডেন্ট কে ছিলেন?",
    options: [
      "জর্জ ওয়াশিংটন",
      "থমাস জেফারসন",
      "আব্রাহাম লিংকন",
      "উড্রো উইলসন"
    ],
    answer: 2,
    explanation: "১৮৬১–১৮৬৫ সালের আমেরিকার গৃহযুদ্ধের সময় যুক্তরাষ্ট্রের প্রেসিডেন্ট ছিলেন আব্রাহাম লিংকন।",
    example: "Abraham Lincoln was President of the United States during the American Civil War."
  },

  {
    id: "WH334",
    question: "আমেরিকার গৃহযুদ্ধ প্রধানত কোন বিষয়কে কেন্দ্র করে সংঘটিত হয়েছিল?",
    options: [
      "ধর্ম",
      "দাসপ্রথা ও অঙ্গরাজ্যগুলোর বিরোধ",
      "অভিবাসন",
      "ভাষা"
    ],
    answer: 1,
    explanation: "দাসপ্রথা, এর বিস্তার এবং অঙ্গরাজ্যগুলোর অধিকার ও ফেডারেল কর্তৃত্বের বিরোধ আমেরিকার গৃহযুদ্ধের প্রধান কারণগুলোর মধ্যে ছিল।",
    example: "Slavery and disputes over state and federal authority were central issues in the American Civil War."
  },

  {
    id: "WH335",
    question: "ইতালির একীকরণ আন্দোলনের সঙ্গে কোন নেতা বিশেষভাবে যুক্ত?",
    options: [
      "বিসমার্ক",
      "মেটার্নিখ",
      "গ্যারিবল্ডি",
      "চার্লেমেন"
    ],
    answer: 2,
    explanation: "জিউসেপ্পে গ্যারিবল্ডি ইতালির একীকরণ আন্দোলনের অন্যতম প্রধান নেতা ছিলেন।",
    example: "Giuseppe Garibaldi was a major figure in the unification of Italy."
  },

  {
    id: "WH336",
    question: "জার্মানির একীকরণে কোন নেতা গুরুত্বপূর্ণ ভূমিকা পালন করেন?",
    options: [
      "অটো ভন বিসমার্ক",
      "গ্যারিবল্ডি",
      "নেপোলিয়ন",
      "লুই ফিলিপ"
    ],
    answer: 0,
    explanation: "অটো ভন বিসমার্ক প্রুশিয়ার নেতৃত্বে জার্মানির একীকরণে গুরুত্বপূর্ণ ভূমিকা পালন করেন।",
    example: "Otto von Bismarck played a major role in German unification."
  },

  {
    id: "WH337",
    question: "অটো ভন বিসমার্ক কোন নীতির জন্য বিখ্যাত?",
    options: [
      "Open Door",
      "Blood and Iron",
      "New Deal",
      "Good Neighbor"
    ],
    answer: 1,
    explanation: "অটো ভন বিসমার্কের ১৮৬২ সালের বিখ্যাত 'Blood and Iron' বক্তৃতার সঙ্গে তাঁর শক্তিশালী রাষ্ট্রনীতি ও সামরিক শক্তিনির্ভর কৌশল বিশেষভাবে যুক্ত।",
    example: "Bismarck is famously associated with the policy of 'Blood and Iron.'"
  },

  {
    id: "WH338",
    question: "প্রথম বিশ্বযুদ্ধের তাৎক্ষণিক কারণ কী ছিল?",
    options: [
      "রুশ বিপ্লব",
      "আর্চডিউক ফ্রাঞ্জ ফার্ডিনান্ডের হত্যাকাণ্ড",
      "জার্মানির বিভাজন",
      "বার্লিন অবরোধ"
    ],
    answer: 1,
    explanation: "১৯১৪ সালে অস্ট্রিয়া-হাঙ্গেরির সিংহাসনের উত্তরাধিকারী আর্চডিউক ফ্রাঞ্জ ফার্ডিনান্ডের হত্যাকাণ্ড প্রথম বিশ্বযুদ্ধের তাৎক্ষণিক কারণ হিসেবে বিবেচিত।",
    example: "The assassination of Archduke Franz Ferdinand was the immediate trigger of World War I."
  },

  {
    id: "WH339",
    question: "ফ্রাঞ্জ ফার্ডিনান্ড কোথায় নিহত হন?",
    options: [
      "ভিয়েনা",
      "বার্লিন",
      "সারায়েভো",
      "বেলগ্রেড"
    ],
    answer: 2,
    explanation: "আর্চডিউক ফ্রাঞ্জ ফার্ডিনান্ড ১৯১৪ সালের ২৮ জুন সারায়েভোতে নিহত হন।",
    example: "Archduke Franz Ferdinand was assassinated in Sarajevo."
  },

  {
    id: "WH340",
    question: "প্রথম বিশ্বযুদ্ধ শেষ হয় কোন সালে?",
    options: [
      "১৯১৬",
      "১৯১৭",
      "১৯১৮",
      "১৯১৯"
    ],
    answer: 2,
    explanation: "প্রথম বিশ্বযুদ্ধ ১৯১৮ সালের ১১ নভেম্বর যুদ্ধবিরতির মাধ্যমে কার্যত শেষ হয়।",
    example: "World War I ended with the Armistice in 1918."
  }

];


// ============================================================
// GLOBAL VARIABLES
// ============================================================

let currentQuestion = 0;
let score = 0;
let selectedMode = "";
let timer;
let timeLeft = 15;
let answered = false;


// ============================================================
// DOM ELEMENTS
// ============================================================

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionNumber = document.getElementById("question-number");
const totalQuestions = document.getElementById("total-questions");

const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

const feedbackElement = document.getElementById("feedback");
const correctMessage = document.getElementById("correct-message");
const wrongMessage = document.getElementById("wrong-message");
const exampleText = document.getElementById("example-text");

const scoreElement = document.getElementById("score");
const percentageElement = document.getElementById("percentage");
const resultMessage = document.getElementById("result-message");

const statusElement = document.getElementById("status");
const socialMessage = document.querySelector(".social-message");


// ============================================================
// INITIAL SETUP
// ============================================================

if (totalQuestions) {
    totalQuestions.textContent = quizData.length;
}

if (quizScreen) {
    quizScreen.style.display = "none";
}

if (resultScreen) {
    resultScreen.style.display = "none";
}

if (feedbackElement) {
    feedbackElement.style.display = "none";
}


// ============================================================
// START QUIZ
// ============================================================

function startQuiz(mode) {
    selectedMode = mode;
    currentQuestion = 0;
    score = 0;
    answered = false;

    clearInterval(timer);

    if (startScreen) startScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";

    playSound("start");
    showQuestion();
}


// ============================================================
// SHOW QUESTION
// ============================================================

function showQuestion() {
    clearInterval(timer);
    answered = false;

    const q = quizData[currentQuestion];

    if (!q) {
        showResult();
        return;
    }

    if (questionNumber) questionNumber.textContent = currentQuestion + 1;
    if (totalQuestions) totalQuestions.textContent = quizData.length;

    if (progressBar) {
        const progress = ((currentQuestion + 1) / quizData.length) * 100;
        progressBar.style.width = progress + "%";
    }

    if (questionElement) questionElement.textContent = q.question;
    if (optionsElement) optionsElement.innerHTML = "";

    if (feedbackElement) feedbackElement.style.display = "none";
    if (correctMessage) correctMessage.textContent = "";
    if (wrongMessage) wrongMessage.textContent = "";
    if (exampleText) exampleText.textContent = "";

    // Create answer buttons (CSS Class answer-option অনুযায়ী মেলানো হয়েছে)
    q.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.className = "answer-option";
        button.type = "button";

        button.innerHTML = `
            <span class="option-letter">${String.fromCharCode(65 + index)}</span>
            <span class="option-text">${option}</span>
        `;

        button.addEventListener("click", function () {
            selectAnswer(index, button);
        });

        if (optionsElement) {
            optionsElement.appendChild(button);
        }
    });

    if (selectedMode === "exam") {
        timeLeft = 15;
        updateTimer();

        timer = setInterval(() => {
            timeLeft--;
            updateTimer();

            if (timeLeft <= 0) {
                clearInterval(timer);
                timeUp();
            }
        }, 1000);
    } else {
        if (timerElement) timerElement.textContent = "∞";
    }
}


// ============================================================
// TIMER DISPLAY
// ============================================================

function updateTimer() {
    if (!timerElement) return;

    timerElement.textContent = timeLeft;

    if (timeLeft <= 5) {
        timerElement.classList.add("timer-danger");
    } else {
        timerElement.classList.remove("timer-danger");
    }
}


// ============================================================
// SELECT ANSWER
// ============================================================

function selectAnswer(selectedIndex, clickedButton) {
    if (answered) return;
    answered = true;

    clearInterval(timer);

    const q = quizData[currentQuestion];
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (selectedIndex === q.answer) {
        score++;
        if (clickedButton) clickedButton.classList.add("correct");

        playSound("correct");

        if (correctMessage) correctMessage.textContent = "✓ সঠিক উত্তর!";
        if (wrongMessage) wrongMessage.textContent = "";

        if (selectedMode === "learning") {
            if (feedbackElement) feedbackElement.style.display = "block";
            if (exampleText && q.explanation) {
                exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
            }
        }
    } else {
        if (clickedButton) clickedButton.classList.add("wrong");
        if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

        playSound("wrong");

        if (wrongMessage) wrongMessage.textContent = "✗ ভুল উত্তর!";
        if (correctMessage) {
            correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
        }

        if (feedbackElement) feedbackElement.style.display = "block";
        if (exampleText && q.explanation) {
            exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
        }
    }

    showNextButton();
}


// ============================================================
// TIME UP
// ============================================================

function timeUp() {
    if (answered) return;
    answered = true;

    clearInterval(timer);

    const q = quizData[currentQuestion];
    const buttons = optionsElement ? optionsElement.querySelectorAll(".answer-option") : [];

    buttons.forEach(button => {
        button.disabled = true;
    });

    if (buttons[q.answer]) buttons[q.answer].classList.add("correct");

    playSound("tryAgain");

    if (wrongMessage) wrongMessage.textContent = "⏰ সময় শেষ!";
    if (correctMessage) {
        correctMessage.innerHTML = `সঠিক উত্তর: <strong>${q.options[q.answer]}</strong>`;
    }

    if (feedbackElement) feedbackElement.style.display = "block";
    if (exampleText && q.explanation) {
        exampleText.innerHTML = `<strong>ব্যাখ্যা:</strong> ${q.explanation}`;
    }

    showNextButton();
}


// ============================================================
// NEXT QUESTION BUTTON
// ============================================================

function showNextButton() {
    const oldButton = document.getElementById("next-question-btn");
    if (oldButton) oldButton.remove();

    const nextButton = document.createElement("button");
    nextButton.id = "next-question-btn";
    nextButton.className = "next-question-btn";
    nextButton.type = "button";

    if (currentQuestion < quizData.length - 1) {
        nextButton.textContent = "পরবর্তী প্রশ্ন →";
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.textContent = "ফলাফল দেখুন 🎉";
        nextButton.addEventListener("click", showResult);
    }

    if (quizScreen) {
        quizScreen.appendChild(nextButton);
    }
}


// ============================================================
// NEXT QUESTION
// ============================================================

function nextQuestion() {
    clearInterval(timer);
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}


// ============================================================
// SHOW RESULT
// ============================================================

function showResult() {
    clearInterval(timer);

    if (quizScreen) quizScreen.style.display = "none";
    if (resultScreen) resultScreen.style.display = "block";

    const nextButton = document.getElementById("next-question-btn");
    if (nextButton) nextButton.remove();

    const percentage = Math.round((score / quizData.length) * 100);

    if (scoreElement) scoreElement.textContent = `${score} / ${quizData.length}`;
    if (percentageElement) percentageElement.textContent = `${percentage}%`;

    if (resultMessage) {
        if (percentage >= 90) {
            resultMessage.textContent = "🏆 অসাধারণ! আপনার প্রস্তুতি খুবই ভালো।";
            playSound("victory");
        } else if (percentage >= 75) {
            resultMessage.textContent = "🌟 খুব ভালো! আরও একটু অনুশীলন করলে আরও ভালো করবেন।";
            playSound("success");
        } else if (percentage >= 50) {
            resultMessage.textContent = "👍 ভালো চেষ্টা! নিয়মিত অনুশীলন চালিয়ে যান।";
            playSound("complete");
        } else {
            resultMessage.textContent = "📚 আরও অনুশীলন করুন। পরবর্তী কুইজে আরও ভালো করবেন।";
            playSound("tryAgain");
        }
    }

    if (socialMessage) socialMessage.style.display = "block";
}


// ============================================================
// RETURN TO FACEBOOK
// ============================================================

function returnToFacebook() {
    if (FACEBOOK_POST_URL && FACEBOOK_POST_URL !== "PASTE_YOUR_FACEBOOK_POST_URL_HERE") {
        window.location.href = FACEBOOK_POST_URL;
    } else {
        alert("Facebook post link এখনো যোগ করা হয়নি।\n\nscript.js-এর FACEBOOK_POST_URL-এ আপনার Facebook post link বসান।");
    }
}


// ============================================================
// PLAY AGAIN
// ============================================================

function reloadQuiz() {
    clearInterval(timer);
    currentQuestion = 0;
    score = 0;
    answered = false;
    selectedMode = "";

    playSound("start");

    if (resultScreen) resultScreen.style.display = "none";
    if (quizScreen) quizScreen.style.display = "none";
    if (startScreen) startScreen.style.display = "block";
    if (statusElement) statusElement.textContent = "";
}


// ============================================================
// ANSWER DISTRIBUTION CHECK
// ============================================================

(function checkAnswerDistribution() {
    const distribution = [0, 0, 0, 0];

    quizData.forEach(q => {
        if (Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3) {
            distribution[q.answer]++;
        }
    });

    console.log(
        "Answer Distribution:",
        `A=${distribution[0]},`,
        `B=${distribution[1]},`,
        `C=${distribution[2]},`,
        `D=${distribution[3]}`
    );
})();