document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");
  let delay = 0;

  cards.forEach(card => {
    setTimeout(() => {
      card.classList.add("show");
    }, delay);
    delay += 300; // Adjust delay for each card
  });
});
