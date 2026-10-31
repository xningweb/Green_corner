const newsCards = document.querySelectorAll(".news-card");

newsCards.forEach((card) => {
  const summary = card.querySelector("summary");
  const content = card.querySelector(".news-content");

  let animating = false;

  summary.addEventListener("click", (event) => {
    event.preventDefault();

    if (animating) return;

    animating = true;

    const opening = !card.open;
    const startHeight = card.offsetHeight;

    if (opening) {
      card.open = true;
    }

    const endHeight = opening
      ? card.scrollHeight
      : summary.offsetHeight + 2;

    const animation = card.animate(
      [
        { height: `${startHeight}px` },
        { height: `${endHeight}px` }
      ],
      {
        duration: 450,
        easing: "cubic-bezier(0.25, 0.8, 0.25, 1)"
      }
    );

    content.animate(
      opening
        ? [
            { opacity: 0, transform: "translateY(-8px)" },
            { opacity: 1, transform: "translateY(0)" }
          ]
        : [
            { opacity: 1, transform: "translateY(0)" },
            { opacity: 0, transform: "translateY(-8px)" }
          ],
      {
        duration: 350,
        easing: "ease-out"
      }
    );

    animation.onfinish = () => {
      if (!opening) {
        card.open = false;
      }

      animating = false;
    };

    animation.oncancel = () => {
      animating = false;
    };
  });
});
