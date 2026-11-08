let isFlipped = false;

// Reveal the card on click
function revealCard() {
  if (!isFlipped) {
    document.getElementById('cardContainer').classList.add('flipped');
    isFlipped = true;
  }
}

// Playful runaway "No" button
function moveButton() {
  const noBtn = document.getElementById('noBtn');
  const btnGroup = document.getElementById('btnGroup');
  
  // Calculate random positions within the button area
  const randomX = (Math.random() - 0.5) * 200;
  const randomY = (Math.random() - 0.5) * 100;
  
  noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

// Handle "Yes" acceptance
function acceptProposal(event) {
  event.stopPropagation(); // Prevents card interaction issues
  document.getElementById('proposalContent').style.display = 'none';
  document.getElementById('celebrationContent').style.display = 'flex';
  createBurstHearts();
}

// Create falling background hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart-bg');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 3 + 's';
  heart.style.fontSize = Math.random() * 15 + 15 + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

setInterval(createHeart, 300);

// Heart explosion effect when clicking "Yes"
function createBurstHearts() {
  for (let i = 0; i < 30; i++) {
    setTimeout(createHeart, i * 50);
  }
}
