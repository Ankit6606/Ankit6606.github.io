import { questions } from './questions.js';

let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) {
    startBtn.addEventListener("click", startQuestion);
  }
});

function startQuestion() {
  const main = document.getElementById("main");
  main.innerHTML = `
    <div class="question" id="question">${questions[0]}</div>
    <div class="buttons">
      <button class="yes-btn" id="yesBtn">Yes</button>
      <button class="no-btn" id="noBtn">No</button>
    </div>
  `;

  document.getElementById("yesBtn").addEventListener("click", handleYes);
  document.getElementById("noBtn").addEventListener("click", handleNo);
}

function handleNo() {
  index = (index + 1) % questions.length;
  const question = document.getElementById("question");
  question.innerText = questions[index];
  question.style.animation = "none";
  void question.offsetWidth;  // Re-trigger the animation
  question.style.animation = "fadeInUp 0.5s ease";
}

function handleYes() {
  triggerConfetti();

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = '❤️';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

  document.body.style.transition = "background 2s ease";
  document.body.style.background = "linear-gradient(to right, #ff9a9e, #fad0c4)";

  setTimeout(() => {
    const main = document.getElementById("main");
    main.innerHTML = `
      <div class="final-screen animated-message">
        <h2>🎉 Wohoooo, congrats on this decision 🎉</h2>
        <p>Here's to endless ice cream sharings and papri chat moments,</p>
        <p>and looking forward to endless restaurant hoppings (not on Saturday ofc 😆)</p>
      </div>
    `;
  }, 2000);
}

function triggerConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDuration = (1 + Math.random() * 2) + "s";
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}
