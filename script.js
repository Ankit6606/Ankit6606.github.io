const questions = [
    "Will you travel with me in shuttle? 🚌",
    "Wait... Will you *please* travel with me in shuttle? 🥺",
    "I’ll get you window seat everyday... please say yes! 😢",
    "No traffic, no stress — just us! Will you join me? 🚀",
    "You’re breaking my heart 😭 Just say yes once!",
    "Pretty please with extra ice cream? 🍦🍦",
    "If you say no again, I might cry real tears 😭",
    "Even Google Maps won't reroute me away from you 💔",
    "I'll bring snacks every single ride... just say YES 🍫🍿",
    "You’re the seatbelt to my ride — don’t leave me hanging! 🛻",
    "Okay but what if I play your fav songs on loop? 🎶❤️",
    "I'll protect you from all potholes and sudden brakes 🛡️😤",
    "The shuttle will be incomplete without you 💔",
    "Say yes and I’ll never forget your birthday... EVER 🎂😂",
    "Imagine us vibing in traffic-free mornings 😌",
    "Don’t be the reason I walk alone in this cruel world 🥲",
    "Do it for the memes, the memories, and the munchies 📸🍟",
    "You’ve unlocked the emotional damage level 🫠 — just say yes!",
    "If you say no now, I’ll ask again tomorrow, and the next day 😅",
    "Last time asking (but not really): Will you shuttle with me? 🙃"
  ];
  
  let index = 0;
  
  function startQuestion() {
    const main = document.getElementById("main");
    main.innerHTML = `
      <div class="question" id="question">${questions[0]}</div>
      <div class="buttons">
        <button class="yes-btn" onclick="handleYes()">Yes</button>
        <button class="no-btn" onclick="handleNo()">No</button>
      </div>
    `;
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
  