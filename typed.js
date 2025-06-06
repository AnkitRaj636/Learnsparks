document.addEventListener('DOMContentLoaded', () => {
  // Typing Effect for .typing-text
  const typingPhrases = [
    "Your journey to knowledge starts here",
    "Learn anytime, anywhere",
    "Start coding today!"
  ];

  const typingElement = document.querySelector('.typing-text');
  let i = 0, j = 0, isDeleting = false;

  function typeText() {
    const current = typingPhrases[i];
    typingElement.innerHTML = current.substring(0, j) + '|';

    if (!isDeleting) {
      j++;
      if (j === current.length) {
        isDeleting = true;
        setTimeout(typeText, 1500);
        return;
      }
    } else {
      j--;
      if (j === 0) {
        isDeleting = false;
        i = (i + 1) % typingPhrases.length;
      }
    }

    setTimeout(typeText, isDeleting ? 50 : 100);
  }

  if (typingElement) typeText();

  // Optional: Typing Effect for .welcome-text (if you use it)
 

  const text = "Welcome To LearnSparks";
  const el = document.querySelector('.Welcome-text');
  el.classList.add('fade-in');

  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    el.appendChild(span);
  });
});
