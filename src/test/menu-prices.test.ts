import { describe, expect, it } from "vitest";
import { MENU_CATEGORIES } from "@/routes/index";

const EXPECTED_PRICES: [string, string, number][] = [
  [
    "breakfast",
    "2 Eggs On A Roll",
    3.0
  ],
  [
    "breakfast",
    "Bacon, Ham Or Sausage And Eggs On A Roll With Cheese",
    4.0
  ],
  [
    "breakfast",
    "Egg Platter",
    6.75
  ],
  [
    "breakfast",
    "3 Stack Of Pancakes Or French Toast",
    5.25
  ],
  [
    "breakfast",
    "Side Home Fries",
    3.0
  ],
  [
    "specialty-breakfast",
    "Western Wrap",
    5.75
  ],
  [
    "specialty-breakfast",
    "C&C Wrap",
    5.75
  ],
  [
    "specialty-breakfast",
    "Main St Wrap",
    9.25
  ],
  [
    "specialty-breakfast",
    "Veggie Lover",
    5.5
  ],
  [
    "specialty-breakfast",
    "Meat Lover",
    6.75
  ],
  [
    "specialty-breakfast",
    "Blanca's Special",
    7.75
  ],
  [
    "specialty-breakfast",
    "C&C Burrito",
    6.75
  ],
  [
    "specialty-breakfast",
    "El Rey",
    7.75
  ],
  [
    "hot-sandwiches",
    "Meatball Parmesan",
    9.75
  ],
  [
    "hot-sandwiches",
    "Eggplant Parmesan",
    9.75
  ],
  [
    "hot-sandwiches",
    "Chicken Cutlet Parmesan",
    9.75
  ],
  [
    "hot-sandwiches",
    "Sausage & Peppers",
    9.75
  ],
  [
    "hot-sandwiches",
    "Hot Roast Beef & Gravy",
    9.75
  ],
  [
    "hot-sandwiches",
    "Hot Turkey & Gravy",
    9.75
  ],
  [
    "hot-sandwiches",
    "Homemade Roast Pork",
    9.75
  ],
  [
    "specialty-sandwiches",
    "Donnie Brasco",
    9.75
  ],
  [
    "specialty-sandwiches",
    "Eggplant Supreme",
    7.75
  ],
  [
    "specialty-sandwiches",
    "Main Street",
    7.75
  ],
  [
    "specialty-sandwiches",
    "The Danburian",
    7.75
  ],
  [
    "specialty-sandwiches",
    "Classic",
    8.75
  ],
  [
    "specialty-sandwiches",
    "Cancun Club",
    8.75
  ],
  [
    "specialty-sandwiches",
    "Combo",
    9.75
  ],
  [
    "specialty-sandwiches",
    "Veggie Lover",
    6.75
  ],
  [
    "specialty-sandwiches",
    "Dockside",
    7.75
  ],
  [
    "specialty-sandwiches",
    "The New Yorker",
    8.75
  ],
  [
    "specialty-sandwiches",
    "Moonstruck",
    8.75
  ],
  [
    "specialty-sandwiches",
    "South Of The Border",
    8.75
  ],
  [
    "specialty-sandwiches",
    "WestConn",
    9.75
  ],
  [
    "specialty-sandwiches",
    "Philly Cheesesteak",
    9.75
  ],
  [
    "specialty-sandwiches",
    "The Balboa",
    9.75
  ],
  [
    "specialty-sandwiches",
    "The Cuban",
    9.75
  ],
  [
    "panini",
    "184",
    7.75
  ],
  [
    "panini",
    "Candlewood",
    7.75
  ],
  [
    "panini",
    "HATS",
    7.75
  ],
  [
    "panini",
    "Hat City",
    7.75
  ],
  [
    "panini",
    "Veggie Panini",
    7.25
  ],
  [
    "panini",
    "The Mayor",
    8.75
  ],
  [
    "panini",
    "DHS",
    8.75
  ],
  [
    "panini",
    "The Mad Hatter",
    8.75
  ],
  [
    "salads",
    "House Salad",
    4.75
  ],
  [
    "salads",
    "Chef Salad",
    7.25
  ],
  [
    "salads",
    "Caesar Salad",
    7.25
  ],
  [
    "salads",
    "Chicken, Egg Or Tuna Salad",
    7.25
  ],
  [
    "salads",
    "Cobb Salad",
    8.25
  ],
  [
    "salads",
    "Southwestern Chicken Salad",
    8.25
  ],
  [
    "burgers",
    "The All American",
    4.75
  ],
  [
    "burgers",
    "Carlito's Way",
    4.75
  ],
  [
    "burgers",
    "The Lone Star",
    4.75
  ],
  [
    "burgers",
    "Chili Willie",
    5.75
  ],
  [
    "burgers",
    "Philly Cheesesteak",
    5.75
  ],
  [
    "sides",
    "French Fries",
    4.5
  ],
  [
    "sides",
    "Onion Rings",
    4.5
  ],
  [
    "sides",
    "Dill Pickle",
    2.5
  ],
  [
    "sides",
    "Mozzarella Sticks (With Tomato Sauce) (6)",
    5.25
  ],
  [
    "sides",
    "Chicken Fingers (6)",
    6.75
  ],
  [
    "sides",
    "Buffalo Wings (8)",
    6.75
  ],
  [
    "sides",
    "Rice",
    4.0
  ],
  [
    "sides",
    "Pasta With Marinara Sauce",
    4.0
  ],
  [
    "sides",
    "Beefy Patty",
    2.5
  ],
  [
    "sides",
    "Empanadas",
    2.0
  ],
  [
    "grill",
    "Grilled Cheese",
    4.0
  ],
  [
    "grill",
    "Hot Dog Seared On The Grill",
    2.75
  ],
  [
    "grill",
    "Traditional Bacon, Lettuce And Tomato On A Roll",
    5.75
  ],
  [
    "grill",
    "Our Own Chicken Noodle Soup 16 Oz",
    6.0
  ],
  [
    "grill",
    "Our Famous Chili 16 Oz",
    5.75
  ],
  [
    "specialty-lunch",
    "Andrew's Special",
    7.75
  ],
  [
    "specialty-lunch",
    "Teresa To Go",
    7.75
  ],
  [
    "hot-plates",
    "White Or Yellow Rice With Pinto Or Black Beans And Chicken Breast Stew",
    8.5
  ],
  [
    "hot-plates",
    "White Or Yellow Rice With Pinto Or Black Beans And Beef Stew",
    9.5
  ],
  [
    "hot-plates",
    "White Or Yellow Rice With Pinto Or Black Beans And Pork Ribs",
    8.5
  ]
];

describe("Approved first-listed menu prices", () => {
  it.each(EXPECTED_PRICES)("%s / %s costs $%s", (categoryId, name, price) => {
    const item = MENU_CATEGORIES.find((category) => category.id === categoryId)?.items.find((dish) => dish.name === name);
    expect(item?.price).toBe(price);
  });
  it("contains all 75 distinct category-specific dishes without duplicate All Day listings", () => {
    expect(MENU_CATEGORIES.flatMap((category) => category.items)).toHaveLength(75);
    expect(new Set(MENU_CATEGORIES.map((category) => category.id)).size).toBe(11);
  });
});
