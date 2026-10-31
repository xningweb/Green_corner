const newsCards = document.querySelectorAll(".news-card");

newsCards.forEach((card) => {
  const summary = card.querySelector("summary");
  const content = card.querySelector(".news-content");

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (card.open) {
      // Close the card
      const animation = content.animate(
        [
          { height: `${content.offsetHeight}px`, opacity: 1 },
          { height: "0px", opacity: 0 }
        ],
        {
          duration: 300,
          easing: "ease-in-out"
        }
      );

      animation.onfinish = () => {
        card.open = false;
      };

    } else {
      // Open the card
      card.open = true;

      const fullHeight = content.offsetHeight;

      content.animate(
        [
          { height: "0px", opacity: 0 },
          { height: `${fullHeight}px`, opacity: 1 }
        ],
        {
          duration: 300,
          easing: "ease-in-out"
        }
      );
    }
  });
});
