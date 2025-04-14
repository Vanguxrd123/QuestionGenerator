const questions = [
  "What if the universe only exists because you’re observing it?",
  "Would you still be 'you' if all your memories were erased?",
  "Is free will real or just an illusion?",
  "If life has no objective meaning, can it still be meaningful?",
  "Is it possible to ever truly know another person?",
  "Would you want to live forever?",
  "What makes a thought 'yours'?",
  "Can anything be truly selfless?",
  "What if this is all just someone else's dream?",
  "Are we more than the sum of our experiences?"
];

function generateQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  document.getElementById("question").innerText = questions[randomIndex];
}
