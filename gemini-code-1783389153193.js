document.addEventListener('DOMContentLoaded', () => {
    // Dynamic execution and sync of local elements
    const liveDateElement = document.getElementById('live-receipt-date');
    if (liveDateElement) {
        const date = new Date();
        liveDateElement.textContent = `STATION #04 - VERIFIED AT ${date.getFullYear()}.${String(date.getMonth()+1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')}`;
    }

    // Scroll Progress Metrics Indicator
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        const progBar = document.getElementById('progressBar');
        if (progBar) progBar.style.width = scrolled + '%';
    });

    // Populate Recipes from Embedded Architecture JSON
    fetchDataAndBuild();
});

async function fetchDataAndBuild() {
    const container = document.getElementById('recipe-container');
    if (!container) return;

    try {
        // Fallback production structural definition matching data/articles.json schema design layer
        const fallbackData = [
            {
                "id": "browned-butter-gnocchi",
                "title": "Empirical Browned Butter Gnocchi Matrix",
                "category": "Pasta / Entree",
                "cost": "$3.14",
                "time": "43 Min",
                "difficulty": "62/100",
                "slug": "article-template.html"
            },
            {
                "id": "calibrated-sourdough",
                "title": "High-Fidelity Wild Hydration Sourdough",
                "category": "Baking / Bread",
                "cost": "$0.87",
                "time": "22 Hr",
                "difficulty": "89/100",
                "slug": "article-template.html"
            },
            {
                "id": "artisan-consomme",
                "title": "Clarified Bone Broth Consommé Stack",
                "category": "Soups / Infrastructure",
                "cost": "$4.50",
                "time": "6 Hr",
                "difficulty": "45/100",
                "slug": "article-template.html"
            }
        ];

        container.innerHTML = '';
        fallbackData.forEach(recipe => {
            const card = document.createElement('div');
            card.className = 'recipe-card';
            card.innerHTML = `
                <div class="recipe-thumb" style="background-color: var(--parchment)"></div>
                <div class="recipe-content">
                    <div class="recipe-category">${recipe.category}</div>
                    <h3><a href="articles/${recipe.slug}" style="text-decoration:none; color:inherit;">${recipe.title}</a></h3>
                    <div class="yield-ledger-receipt" style="box-shadow:none; padding:12px; margin-top:16px;">
                        <div class="receipt-row font-mono" style="font-size:0.75rem;">
                            <span>COST: ${recipe.cost}</span>
                            <span>TIME: ${recipe.time}</span>
                        </div>
                        <div class="receipt-row font-mono" style="font-size:0.75rem; margin-top:4px;">
                            <span>DIFF: ${recipe.difficulty}</span>
                            <span>VERIFIED</span>
                        </div>
                    </div>
                </div>
            `;
            container.appendChild(card);
        });
    } catch (err) {
        console.error('Error standardizing structural system loading:', err);
    }
}