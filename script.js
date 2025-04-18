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
  "Are we more than the sum of our experiences?",
  "What defines your identity if everything around you changes?",
  "Can reality exist without perception?",
  "Is there such a thing as true randomness?",
  "If emotions are chemical reactions, are they still meaningful?",
  "What separates consciousness from advanced computation?",
  "Would society function better if everyone knew when they would die?",
  "Do we create meaning, or do we discover it?",
  "Is the self just an illusion created by the brain?",
  "What responsibilities come with awareness?",
  "If you could remove all suffering from life, would anything still matter?",
  "Could your entire life be a single moment experienced in slow motion?",
  "Is memory a reliable way to understand reality?",
  "Do we have a moral obligation to improve the world?",
  "Can you ever act without being influenced by your environment or biology?",
  "Are dreams more than just noise in the brain?",
  "What is more important: truth or comfort?",
  "If you knew the outcome of every decision, would choice matter?",
  "What does it mean to be alive?",
  "Could intelligence without emotion still be wise?",
  "If time had a beginning, what was before it?",
  "What if your subconscious is the one truly making all your decisions?",
  "If every idea is inspired by something else, can anything be truly original?",
  "What if you're just a character in a game running on a 10-year-old’s computer?",
  "Can you ever separate your identity from your environment and upbringing?",
  "If a society shapes your thoughts, is your free will just an illusion?",
  "What if you’re not the one thinking — but just observing thoughts happen?",
  "Is it possible that your life is being lived by someone else through you?",
  "Could infinite simulated universes exist inside other simulations?",
  "Would you live differently if you knew you were in a simulation?",
  "If we can’t prove we’re not simulated, does that change anything about how we live?",
  "If social expectations shape your personality, is there such a thing as a 'true self'?",
  "Can something be meaningful if it’s built on a lie?",
  "Are we just sophisticated biological machines responding to input?",
  "What if consciousness is just a glitch in an otherwise logical system?",
  "Do we cling to certain beliefs simply because we fear uncertainty?",
  "If everyone is influenced by their past, can anyone ever be truly objective?",
  "What makes a joke acceptable or unacceptable in society?",
  "Could a single thought create a universe?",
  "Can we hold everyone to the same standard if we are all different?",
  "Is something true because we believe it to be true or because it is objectively true?",
  "Are we a simulation?",
  "Does anything matter?",
  "Is society too complicated?",
  "Are you born with your intelligence or are you a product of your environment?",
  "If you have nothing to compare something to, can that thing be good or bad?",
  "What does it mean to be human?",
];

function generateQuestion() {
  const randomIndex = Math.floor(Math.random() * questions.length);
  document.getElementById("question").innerText = questions[randomIndex];
}

async function fetchDailyPhilosophyQuote() {
  const fallbackQuotes = [
    { content: "The unexamined life is not worth living.", author: "Socrates" },
    { content: "I think, therefore I am.", author: "René Descartes" },
    { content: "Happiness depends upon ourselves.", author: "Aristotle" },
    { content: "To be is to do.", author: "Immanuel Kant" },
    { content: "The only true wisdom is in knowing you know nothing.", author: "Socrates" },
  ];

  try {
    console.log("Fetching quote...");
    // Updated to use the Quotable API
    const response = await fetch('https://api.quotable.io/random?tags=philosophy', {
      headers: {
        'Cache-Control': 'no-cache',
      }
    });

    if (!response.ok) {
      throw new Error("Failed to fetch from Quotable API");
    }

    const data = await response.json();
    console.log("Quote fetched:", data);

    document.getElementById("quoteText").textContent = `"${data.content}"`;
    document.getElementById("quoteAuthor").textContent = `— ${data.author}`;
  } catch (error) {
    const randomQuote = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    document.getElementById("quoteText").textContent = `"${randomQuote.content}"`;
    document.getElementById("quoteAuthor").textContent = `— ${randomQuote.author}`;
    console.error("Error fetching quote:", error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  fetchDailyPhilosophyQuote();  // Fetch the quote when the page loads
});
