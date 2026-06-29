// Recipe Details Page Logic

document.addEventListener("DOMContentLoaded", function () {
    const recipes = typeof recipeCatalog !== "undefined" ? recipeCatalog : [];

    // Get recipe ID from URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    if (!id || !recipes.length) {
        document.body.innerHTML = "<h2 style='padding:20px;'>Recipe not found</h2>";
        return;
    }

    // Find recipe
    const recipe = recipes.find(r => r.id === id);

    if (!recipe) {
        document.body.innerHTML = "<h2 style='padding:20px;'>Recipe not found</h2>";
        return;
    }

    // Create recipe layout dynamically
    document.body.innerHTML = `
        <div style="max-width:800px;margin:40px auto;font-family:Arial;">
            
            <a href="index.html" style="text-decoration:none;color:#f05a28;font-weight:bold;">
                ← Back to Home
            </a>

            <h1 style="margin-top:20px;">${recipe.title}</h1>

            <img src="${recipe.img}" style="width:100%;border-radius:10px;margin:20px 0;">

            <p style="font-size:16px;color:#444;">
                ${recipe.description || "No description available."}
            </p>

            <p style="margin-top:10px;">
                ⭐ Reviews: ${recipe.reviews || 0}
            </p>

            <button onclick="alert('Saved to favorites!')" 
                style="margin-top:20px;padding:10px 20px;background:#f05a28;color:white;border:none;cursor:pointer;">
                Save Recipe ♡
            </button>
        </div>
    `;
});
