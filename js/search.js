// ============================
// SEARCH SYSTEM
// ============================

document.addEventListener("DOMContentLoaded", function () {
    const recipes = typeof recipeCatalog !== "undefined" ? recipeCatalog : [];

    const searchInput = document.querySelector(".search-bar-wrap input");
    const searchButton = document.querySelector(".search-bar-wrap button");

    if (!searchInput || !searchButton) return;

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();

        if (!query) return;

        const results = recipes.filter(recipe => {
            return (
                recipe.title.toLowerCase().includes(query) ||
                recipe.category.toLowerCase().includes(query)
            );
        });

        showResults(results);
    }

    function showResults(results) {
        let container = document.getElementById("search-results");

        // Create results box if it doesn't exist
        if (!container) {
            container = document.createElement("div");
            container.id = "search-results";
            container.style.cssText = `
                margin-top: 20px;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 15px;
            `;

            document.querySelector(".container").prepend(container);
        }

        if (results.length === 0) {
            container.innerHTML = "<p>No recipes found.</p>";
            return;
        }

        container.innerHTML = results.map(recipe => `
            <a href="${recipe.url}" style="
                display:block;
                background:#fff;
                border:1px solid #ddd;
                padding:10px;
                text-decoration:none;
                color:#000;
            ">
                <img src="${recipe.img}" style="width:100%;height:150px;object-fit:cover;">
                <h3 style="margin-top:10px;">${recipe.title}</h3>
                <p style="font-size:12px;color:#666;">${recipe.category}</p>
            </a>
        `).join("");
    }

    searchButton.addEventListener("click", performSearch);

    searchInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            performSearch();
        }
    });
});
