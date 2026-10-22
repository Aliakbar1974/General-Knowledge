// ============================================================
// 🌍 WORLD GENERAL KNOWLEDGE
// MCQ BANK — PART 10
// Geography
// 20 Questions + Learning Mode + Exam Mode
// 15 Seconds per Question
// Sound Engine + Facebook Return + Result Screen
// ============================================================


// ============================================================
// FACEBOOK POST URL
// ============================================================

const FACEBOOK_POST_URL = "https://www.facebook.com/photo/?fbid=122121218049435742&set=a.122102731923435742";


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
// MCQ BANK — PART 10
// Questions 20
// Space and Astronomy
// ============================================================


const quizData = [
  {
    id: "WS036",
    question: "সূর্য কোন ধরনের জ্যোতিষ্ক?",
    options: ["নক্ষত্র", "গ্রহ", "উপগ্রহ", "ধূমকেতু"],
    answer: 0,
    explanation: "সূর্য একটি নক্ষত্র। এটি নিজস্ব আলো ও তাপ উৎপন্ন করে।",
    example: "সূর্যের আলো ও তাপ পৃথিবীতে প্রাণের অস্তিত্ব বজায় রাখতে সাহায্য করে।"
  },
  {
    id: "WS037",
    question: "সৌরজগতের বৃহত্তম গ্রহ কোনটি?",
    options: ["শনি", "বৃহস্পতি", "পৃথিবী", "নেপচুন"],
    answer: 1,
    explanation: "বৃহস্পতি সৌরজগতের বৃহত্তম গ্রহ।",
    example: "বৃহস্পতি একটি গ্যাসীয় দৈত্য গ্রহ।"
  },
  {
    id: "WS038",
    question: "সৌরজগতের ক্ষুদ্রতম গ্রহ কোনটি?",
    options: ["মঙ্গল", "শুক্র", "বুধ", "পৃথিবী"],
    answer: 2,
    explanation: "আটটি স্বীকৃত গ্রহের মধ্যে বুধ সবচেয়ে ছোট।",
    example: "বুধ সূর্যের সবচেয়ে কাছের গ্রহও।"
  },
  {
    id: "WS039",
    question: "পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ কোনটি?",
    options: ["ফোবোস", "টাইটান", "ইউরোপা", "চাঁদ"],
    answer: 3,
    explanation: "চাঁদ পৃথিবীর একমাত্র প্রাকৃতিক উপগ্রহ।",
    example: "চাঁদ পৃথিবীকে প্রদক্ষিণ করে।"
  },
  {
    id: "WS040",
    question: "সূর্যের সবচেয়ে কাছের গ্রহ কোনটি?",
    options: ["বুধ", "শুক্র", "পৃথিবী", "মঙ্গল"],
    answer: 0,
    explanation: "বুধ সূর্যের সবচেয়ে কাছের গ্রহ।",
    example: "সূর্য থেকে গ্রহগুলোর ক্রমের প্রথমটি হলো বুধ।"
  },
  {
    id: "WS041",
    question: "লাল গ্রহ নামে পরিচিত কোনটি?",
    options: ["শুক্র", "মঙ্গল", "বৃহস্পতি", "বুধ"],
    answer: 1,
    explanation: "পৃষ্ঠের আয়রন অক্সাইডের কারণে মঙ্গল গ্রহকে লাল দেখায়।",
    example: "মঙ্গল গ্রহের পৃষ্ঠে লালচে ধুলা রয়েছে।"
  },
  {
    id: "WS042",
    question: "পৃথিবী থেকে দেখলে সৌরজগতের সবচেয়ে উজ্জ্বল গ্রহ কোনটি?",
    options: ["বৃহস্পতি", "মঙ্গল", "শুক্র", "শনি"],
    answer: 2,
    explanation: "শুক্র গ্রহের ঘন মেঘ সূর্যের আলো প্রচুর প্রতিফলিত করে, তাই এটি সাধারণত সবচেয়ে উজ্জ্বল গ্রহ হিসেবে দেখা যায়।",
    example: "শুক্রকে ভোরে বা সন্ধ্যায় উজ্জ্বল আলোকবিন্দুর মতো দেখা যেতে পারে।"
  },
  {
    id: "WS043",
    question: "বলয় বা রিং-এর জন্য সবচেয়ে বিখ্যাত গ্রহ কোনটি?",
    options: ["শনি","নেপচুন","বৃহস্পতি","ইউরেনাস"],
    answer: 0,
    explanation: "শনি তার সুস্পষ্ট ও বিস্তৃত বলয়ব্যবস্থার জন্য বিশেষভাবে পরিচিত।",
    example: "শনির বলয় মূলত বরফের কণা, ধূলিকণা ও পাথুরে পদার্থ দিয়ে গঠিত।"
  },
  {
    id: "WS044",
    question: "প্রথম কৃত্রিম উপগ্রহের নাম কী?",
    options: ["Sputnik 1", "Apollo 11", "Explorer 1", "Vostok 1"],
    answer: 0,
    explanation: "Sputnik 1 ছিল পৃথিবীর কক্ষপথে পাঠানো প্রথম কৃত্রিম উপগ্রহ।",
    example: "সোভিয়েত ইউনিয়ন ১৯৫৭ সালে Sputnik 1 উৎক্ষেপণ করে।"
  },
  {
    id: "WS045",
    question: "প্রথম মানুষ হিসেবে মহাকাশে যান কে?",
    options: ["নীল আর্মস্ট্রং", "ইউরি গ্যাগারিন", "জন গ্লেন", "অ্যালান শেপার্ড"],
    answer: 1,
    explanation: "ইউরি গ্যাগারিন ১৯৬১ সালে মহাকাশে যাওয়া প্রথম মানুষ হন।",
    example: "তিনি Vostok 1 মহাকাশযানে পৃথিবী প্রদক্ষিণ করেন।"
  },
  {
    id: "SP141",
    question: "সূর্যের আলো পৃথিবীতে পৌঁছাতে প্রায় কত সময় লাগে?",
    options: ["২ মিনিট", "২০ মিনিট", "৮ মিনিট ২০ সেকেন্ড", "১ ঘণ্টা"],
    answer: 2,
    explanation: "সূর্য থেকে পৃথিবীতে আলো পৌঁছাতে গড়ে প্রায় ৮ মিনিট ২০ সেকেন্ড লাগে।",
    example: "সূর্য থেকে পৃথিবীর গড় দূরত্ব প্রায় ১৫ কোটি কিলোমিটার।"
  },
  {
    id: "SP142",
    question: "পৃথিবী সূর্যকে একবার প্রদক্ষিণ করতে প্রায় কত সময় নেয়?",
    options: ["২৪ ঘণ্টা", "৩০ দিন", "৪৮ ঘণ্টা", "৩৬৫ দিন ৬ ঘণ্টা"],
    answer: 3,
    explanation: "পৃথিবীর একবার সূর্যকে প্রদক্ষিণ করতে প্রায় ৩৬৫ দিন ৬ ঘণ্টা লাগে।",
    example: "এই অতিরিক্ত সময়ের হিসাব থেকেই অধিবর্ষের ধারণা এসেছে।"
  },
  {
    id: "SP143",
    question: "পৃথিবী নিজ অক্ষে একবার ঘুরতে প্রায় কত সময় নেয়?",
    options: ["১২ ঘণ্টা", "৩৬৫ দিন", "২৪ ঘণ্টা", "৩০ দিন"],
    answer: 2,
    explanation: "সৌরদিন হিসেবে পৃথিবী নিজ অক্ষে একবার ঘুরতে প্রায় ২৪ ঘণ্টা নেয়।",
    example: "পৃথিবীর আবর্তনের কারণে দিন ও রাত হয়।"
  },
  {
    id: "SP144",
    question: "পৃথিবীর অক্ষ কক্ষপথের লম্বের তুলনায় প্রায় কত ডিগ্রি হেলে আছে?",
    options: ["১৫.৫°", "২২.৫°", "২৫.৫°", "২৩.৫°"],
    answer: 3,
    explanation: "পৃথিবীর অক্ষ কক্ষপথের লম্বের তুলনায় প্রায় ২৩.৫° হেলে আছে।",
    example: "পৃথিবীর অক্ষের এই হেলানো অবস্থান ঋতু পরিবর্তনের একটি প্রধান কারণ।"
  },
  {
    id: "SP145",
    question: "সূর্যগ্রহণ ঘটে যখন—",
    options: ["চাঁদ পৃথিবী ও সূর্যের মাঝখানে থাকে", "পৃথিবী সূর্য ও চাঁদের মাঝখানে থাকে", "সূর্য পৃথিবীর চারদিকে ঘোরে", "পৃথিবী চাঁদের আড়ালে থাকে"],
    answer: 0,
    explanation: "সূর্যগ্রহণের সময় চাঁদ সূর্য ও পৃথিবীর মাঝখানে এসে সূর্যের আলো আংশিক বা সম্পূর্ণভাবে আড়াল করে।",
    example: "পূর্ণ সূর্যগ্রহণে চাঁদ সূর্যের উজ্জ্বল দৃশ্যমান অংশ সম্পূর্ণ ঢেকে দিতে পারে।"
  },
  {
    id: "SP146",
    question: "চন্দ্রগ্রহণ ঘটে যখন—",
    options: ["চাঁদ সূর্য ও পৃথিবীর মাঝখানে থাকে", "পৃথিবী সূর্য ও চাঁদের মাঝখানে থাকে", "সূর্য চাঁদের পিছনে থাকে", "চাঁদ পৃথিবীর বাইরে চলে যায়"],
    answer: 1,
    explanation: "চন্দ্রগ্রহণের সময় পৃথিবী সূর্য ও চাঁদের মাঝখানে থাকে এবং পৃথিবীর ছায়া চাঁদের ওপর পড়ে।",
    example: "পূর্ণ চন্দ্রগ্রহণের সময় চাঁদ লালচে দেখাতে পারে।"
  },
  {
    id: "SP147",
    question: "নীল আর্মস্ট্রং চাঁদের পৃষ্ঠে অবতরণ করেন কোন সালে?",
    options: ["১৯৬৫", "১৯৭১", "১৯৬৯", "১৯৭২"],
    answer: 2,
    explanation: "নীল আর্মস্ট্রং ১৯৬৯ সালে Apollo 11 অভিযানে চাঁদের পৃষ্ঠে অবতরণ করেন।",
    example: "Apollo 11 চাঁদে অবতরণ করে ২০ জুলাই ১৯৬৯ সালে।"
  },
  {
    id: "SP148",
    question: "চাঁদের পৃষ্ঠে প্রথম সফল মানব অবতরণকারী অভিযান কোনটি?",
    options: ["Apollo 8", "Apollo 10", "Apollo 13", "Apollo 11"],
    answer: 3,
    explanation: "Apollo 11 ছিল চাঁদের পৃষ্ঠে মানুষকে সফলভাবে অবতরণ করানো প্রথম অভিযান।",
    example: "নীল আর্মস্ট্রং ও বাজ অলড্রিন চাঁদের পৃষ্ঠে হাঁটেন।"
  },
  {
    id: "SP149",
    question: "সৌরজগতের সবচেয়ে বড় প্রাকৃতিক উপগ্রহ কোনটি?",
    options: ["টাইটান", "গ্যানিমিড", "ইউরোপা", "ক্যালিস্টো"],
    answer: 1,
    explanation: "বৃহস্পতির উপগ্রহ গ্যানিমিড সৌরজগতের সবচেয়ে বড় প্রাকৃতিক উপগ্রহ।",
    example: "গ্যানিমিড আকারে বুধ গ্রহের চেয়েও বড়, যদিও এর ভর কম।"
  },
  {
    id: "SP150",
    question: "প্লুটোকে বর্তমানে কী হিসেবে শ্রেণিবদ্ধ করা হয়?",
    options: ["গ্রহ", "নক্ষত্র", "উপগ্রহ", "বামন গ্রহ"],
    answer: 3,
    explanation: "আন্তর্জাতিক জ্যোতির্বিজ্ঞান সংঘের শ্রেণিবিন্যাস অনুযায়ী প্লুটো একটি বামন গ্রহ।",
    example: "প্লুটো নেপচুনের কক্ষপথের বাইরের কুইপার বেল্ট অঞ্চলে অবস্থিত।"
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