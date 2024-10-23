document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const pageInfo = document.getElementById("page-info");

  let currentPage = 1;
  const cardsPerPage = 6; // 3 columns and 3 rows (9 cards per page)
  const totalCards = cards.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  // Function to display the correct cards for the current page
  function displayCards(page) {
    // Hide all cards
    cards.forEach((card) => {
      card.style.display = "none";
    });

    // Show only the cards for the current page
    const start = (page - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    for (let i = start; i < end; i++) {
      if (cards[i]) {
        cards[i].style.display = "block";
      }
    }

    // Update page information
    pageInfo.textContent = `Page ${page} of ${totalPages}`;

    // Disable/enable pagination buttons
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === totalPages;
  }

  // Event listeners for pagination buttons
  prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      displayCards(currentPage);
    }
  });

  nextBtn.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      displayCards(currentPage);
    }
  });

  // Initial display
  displayCards(currentPage);
});
