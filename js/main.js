document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("restaraunt-grid");
    function swapCards(cardA, cardB) {
        if (!cardA || !cardB) return;
        let temp = document.createElement("div");
        grid.insertBefore(temp, cardA);
        grid.replaceChild(cardA, cardB);
        grid.replaceChild(cardB, temp);
        temp.remove();
        updateStyling();
    }
    function updateHeadings() {
        const cards = [...grid.children];
        cards.forEach((card, index) => {
            const h2 = card.querySelector("h2");
            if (h2) {
                h2.textContent = `#${index + 1}`;
            }
        });
    }
    function updateStyling() {
        const cards = [...grid.children];
        cards.forEach(card => card.style.gridColumn = "span 1");
        if (cards[0]) cards[0].style.gridColumn = "span 3";
        if (cards[1]) cards[1].style.gridColumn = "span 2";
        updateHeadings();
    }
    grid.addEventListener("click", e => {
        if (e.target.classList.contains("up")) {
            const card = e.target.closest(".card");
            const prev = card.previousElementSibling;
            swapCards(card, prev);
        }
        if (e.target.classList.contains("down")) {
            const card = e.target.closest(".card");
            const next = card.nextElementSibling;
            swapCards(card, next);
        }
    });
    updateStyling();
});