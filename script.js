const questions = [
  "Can I start by saying... I’m really sorry? 🥺",
  "I know I hurt you with my words… I didn’t mean to 💔",
  "You didn’t deserve my anger, you deserved my love ❤️",
  "If I could take it back, I would — in a heartbeat 💫",
  "You’re the calm I ruined — please let me fix that 🌷",
  "I promise to listen, to care, and to be gentler next time 🕊️",
  "Every second without your smile hurts more 😞",
  "Let’s replace the hurt with hugs and warm talks 🤗",
  "My heart feels heavy knowing I made you sad 💔",
  "Please forgive me — I’ll never stop trying to make you happy 💖",
  "You’re the peace my soul keeps searching for 🌙",
  "I miss your laughter, your warmth, your tiny little expressions 🥹",
  "I don’t want us to drift apart — you’re my favorite part of every day ☀️",
  "Your silence hurts more than any words could 💌",
  "If love is patience, I’ll wait — because you’re worth it 💞",
  "I just want to hold your hand and feel that comfort again 🤍",
  "You make my world brighter — I dimmed it, and I’m so sorry 🌈",
  "I can still feel your presence in every little thing I do ✨",
  "You’re not just someone I love — you’re my peace, my home 🏡",
];

let index = 0;

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  if (startBtn) startBtn.addEventListener("click", startQuestion);
});

function startQuestion() {
  const main = document.getElementById("main");
  main.innerHTML = `
    <div class="question" id="question">${questions[0]}</div>
    <div class="buttons">
      <button class="yes-btn" id="yesBtn">I Forgive You 💕</button>
      <button class="no-btn" id="noBtn">Not Yet 😔</button>
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
  void question.offsetWidth;
  question.style.animation = "fadeInUp 0.5s ease";
}

function handleYes() {
  triggerConfetti();

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    heart.textContent = '💖';
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }

  document.body.style.background = "linear-gradient(to right, #ff9a9e, #fecfef)";
  document.body.style.animation = "none";

  setTimeout(() => {
    const main = document.getElementById("main");
    main.innerHTML = `
      <div class="final-screen animated-message">
        <h2>💞 I love you so much 💞</h2>
        <p>I’ll be more kind, more patient, and more loving every day.</p>
        <p>I still feel our hearts beating together pressed against each other, I still feel your warmth and peace. You’re my peace, and I never want to lose that again ❤️</p>
      </div>
    `;
  }, 2000);
}

function triggerConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 60%)`;
    confetti.style.animationDuration = (1 + Math.random() * 2) + "s";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}
