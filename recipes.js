const recipeCatalog = [
    {
        id: "ramen-salad",
        title: "Crunchy Ramen Salad",
        category: "Healthy",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
        url: "recipe-details.html?id=ramen-salad",
        reviews: "42",
        description: "A fresh, vibrant salad packed with crunchy ramen noodles, fresh cabbage, and a tangy sweet vinaigrette dressing.",
        ingredients: [
            "2 packages instant ramen noodles (discard seasoning packets)",
            "1 bag (14 oz) shredded coleslaw mix",
            "1 cup sliced almonds, toasted",
            "1/2 cup sunflower seeds",
            "3 green onions, chopped",
            "1/4 cup olive oil",
            "3 tbsp rice vinegar",
            "2 tbsp sugar"
        ],
        directions: [
            "Crush the uncooked ramen noodles into small, bite-sized pieces inside the bag.",
            "In a large serving bowl, combine the crushed noodles, coleslaw mix, toasted almonds, sunflower seeds, and green onions.",
            "In a small jar, whisk together the olive oil, rice vinegar, and sugar until the sugar completely dissolves.",
            "Drizzle the dressing over the salad right before serving and toss well to combine while crunchy."
        ]
    },
    {
        id: "air-fryer-chicken",
        title: "Crispy Air Fryer Chicken Thighs",
        category: "Air Fryer",
        img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086",
        url: "recipe-details.html?id=air-fryer-chicken",
        reviews: "128",
        description: "Perfectly seasoned chicken thighs with an incredibly crispy skin and juicy, tender center made right in your air fryer.",
        ingredients: [
            "4 bone-in, skin-on chicken thighs",
            "1 tbsp olive oil",
            "1 tsp garlic powder",
            "1 tsp onion powder",
            "1 tsp smoked paprika",
            "1/2 tsp salt",
            "1/4 tsp black pepper"
        ],
        directions: [
            "Preheat your air fryer to 380°F (193°C).",
            "Pat the chicken thighs completely dry with a paper towel, then coat them evenly with olive oil.",
            "Mix the garlic powder, onion powder, smoked paprika, salt, and pepper in a small bowl, then rub it generously over the chicken.",
            "Place the chicken thighs skin-side down in the air fryer basket and cook for 12 minutes.",
            "Flip the thighs skin-side up and cook for an additional 10 to 12 minutes until the skin is beautifully crispy and internal temperature hits 165°F."
        ]
    },
    {
        id: "slow-cooker-pot-roast",
        title: "Ultimate Slow Cooker Pot Roast",
        category: "Slow Cooker",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947",
        url: "recipe-details.html?id=slow-cooker-pot-roast",
        reviews: "95",
        description: "Tender, melt-in-your-mouth beef pot roast simmered low and slow all day with rich gravy, carrots, and potatoes.",
        ingredients: [
            "3 lb chuck roast",
            "1 lb baby red potatoes, halved",
            "4 large carrots, cut into 2-inch chunks",
            "1 yellow onion, wedged",
            "2 cups beef broth",
            "2 tbsp Worcestershire sauce",
            "2 cloves garlic, minced",
            "1 packet onion soup mix"
        ],
        directions: [
            "Place the halved potatoes, carrot chunks, and onion wedges into the bottom of your slow cooker.",
            "Season the chuck roast with salt and pepper, then rest it directly on top of the vegetables.",
            "In a measuring cup, whisk together the beef broth, Worcestershire sauce, minced garlic, and onion soup mix packet.",
            "Pour the liquid mixture over the roast and vegetables.",
            "Cover and cook on LOW for 8 hours (or HIGH for 5 hours) until the beef easily shreds with a fork."
        ]
    },
    {
        id: "tomato-basil-soup",
        title: "Creamy Tomato Basil Soup",
        category: "Soups",
        img: "https://images.unsplash.com/photo-1547592165-e1d17fed6005",
        url: "recipe-details.html?id=tomato-basil-soup",
        reviews: "64",
        description: "A rich, silky tomato soup packed with fresh basil notes—perfect for pairing with a classic grilled cheese sandwich.",
        ingredients: [
            "2 cans (28 oz each) crushed tomatoes",
            "4 tbsp unsalted butter",
            "1 yellow onion, finely chopped",
            "2 cups vegetable broth",
            "1/2 cup heavy cream",
            "1/4 cup fresh basil leaves, chopped",
            "Salt and pepper to taste"
        ],
        directions: [
            "Melt the butter in a large pot over medium heat, then sauté the chopped onion until soft and translucent (about 5 minutes).",
            "Add the crushed tomatoes and vegetable broth to the pot, bringing it to a light simmer for 15 minutes.",
            "Remove the pot from the heat and stir in the heavy cream and fresh chopped basil.",
            "Use an immersion blender to puree the soup until entirely smooth, then season with salt and pepper before serving."
        ]
    },
    {
        id: "classic-pepperoni-pizza",
        title: "Homemade Pepperoni Pizza",
        category: "Dinner",
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591",
        url: "recipe-details.html?id=classic-pepperoni-pizza",
        reviews: "210",
        description: "Skip delivery with this easy, perfect crispy homemade pizza loaded with zesty marinara, mozzarella, and spicy pepperoni.",
        ingredients: [
            "1 store-bought or homemade pizza dough ball",
            "1/2 cup pizza sauce",
            "1.5 cups shredded mozzarella cheese",
            "1/4 cup pepperoni slices",
            "1 tsp dried oregano",
            "1 tbsp cornmeal (for the pan)"
        ],
        directions: [
            "Preheat your oven as hot as it goes—ideally 500°F (260°C)—and sprinkle cornmeal on a baking sheet.",
            "Stretch and roll out your pizza dough on a floured surface to a 12-inch circle, then transfer it onto the prepared baking sheet.",
            "Spread the pizza sauce evenly across the dough, leaving a small border around the edges for the crust.",
            "Top generously with shredded mozzarella, arrange the pepperoni slices, and sprinkle dried oregano over the top.",
            "Bake for 10 to 12 minutes until the crust is golden brown and the cheese is bubbling and slightly browned."
        ]
    },
    {
        id: "chocolate-chip-cookies",
        title: "Chewy Chocolate Chip Cookies",
        category: "Desserts",
        img: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e",
        url: "recipe-details.html?id=chocolate-chip-cookies",
        reviews: "340",
        description: "The gold standard of baking: thick cookies with crispy, golden edges and incredibly soft, chewy centers packed with melted chips.",
        ingredients: [
            "1 cup unsalted butter, softened",
            "3/4 cup brown sugar, packed",
            "3/4 cup granulated white sugar",
            "2 large eggs",
            "1 tsp vanilla extract",
            "2.25 cups all-purpose flour",
            "1 tsp baking soda",
            "1.5 cups semi-sweet chocolate chips"
        ],
        directions: [
            "Preheat your oven to 375°F (190°C) and line a baking sheet with parchment paper.",
            "In a large bowl, cream together the softened butter, brown sugar, and white sugar until the mixture is light and fluffy.",
            "Beat in the eggs one at a time, then stir in the vanilla extract.",
            "Gradually fold in the flour and baking soda until a dough forms, then gently fold in the chocolate chips.",
            "Drop rounded tablespoons of dough onto the sheet 2 inches apart and bake for 9 to 11 minutes until edges turn beautifully golden."
        ]
    },
    {
        id: "tropical-smoothie",
        title: "Sunset Tropical Smoothie",
        category: "Drinks",
        img: "https://images.unsplash.com/photo-1553530666-ba11a7da3888",
        url: "recipe-details.html?id=tropical-smoothie",
        reviews: "55",
        description: "A bright, refreshing escape in a glass made from blended mango, pineapple, strawberries, and splash of coconut milk.",
        ingredients: [
            "1 cup frozen mango chunks",
            "1 cup frozen pineapple chunks",
            "1/2 cup fresh strawberries",
            "1 cup light coconut milk",
            "1 banana, sliced"
        ],
        directions: [
            "Pour the light coconut milk into the base of your high-speed blender first.",
            "Add the fresh banana slices, followed by the frozen mango, pineapple, and strawberry pieces.",
            "Secure the lid tightly and blend on HIGH for 60 seconds until completely smooth and creamy.",
            "Pour into a chilled glass, garnish with a strawberry slice if desired, and enjoy with a straw instantly."
        ]
    },
    {
        id: "classic-meatloaf",
        title: "Grandma's Glazed Meatloaf",
        category: "Dinner",
        img: "https://images.unsplash.com/photo-1514516345957-556ca7d90a29",
        url: "recipe-details.html?id=classic-meatloaf",
        reviews: "185",
        description: "Comfort food at its finest—perfectly seasoned ground beef meatloaf brushed with a sweet, tangy ketchup and brown sugar glaze.",
        ingredients: [
            "2 lbs ground beef (80/20 mix)",
            "1 cup breadcrumbs",
            "1/2 cup whole milk",
            "2 eggs, beaten",
            "1 small onion, finely minced",
            "1/2 cup ketchup (divided for glaze)",
            "2 tbsp brown sugar",
            "1 tbsp Worcestershire sauce"
        ],
        directions: [
            "Preheat your oven to 350°F (177°C) and lightly grease a standard 9x5 inch loaf pan.",
            "In a large bowl, mix the ground beef, breadcrumbs, milk, beaten eggs, minced onion, Worcestershire sauce, and 1/4 cup of the ketchup.",
            "Press the meat mixture evenly into your prepared loaf pan.",
            "Mix the remaining 1/4 cup of ketchup with the 2 tablespoons of brown sugar in a small cup, then brush it evenly over the top of the meatloaf.",
            "Bake uncovered for 1 hour until the center reaches an internal temperature of 160°F, letting it rest 10 minutes before slicing."
        ]
    },
    {
        id: "fluffy-pancakes",
        title: "Buttermilk Fluffy Pancakes",
        category: "Breakfast",
        img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
        url: "recipe-details.html?id=fluffy-pancakes",
        reviews: "295",
        description: "Light, thick, and ultra-fluffy diner-style buttermilk pancakes made completely from scratch for the ultimate weekend breakfast.",
        ingredients: [
            "2 cups all-purpose flour",
            "3 tbsp sugar",
            "2 tsp baking powder",
            "1 tsp baking soda",
            "1/2 tsp salt",
            "2 cups buttermilk",
            "2 large eggs",
            "1/4 cup unsalted butter, melted"
        ],
        directions: [
            "Whisk the flour, sugar, baking powder, baking soda, and salt together in a large mixing bowl.",
            "In a separate bowl, whisk together the buttermilk, eggs, and melted butter.",
            "Pour the wet ingredients into the dry ingredients and stir gently with a wooden spoon just until combined (the batter should remain slightly lumpy).",
            "Heat a lightly greased griddle or non-stick skillet over medium heat.",
            "Pour 1/4 cup of batter per pancake onto the hot skillet, cooking until bubbles form on top, then flip and cook until golden brown on both sides."
        ]
    },
    {
        id: "classic-lasagna",
        title: "Four-Cheese Italian Lasagna",
        category: "Dinner",
        img: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3",
        url: "recipe-details.html?id=classic-lasagna",
        reviews: "150",
        description: "Layers of seasoned rich meat sauce, lasagna noodles, creamy ricotta, and molten mozzarella baked to bubbly perfection.",
        ingredients: [
            "12 lasagna noodles, boiled",
            "1 lb Italian sausage or ground beef",
            "1 jar (24 oz) marinara sauce",
            "1 container (15 oz) ricotta cheese",
            "1 egg",
            "3 cups shredded mozzarella cheese",
            "1/2 cup grated parmesan cheese"
        ],
        directions: [
            "Preheat your oven to 375°F (190°C). Brown the meat in a skillet, drain grease, and stir in your favorite marinara sauce.",
            "In a medium bowl, mix the ricotta cheese together with the egg and half of the parmesan cheese.",
            "In a 9x13 inch baking dish, layer 1/3 of the meat sauce, cover with 4 noodles, then spread 1/2 of the ricotta mixture and sprinkle 1 cup of mozzarella.",
            "Repeat the layers, ending with a final top layer of noodles, meat sauce, remaining mozzarella, and parmesan cheese.",
            "Cover tightly with aluminum foil and bake for 25 minutes, then remove the foil and bake for another 20 minutes until bubbling."
        ]
    }
];
