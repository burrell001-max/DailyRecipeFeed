const recipeCatalog = [
    {
        title: "Ramen Noodle Salad",
        category: "Salad",
        img: "https://www.allrecipes.com/thmb/9K_gIol6df_m0zJ9gN8G-m2XyYw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14324-ramen-noodle-salad-ddmfs-4x3-1191-45da812f801a4dbfa882779836cdbb3b.jpg",
        url: "https://www.allrecipes.com/recipe/14324/ramen-noodle-salad/",
        reviews: "1,245",
        description: "A crunchy, flavorful classic potluck salad featuring crisp cabbage, toasted ramen noodles, and a tangy sweet vinaigrette."
    },
    {
        title: "Perfect Baked Potato",
        category: "Sides",
        img: "https://www.allrecipes.com/thmb/pZLe_vR0H08Dofm1t_JqXnS6Z90=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/54679-perfect-baked-potato-ddmfs-4x3-0164-88fa395378414cb3992df4fe54fb3e41.jpg",
        url: "https://www.allrecipes.com/recipe/54679/perfect-baked-potato/",
        reviews: "834",
        description: "Get a perfectly crispy skin and a fluffy, light interior every single time with this steakhouse-style baking method."
    },
    {
        title: "Easy Strawberry Shortcake",
        category: "Dessert",
        img: "https://www.allrecipes.com/thmb/V_O8r7gWk-LqA1msc9U7X2OQpM8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/22496-easy-strawberry-shortcake-ddmfs-4x3-1025-a7407cfbb3884b658ef9c2f6da21a2eb.jpg",
        url: "https://www.allrecipes.com/recipe/22496/easy-strawberry-shortcake/",
        reviews: "1,842",
        description: "Classic, sweet homemade biscuits layered with juicy macerated fresh strawberries and heaps of fresh whipped cream."
    },
    {
        title: "Amish Macaroni Salad",
        category: "Salad",
        img: "https://www.allrecipes.com/thmb/8-yPz9G-vK3m8vU_K62NfVwA20A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/81110-amish-macaroni-salad-ddmfs-4x3-1272-36ea44917f8b417bb411a0179a6db6bc.jpg",
        url: "https://www.allrecipes.com/recipe/81110/amish-macaroni-salad/",
        reviews: "1,415",
        description: "A sweet and tangy traditional dressing sets this colorful, hard-boiled egg and macaroni crowd-pleaser apart."
    },
    {
        title: "Juicy Smash Burgers",
        category: "Main Dishes",
        img: "https://www.allrecipes.com/thmb/v89ZkC2A06_YmsmX38k6H54F8gA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/285473-juicy-smash-burgers-ddmfs-4x3-2342-83b79cd191f44cb49089ef04d2e5b123.jpg",
        url: "https://www.allrecipes.com/recipe/285473/juicy-smash-burgers/",
        reviews: "65",
        description: "Crispy, lacy edges seared hot on a flat-top grill, topped with melted American cheese on a soft, toasted bun."
    },
    {
        title: "Mexican Street Corn Chicken Rice Bowl",
        category: "Bowls",
        img: "https://www.allrecipes.com/thmb/9W6t6xZ836-8wY_6N5tZ7X20U8k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8521360-mexican-street-corn-chicken-rice-bowl-ddmfs-4x3-3243-8fba46231a4c8ea4bc920f7b0f6da89b.jpg",
        url: "https://www.allrecipes.com/recipe/284136/mexican-street-corn-salad/",
        reviews: "112",
        description: "Zesty charred corn, seasoned chicken, tender rice, and a creamy lime sauce bring street-food flavor right to your dinner table."
    },
    {
        title: "Easy Coleslaw Dressing",
        category: "Sauces",
        img: "https://www.allrecipes.com/thmb/bV_8o366V1w_277X-B48V3Z8G2g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25078-easy-coleslaw-dressing-ddmfs-4x3-0182-3e2b26006f8c4bc6a3f9eef110da00b4.jpg",
        url: "https://www.allrecipes.com/recipe/25078/easy-coleslaw-dressing/",
        reviews: "2,769",
        description: "The ultimate 5-ingredient creamy dressing that turns a basic bag of shredded cabbage into a spectacular cookout side."
    },
    {
        title: "Awesome Pasta Salad",
        category: "Salad",
        img: "https://www.allrecipes.com/thmb/B47-O8x8Yw-8W48m2V8G2g820A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/14385-awesome-pasta-salad-ddmfs-4x3-1182-5fba45821a4c8ea4bc920f7b0f6da84d.jpg",
        url: "https://www.allrecipes.com/recipe/14385/awesome-pasta-salad/",
        reviews: "746",
        description: "Loaded with rotini pasta, crisp fresh vegetables, pepperoni cubes, and tossed in a rich Italian herb dressing."
    },
    {
        title: "Chimichurri Sauce",
        category: "Sauces",
        img: "https://www.allrecipes.com/thmb/C8Y-O8x8Yw-8W48m2V8G2g820A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222325-chimichurri-sauce-ddmfs-4x3-0112-4fba45821a4c8ea4bc920f7b0f6da81a.jpg",
        url: "https://www.allrecipes.com/recipe/222325/chef-johns-chimichurri-sauce/",
        reviews: "242",
        description: "A bright, garlicky, and herbaceous Argentinean condiment packed with fresh parsley, oregano, garlic, and vinegar."
    },
    {
        title: "Belle's Hamburger Buns",
        category: "Baking",
        img: "https://www.allrecipes.com/thmb/Y-yPz9G-vK3m8vU_K62NfVwA20A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/231165-belles-hamburger-buns-ddmfs-4x3-1124-26ea44917f8b417bb411a0179a6db6cc.jpg",
        url: "https://www.allrecipes.com/recipe/231165/belles-hamburger-buns/",
        reviews: "665",
        description: "Soft, pillowy homemade burger buns topped with golden sesame seeds that hold up perfectly to heavy toppings."
    }
];
