// ============================
// CATEGORY FILTER SYSTEM
// ============================

document.addEventListener("DOMContentLoaded", function () {
    const recipes = typeof recipeCatalog !== "undefined" ? recipeCatalog : [];

    const categoryItems = document.querySelectorAll(".category-item");

    if (!categoryItems.length) return;

    function renderFiltered(items) {
        const container = document.getElementById("seasonal-picks-feed");
        if (!container) return;

        container.innerHTML = items.map(recipe => `
            <a href="${recipe.url}" class="premium-card">
                <div class="img-box">
                    <img src="${recipe.img}" alt="${recipe.title}">
                    <div class="heart-toggle">♡</div>
                </div>
                <div class="card-details">
                    <div class="card-meta">${recipe.category}</div>
                    <h4 class="card-title">${recipe.title}</h4>
                    <div class="stars-row">★★★★★ <span>(${recipe.reviews || 0})</span></div>
                </div>
            </a>
        `).join("");
    }

    categoryItems.forEach(item => {
        item.addEventListener("click", function (e) {
            e.preventDefault();

            const category = this.innerText.trim().toLowerCase();

            if (category === "all") {
                renderFiltered(recipes);
                return;
            }

            const filtered = recipes.filter(r =>
                r.category.toLowerCase() === category
            );

            renderFiltered(filtered);
        });
    });
});
