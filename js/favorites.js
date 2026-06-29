// ============================
// FAVORITES SYSTEM (LOCAL STORAGE)
// ============================

document.addEventListener("DOMContentLoaded", function () {
    const recipes = typeof recipeCatalog !== "undefined" ? recipeCatalog : [];

    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Save favorite
    function toggleFavorite(recipeId) {
        const index = favorites.indexOf(recipeId);

        if (index === -1) {
            favorites.push(recipeId);
        } else {
            favorites.splice(index, 1);
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
        renderFavorites();
    }

    // Render favorites section
    function renderFavorites() {
        const container = document.getElementById("myrecipes-feed");
        if (!container) return;

        const saved = recipes.filter(r => favorites.includes(r.id));

        container.innerHTML = saved.length ? saved.map(r => `
            <div class="myrecipes-card">
                <div class="img-box">
                    <img src="${r.img}" alt="${r.title}">
                    <div class="overlay-badge">Saved</div>
                </div>
                <div class="card-details">
                    <h4 class="card-title">${r.title}</h4>
                </div>
                <button class="save-recipe-btn" onclick="window.location.href='${r.url}'">
                    View Recipe ♡
                </button>
            </div>
        `).join("") : "<p style='padding:10px;'>No saved recipes yet.</p>";
    }

    // Add heart click functionality
    document.addEventListener("click", function (e) {
        if (e.target.classList.contains("heart-toggle")) {
            const card = e.target.closest(".premium-card");
            if (!card) return;

            const title = card.querySelector(".card-title").innerText;

            const recipe = recipes.find(r => r.title === title);
            if (!recipe) return;

            toggleFavorite(recipe.id);

            // visual toggle
            e.target.textContent = favorites.includes(recipe.id) ? "♥" : "♡";
        }
    });

    renderFavorites();
});
