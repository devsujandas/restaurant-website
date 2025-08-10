export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  dietary?: string[]
}

export const menuItems: MenuItem[] = [
  // Breakfast
  {
    id: "1",
    name: "Fluffy Pancakes",
    description: "Soft pancakes with maple syrup and fresh berries.",
    price: 180,
    image: "/fluffy-berry-pancakes.png",
    category: "breakfast",
    dietary: ["vegetarian"],
  },
  {
    id: "2",
    name: "Avocado Toast",
    description: "Multigrain bread with smashed avocado and herbs.",
    price: 220,
    image: "/avocado-toast-poached-egg.png",
    category: "breakfast",
    dietary: ["vegan"],
  },
  {
    id: "3",
    name: "Classic Omelette",
    description: "Three-egg omelette with cheese and herbs.",
    price: 200,
    image: "/classic-cheese-omelette.png",
    category: "breakfast",
    dietary: ["vegetarian"],
  },
  {
    id: "4",
    name: "Breakfast Burrito",
    description: "Scrambled eggs with vegetables in a tortilla wrap.",
    price: 250,
    image: "/breakfast-burrito-image.png",
    category: "breakfast",
  },

  // Lunch
  {
    id: "5",
    name: "Caesar Salad with Grilled Chicken",
    description: "Romaine lettuce, chicken, and caesar dressing.",
    price: 320,
    image: "/caesar-salad-with-grilled-chicken-dish.png",
    category: "lunch",
  },
  {
    id: "6",
    name: "Wagyu Beef Burger",
    description: "Premium wagyu beef with cheddar and truffle mayo.",
    price: 450,
    image: "/wagyu-burger-fries.png",
    category: "lunch",
  },
  {
    id: "7",
    name: "Seafood Pasta",
    description: "Linguine with shrimp and white wine sauce.",
    price: 380,
    image: "/seafood-linguine-with-shrimp.png",
    category: "lunch",
  },
  {
    id: "8",
    name: "Grilled Veggie Wrap",
    description: "Roasted vegetables wrapped in warm flatbread.",
    price: 280,
    image: "/grilled-vegetable-wrap.png",
    category: "lunch",
    dietary: ["vegetarian"],
  },
  {
    id: "9",
    name: "Herb-Crusted Salmon",
    description: "Seared salmon with herb crust and lemon.",
    price: 420,
    image: "/herb-crusted-salmon-asparagus.png",
    category: "lunch",
  },

  // Dinner
  {
    id: "10",
    name: "Filet Mignon",
    description: "Tender beef with red wine sauce.",
    price: 480,
    image: "/filet-mignon-red-wine.png",
    category: "dinner",
  },
  {
    id: "11",
    name: "Grilled Salmon",
    description: "Salmon with lemon butter sauce.",
    price: 450,
    image: "/grilled-salmon-lemon.png",
    category: "dinner",
  },
  {
    id: "12",
    name: "Black Truffle Risotto",
    description: "Creamy risotto with truffle essence.",
    price: 420,
    image: "/black-truffle-risotto.png",
    category: "dinner",
    dietary: ["vegetarian"],
  },
  {
    id: "13",
    name: "Rack of Lamb",
    description: "Juicy lamb chops with mint sauce.",
    price: 490,
    image: "/rack-of-lamb-mint-sauce.png",
    category: "dinner",
  },
  {
    id: "14",
    name: "Lobster Thermidor",
    description: "Baked lobster in creamy mustard sauce.",
    price: 499,
    image: "/lobster-thermidor-dish.png",
    category: "dinner",
  },

  // Mocktails
  {
    id: "15",
    name: "Tropical Paradise",
    description: "Pineapple, coconut, and mango blend.",
    price: 150,
    image: "/tropical-paradise-mocktail.png",
    category: "mocktails",
    dietary: ["vegan"],
  },
  {
    id: "16",
    name: "Citrus Refresher",
    description: "Lime and orange with soda.",
    price: 120,
    image: "/citrus-refresher-mocktail.png",
    category: "mocktails",
    dietary: ["vegan"],
  },
  {
    id: "17",
    name: "Berry Bliss",
    description: "Mixed berries and sparkling water.",
    price: 140,
    image: "/berry-bliss-mocktail-image.png", // Updated image
    category: "mocktails",
    dietary: ["vegan"],
  },
  {
    id: "18",
    name: "Green Mojito",
    description: "Mint, cucumber, and tonic.",
    price: 160,
    image: "/green-mojito-mocktail.png",
    category: "mocktails",
    dietary: ["vegan"],
  },
]

export const categories = [
  { id: "breakfast", name: "BREAKFAST", time: "7AM - 11AM" },
  { id: "lunch", name: "LUNCH", time: "12PM - 3PM" },
  { id: "dinner", name: "DINNER", time: "6PM - 11PM" },
  { id: "mocktails", name: "MOCKTAILS", time: "" },
]
