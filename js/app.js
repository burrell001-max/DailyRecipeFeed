// Main App Controller

document.addEventListener("DOMContentLoaded", function () {
    const recipes = typeof recipeCatalog !== "undefined" ? recipeCatalog : [];

    if (!recipes.length) {
        console.warn("No recipes found. Check recipes.js");
        return;
    }

    // -----------------------------
    // FEATURE 1: DAILY RECIPE
    // -----------------------------
    const today = new Date();
    const start = new Date(today.getFullYear(), 0, 0);
    const dayOfYear = Math.floor((today - start) / 86400000);

    const dailyRecipe = recipes[dayOfYear % recipes.length];

    const img = document.getElementById("daily-image");
    const title = document.getElementById("daily-title");
    const link = document.getElementById("daily-link");

    if (img) img.src = dailyRecipe.img || "";
    if (title) title.textContent = dailyRecipe.title || "";
    if (link) link.href = dailyRecipe.url || "#";

    // -----------------------------
    // FEATURE 2: CATEGORY FEEDS
    // -----------------------------
    function renderGrid(id, items) {
        const container = document.getElementById(id);
        if (!container) return;

        container.innerHTML = items.map(recipe => `
            <a href="${recipe.url || "#"}" class="premium-card">
                <div class="img-box">
                    <img src="${recipe.img || ""}" alt="${recipe.title || ""}">
                    <div class="heart-toggle">♡</div>
                </div>
                <div class="card-details">
                    <div class="card-meta">${recipe.category || ""}</div>
                    <h4 class="card-title">${recipe.title || ""}</h4>
                    <div class="stars-row">★★★★★ <span>(${recipe.reviews || 0})</span></div>
                </div>
            </a>
        `).join("");
    }

    renderGrid("seasonal-picks-feed", recipes.slice(0, 6));
    renderGrid("cookout-classics-feed", recipes.slice(6, 12));

    // -----------------------------
    // FEATURE 3: TRENDING SECTION
    // -----------------------------
    const trending = document.getElementById("trending-feed");

    if (trending) {
        trending.innerHTML = recipes.slice(3, 9).map(r => `
            <a href="${r.url || "#"}" class="trending-row-card">
                <img src="${r.img || ""}" class="trending-img" alt="${r.title || ""}">
                <div class="trending-info">
                    <div class="trending-meta">${r.category || ""}</div>
                    <div class="trending-heading">${r.title || ""}</div>
                </div>
            </a>
        `).join("");
    }

    // -----------------------------
    // FEATURE 4: MY RECIPES (favorites style)
    // -----------------------------
    const myRecipes = document.getElementById("myrecipes-feed");

    if (myRecipes) {
        myRecipes.innerHTML = recipes.slice(0, 4).map(r => `
            <div class="myrecipes-card">
                <div class="img-box">
                    <img src="${r.img || ""}" alt="${r.title || ""}">
                    <div class="overlay-badge">Featured</div>
                </div>
                <div class="card-details">
                    <h4 class="card-title">${r.title || ""}</h4>
                </div>
                <button class="save-recipe-btn" onclick="window.location.href='${r.url || "#"}'">
                    View Recipe ♡
                </button>
            </div>
        `).join("");
    }

    // -----------------------------
    // FEATURE 5: FEATURE STREAM
    // -----------------------------
    const features = document.getElementById("features-feed");

    if (features) {
        features.innerHTML = recipes.slice(8, 14).map(r => `
            <a href="${r.url || "#"}" class="feature-strip-item">
                <img src="${r.img || ""}" class="feature-strip-img" alt="${r.title || ""}">
                <div class="feature-strip-title">${r.title || ""}</div>
            </a>
        `).join("");
    }
});
