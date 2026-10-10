import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Clock3, MapPin, Phone, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/cc-deli-hero.jpg";
import logo from "../assets/c_c_logo.jpg.asset.json";
import { Button } from "@/components/ui/button";
import { RestaurantMenu, type MenuCategory, type MenuGroup } from "@/components/restaurant-menu";

const DAILY_SPECIAL = "Today’s hot special: Ask us what’s fresh from the kitchen";
const PHONE_NUMBER = "+18605550101";
const HERO_TAGLINE = "Deli classics. Latin soul.";
const HERO_DESCRIPTION = "Stacked deli sandwiches and homestyle Latin hot food, made fresh for your day.";
const FAVORITES: { name: string; tag: string; price: number; group: MenuGroup }[] = [
  { name: "Bacon, Egg & Cheese", tag: "Breakfast", price: 4.0, group: "breakfast" },
  { name: "The Cuban", tag: "Deli sandwich", price: 9.75, group: "deli" },
  { name: "Empanadas", tag: "Snack", price: 2.0, group: "deli" },
  { name: "Beef Stew Plate", tag: "Latin hot food", price: 9.5, group: "latin" },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    "id": "breakfast",
    "label": "Breakfast",
    "group": "breakfast",
    "items": [
      {
        "name": "2 Eggs On A Roll",
        "price": 3.0,
        "description": "Two eggs, gently cooked, served on a soft roll."
      },
      {
        "name": "Bacon, Ham Or Sausage And Eggs On A Roll With Cheese",
        "price": 4.0,
        "description": "On bagel, bagel with cream cheese or jelly, croissant, wrap or butter roll for an additional price. With extra meat for an additional price."
      },
      {
        "name": "Egg Platter",
        "price": 6.75,
        "description": "2 eggs with bacon, ham or sausage with home fries and side toast."
      },
      {
        "name": "3 Stack Of Pancakes Or French Toast",
        "price": 5.25,
        "description": "Stacked pancakes or French toast, served with choice of preparation style."
      },
      {
        "name": "Side Home Fries",
        "price": 3.0,
        "description": "Crispy Homestyle Fries, Perfectly Seasoned and Golden Brown"
      }
    ]
  },
  {
    "id": "specialty-breakfast",
    "label": "Specialty Breakfast",
    "group": "breakfast",
    "items": [
      {
        "name": "Western Wrap",
        "price": 5.75,
        "description": "Scrambled eggs, American cheese with ham, onions and peppers."
      },
      {
        "name": "C&C Wrap",
        "price": 5.75,
        "description": "Scrambled eggs with cheddar cheese, bacon, onions, peppers and tomato."
      },
      {
        "name": "Main St Wrap",
        "price": 9.25,
        "description": "Bacon, eggs, cheese, hashbrowns, chicken cutlet, hot sauce."
      },
      {
        "name": "Veggie Lover",
        "price": 5.5,
        "description": "Scrambled eggs, Monterey jack pepper, mushrooms, tomato and broccoli."
      },
      {
        "name": "Meat Lover",
        "price": 6.75,
        "description": "Eggs with bacon, ham, sausage and cheese on a roll."
      },
      {
        "name": "Blanca's Special",
        "price": 7.75,
        "description": "Ham, eggs, cheese, onions and peppers, quesadilla."
      },
      {
        "name": "C&C Burrito",
        "price": 6.75,
        "description": "Eggs, cheddar cheese, salsa, home fries with bacon or sausage."
      },
      {
        "name": "El Rey",
        "price": 7.75,
        "description": "Steak, eggs, home fries, spinach, served on a plate."
      }
    ]
  },
  {
    "id": "hot-sandwiches",
    "label": "Hot Sandwiches",
    "group": "deli",
    "items": [
      {
        "name": "Meatball Parmesan",
        "price": 9.75,
        "description": "Meatball parmesan sandwich, served on a choice of roll or sub, with melted cheese."
      },
      {
        "name": "Eggplant Parmesan",
        "price": 9.75,
        "description": "Eggplant Parmesan in choice of roll or sub, layered with marinara sauce, melted mozzarella."
      },
      {
        "name": "Chicken Cutlet Parmesan",
        "price": 9.75,
        "description": "Chicken cutlet topped with marinara sauce and melted Parmesan cheese. Choice of roll or sub."
      },
      {
        "name": "Sausage & Peppers",
        "price": 9.75,
        "description": "Sausage & peppers on your choice of roll or sub."
      },
      {
        "name": "Hot Roast Beef & Gravy",
        "price": 9.75,
        "description": "Hot roast beef smothered in gravy, served on your choice of roll or sub."
      },
      {
        "name": "Hot Turkey & Gravy",
        "price": 9.75,
        "description": "Sliced turkey smothered in gravy, choice of roll or sub."
      },
      {
        "name": "Homemade Roast Pork",
        "price": 9.75,
        "description": "Homemade roast pork on your choice of roll or sub."
      }
    ]
  },
  {
    "id": "specialty-sandwiches",
    "label": "Specialty Sandwiches",
    "group": "deli",
    "items": [
      {
        "name": "Donnie Brasco",
        "price": 9.75,
        "description": "Genoa salami, ham capicola, provolone, fried eggplant, lettuce, tomato and cheese, roasted peppers, oil, vinegar on a sub roll."
      },
      {
        "name": "Eggplant Supreme",
        "price": 7.75,
        "description": "Fried eggplant, fresh mozzarella, roasted peppers, oil, vinegar and basil on a kaiser roll."
      },
      {
        "name": "Main Street",
        "price": 7.75,
        "description": "Oven-gold turkey, cheddar cheese, cucumber, lettuce, tomato and sun-dried tomato mayo on a kaiser roll."
      },
      {
        "name": "The Danburian",
        "price": 7.75,
        "description": "Cracked peppermill turkey, Swiss cheese, coleslaw and Russian dressing on rye bread."
      },
      {
        "name": "Classic",
        "price": 8.75,
        "description": "Ham, Swiss cheese, bacon, lettuce, tomato and mayo on a kaiser roll."
      },
      {
        "name": "Cancun Club",
        "price": 8.75,
        "description": "Our famous chicken salad, crispy bacon, Virginia ham with lettuce and tomato on a kaiser roll."
      },
      {
        "name": "Combo",
        "price": 9.75,
        "description": "Ham, salami, pepperoni, provolone cheese, lettuce, tomato, roasted peppers, oil and vinegar on a sub roll."
      },
      {
        "name": "Veggie Lover",
        "price": 6.75,
        "description": "Eggplant cutlet, lettuce, tomato, olives, onions, roasted peppers, pickles and cucumbers on a kaiser roll. Add cheese for an additional charge."
      },
      {
        "name": "Dockside",
        "price": 7.75,
        "description": "Spicy. Tuna melt with American cheese, lettuce and tomato on a kaiser roll."
      },
      {
        "name": "The New Yorker",
        "price": 8.75,
        "description": "Spicy. Grilled pastrami smothered with Swiss cheese and sauerkraut with spicy mustard on rye bread."
      },
      {
        "name": "Moonstruck",
        "price": 8.75,
        "description": "Marinated grilled chicken, roasted peppers, lettuce and basil mayo on a sub roll."
      },
      {
        "name": "South Of The Border",
        "price": 8.75,
        "description": "Spicy. Marinated grilled chicken, Monterey jack cheese topped with our fresh-made salsa on a sub roll."
      },
      {
        "name": "WestConn",
        "price": 9.75,
        "description": "Spicy. Hot pastrami topped with 3 different cheeses, bacon, lettuce, tomato and spicy mustard on a sub roll."
      },
      {
        "name": "Philly Cheesesteak",
        "price": 9.75,
        "description": "Spicy. Thinly-sliced roasted beef, melted cheese, onions and peppers on a sub roll."
      },
      {
        "name": "The Balboa",
        "price": 9.75,
        "description": "Spicy. Hot roasted beef with melted cheese on a toasted garlic sub roll."
      },
      {
        "name": "The Cuban",
        "price": 9.75,
        "description": "Our famous roasted pork, grilled ham, melted Swiss cheese, dill pickles and mustard on a sub roll."
      }
    ]
  },
  {
    "id": "panini",
    "label": "Panini",
    "group": "deli",
    "items": [
      {
        "name": "184",
        "price": 7.75,
        "description": "Grilled chicken, roasted peppers, tomatoes, fresh mozzarella, fried egg, basil and pesto."
      },
      {
        "name": "Candlewood",
        "price": 7.75,
        "description": "Cajun turkey, pepper jack cheese, tomato, red onion and Cajun mayo."
      },
      {
        "name": "HATS",
        "price": 7.75,
        "description": "Grilled chicken, bacon, tomatoes, chipotle and ranch."
      },
      {
        "name": "Hat City",
        "price": 7.75,
        "description": "Salsalito turkey, cheddar cheese and homemade salsa."
      },
      {
        "name": "Veggie Panini",
        "price": 7.25,
        "description": "Slice grilled vegetables marinated with balsamic and fresh mozzarella."
      },
      {
        "name": "The Mayor",
        "price": 8.75,
        "description": "Chicken cutlet, bacon, melted American cheese, lettuce and Russian dressing."
      },
      {
        "name": "DHS",
        "price": 8.75,
        "description": "Ham, turkey, bacon, Monterey jack cheese and pesto mayo."
      },
      {
        "name": "The Mad Hatter",
        "price": 8.75,
        "description": "Mortadella, soppressata, capicola, provolone, lettuce, tomato."
      }
    ]
  },
  {
    "id": "salads",
    "label": "Salads",
    "group": "deli",
    "items": [
      {
        "name": "House Salad",
        "price": 4.75,
        "description": "Mixed field of greens, plum tomatoes, cucumbers, red onions, black olives, and dressing."
      },
      {
        "name": "Chef Salad",
        "price": 7.25,
        "description": "Turkey, ham, Swiss and cheddar cheese in a garden salad."
      },
      {
        "name": "Caesar Salad",
        "price": 7.25,
        "description": "Romaine lettuce, Parmesan cheese, fresh croutons and Caesar dressing."
      },
      {
        "name": "Chicken, Egg Or Tuna Salad",
        "price": 7.25,
        "description": "Served over a bed of lettuce, tomatoes, cucumbers and black olives."
      },
      {
        "name": "Cobb Salad",
        "price": 8.25,
        "description": "Garden salad with grilled chicken, bacon and a hard boiled egg."
      },
      {
        "name": "Southwestern Chicken Salad",
        "price": 8.25,
        "description": "Romaine lettuce, cajun chicken, corn, tomatoes, black olives, and crunchy tortilla chips with ranch dressing."
      }
    ]
  },
  {
    "id": "burgers",
    "label": "Burger Corner",
    "group": "deli",
    "items": [
      {
        "name": "The All American",
        "price": 4.75,
        "description": "1/4 beef patty with cheese topped with lettuce and tomato."
      },
      {
        "name": "Carlito's Way",
        "price": 4.75,
        "description": "1/4 beef patty, jalapeño cheese, hot cherry peppers. Hot sauce optional."
      },
      {
        "name": "The Lone Star",
        "price": 4.75,
        "description": "1/4 beef patty, swiss cheese and a fried egg."
      },
      {
        "name": "Chili Willie",
        "price": 5.75,
        "description": "1/4 beef patty, cheddar cheese and topped with our own chili."
      },
      {
        "name": "Philly Cheesesteak",
        "price": 5.75,
        "description": "1/4 beef patty, melted cheese topped with onions and peppers."
      }
    ]
  },
  {
    "id": "sides",
    "label": "Pick Your Side",
    "group": "deli",
    "items": [
      {
        "name": "French Fries",
        "price": 4.5,
        "description": "Crispy golden strips of deliciousness served hot and seasoned to perfection."
      },
      {
        "name": "Onion Rings",
        "price": 4.5,
        "description": "Crispy golden-fried onion rings, perfectly seasoned for a savory crunch."
      },
      {
        "name": "Dill Pickle",
        "price": 2.5,
        "description": "Cucumbers brined in a seasoned mixture of vinegar, salt, and dill, resulting in a tangy and crunchy dill pickle."
      },
      {
        "name": "Mozzarella Sticks (With Tomato Sauce) (6)",
        "price": 5.25,
        "description": "Breaded mozzarella cheese sticks, typically served with a side of tomato sauce for dipping."
      },
      {
        "name": "Chicken Fingers (6)",
        "price": 6.75,
        "description": "Breaded chicken tenders, typically served with a dipping sauce."
      },
      {
        "name": "Buffalo Wings (8)",
        "price": 6.75,
        "description": "Eight chicken wings tossed in a classic buffalo sauce, typically served with a side of blue cheese dressing."
      },
      {
        "name": "Rice",
        "price": 4.0,
        "description": "Flavorful rice dish prepared to perfection, showcasing an ideal complement for any meal."
      },
      {
        "name": "Pasta With Marinara Sauce",
        "price": 4.0,
        "description": "Pasta served with a classic marinara sauce, often prepared with tomatoes, garlic, and herbs."
      },
      {
        "name": "Beefy Patty",
        "price": 2.5,
        "description": "Golden, flaky pastry encasing a seasoned beef filling, inspired by traditional Jamaican cuisine."
      },
      {
        "name": "Empanadas",
        "price": 2.0,
        "description": "Cheese, chicken, or beef."
      }
    ]
  },
  {
    "id": "grill",
    "label": "Lunch From the Grill",
    "group": "deli",
    "items": [
      {
        "name": "Grilled Cheese",
        "price": 4.0,
        "description": "With tomato for an additional charge."
      },
      {
        "name": "Hot Dog Seared On The Grill",
        "price": 2.75,
        "description": "With melted cheese, onions and sauerkraut or our famous chili for an additional charge."
      },
      {
        "name": "Traditional Bacon, Lettuce And Tomato On A Roll",
        "price": 5.75,
        "description": "Crispy bacon, fresh lettuce, and ripe tomato served on a soft roll."
      },
      {
        "name": "Our Own Chicken Noodle Soup 16 Oz",
        "price": 6.0,
        "description": "Made with tender roasted chicken and fresh noodles, simmered in a savory broth with a blend of vegetables and herbs."
      },
      {
        "name": "Our Famous Chili 16 Oz",
        "price": 5.75,
        "description": "Our famous chili, typically includes a hearty blend of ground beef, beans, tomatoes, and a mix of spices, served in a 16 oz portion."
      }
    ]
  },
  {
    "id": "specialty-lunch",
    "label": "Specialty Lunch",
    "group": "deli",
    "items": [
      {
        "name": "Andrew's Special",
        "price": 7.75,
        "description": "Crispy buffalo chicken, lettuce, tomato, mozzarella ranch wrap."
      },
      {
        "name": "Teresa To Go",
        "price": 7.75,
        "description": "Grilled BBQ chicken, lettuce, tomato, pepper jack cheese wrap."
      }
    ]
  },
  {
    "id": "hot-plates",
    "label": "Hot Plates",
    "group": "latin",
    "items": [
      {
        "name": "White Or Yellow Rice With Pinto Or Black Beans And Chicken Breast Stew",
        "price": 8.5,
        "description": ""
      },
      {
        "name": "White Or Yellow Rice With Pinto Or Black Beans And Beef Stew",
        "price": 9.5,
        "description": "Tender beef stew served over white or yellow rice, accompanied by either pinto or black beans."
      },
      {
        "name": "White Or Yellow Rice With Pinto Or Black Beans And Pork Ribs",
        "price": 8.5,
        "description": "Pork ribs served over white or yellow rice, accompanied by either pinto or black beans."
      }
    ]
  }
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "C&C Delicatessen | New Milford, CT" },
      {
        name: "description",
        content:
          "Classic deli favorites and Latin & Caribbean hot food at C&C Delicatessen in New Milford, Connecticut.",
      },
      { property: "og:title", content: "C&C Delicatessen | New Milford, CT" },
      {
        property: "og:description",
        content: "Big sandwiches, hot plates and local flavor—ready when you are.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeMenu, setActiveMenu] = useState<MenuGroup>("deli");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
        <div className="mx-auto grid h-16 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:h-20 sm:px-6 lg:px-10">
          <a href="#top" className="flex min-w-0 items-center gap-2 font-display text-lg leading-none font-black uppercase sm:text-2xl">
            <img src={logo.url} alt="C&C Delicatessen logo" width={48} height={48} className="size-11 shrink-0 rounded-full sm:size-14" />
            <span className="truncate"><span className="text-primary">C&amp;C</span> Deli</span>
          </a>
          <div className="flex shrink-0 items-center gap-2 sm:gap-6">
            <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
              <a className="text-sm font-bold uppercase hover:text-primary" href="#menu">Menu</a>
              <a className="text-sm font-bold uppercase hover:text-primary" href="#location">Location</a>
            </nav>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-extrabold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:px-5"
            >
              <Phone aria-hidden="true" className="size-4" />
              Call Now
            </a>
          </div>
        </div>
        <nav aria-label="Mobile navigation" className="grid grid-cols-2 border-t border-border md:hidden">
          <a className="min-h-10 border-r border-border py-2 text-center text-xs font-black uppercase" href="#menu">Menu</a>
          <a className="min-h-10 py-2 text-center text-xs font-black uppercase" href="#location">Location</a>
        </nav>
        <div className="bg-foreground px-4 py-2 text-center text-xs font-bold tracking-wide text-background sm:text-sm">
          <span className="mr-2 text-special">HOT TODAY</span>
          {DAILY_SPECIAL}
        </div>
      </header>

      <main id="top">
        <section className="deli-hero relative isolate overflow-hidden bg-foreground">
          <img
            src={heroImage}
            alt="An overstuffed Italian deli sandwich with fried plantains"
            width={1600}
            height={1008}
            fetchPriority="high"
            className="deli-hero-photo absolute inset-0 h-full w-full object-cover"
          />
          <div className="deli-hero-shade absolute inset-0" />
          <div className="relative mx-auto flex max-w-7xl px-5 pb-10 pt-44 sm:px-6 sm:pb-14 sm:pt-14 lg:px-10 lg:py-16">
            <div className="deli-hero-copy max-w-xl text-hero-foreground">
              <p className="mb-5 text-xs font-extrabold uppercase sm:text-sm">
                New Milford, Connecticut
              </p>
              <h1 className="font-display font-black uppercase">
                <span className="deli-brand block leading-none">C&amp;C</span>
                <span className="mt-1 block text-3xl leading-tight sm:text-4xl lg:text-5xl">Delicatessen<span className="text-special">.</span></span>
              </h1>
              <p className="mt-6 text-2xl font-extrabold leading-tight text-special sm:text-3xl">{HERO_TAGLINE}</p>
              <p className="mt-4 max-w-sm text-base leading-relaxed text-hero-muted sm:text-lg">
                {HERO_DESCRIPTION}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg" className="min-h-14 px-5 text-base font-extrabold">
                <a href="#menu">
                  <ShoppingBag aria-hidden="true" className="size-5" /> Order Online
                </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="min-h-14 border-hero-foreground/60 bg-hero-surface px-5 text-base font-extrabold text-hero-foreground hover:bg-hero-surface hover:text-special">
                <a href="#menu">
                  View Menu <ArrowDown aria-hidden="true" className="size-5" />
                </a>
                </Button>
              </div>
            </div>
            <img src={logo.url} alt="" width={144} height={144} className="deli-logo-stamp absolute right-6 top-7 size-28 rounded-full border-4 border-hero-foreground sm:right-8 sm:top-10 sm:size-36 lg:right-14" />
          </div>
        </section>

        <section aria-labelledby="favorites-title" className="border-b border-border bg-background px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-xs font-extrabold uppercase text-primary"><Star aria-hidden="true" className="size-4 fill-primary" /> Customer favorites</p>
                <h2 id="favorites-title" className="mt-2 font-display text-2xl uppercase leading-tight sm:text-4xl">What regulars order</h2>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
              {FAVORITES.map((fav) => (
                <a key={fav.name} href="#menu" onClick={() => setActiveMenu(fav.group)} className="group flex min-h-32 flex-col justify-between rounded-md border border-border bg-card p-4 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-primary">
                  <span className="text-[11px] font-bold uppercase text-muted-foreground">{fav.tag}</span>
                  <span className="mt-2 font-display text-base uppercase leading-tight sm:text-lg">{fav.name}</span>
                  <span className="mt-3 flex items-center justify-between text-sm font-extrabold text-primary tabular-nums">${fav.price.toFixed(2)}<ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" /></span>
                </a>
              ))}
            </div>
          </div>
        </section>


        <RestaurantMenu categories={MENU_CATEGORIES} group={activeMenu} onGroupChange={setActiveMenu} />

        <section id="location" className="scroll-mt-28 bg-foreground text-background">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="px-4 py-16 sm:px-10 sm:py-20 lg:px-14 lg:py-24">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-special">Come hungry</p>
              <h2 className="mt-3 font-display text-4xl leading-none font-black uppercase sm:text-6xl">Find us in<br />New Milford.</h2>
              <div className="mt-10 space-y-7 border-t border-background/20 pt-8">
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <MapPin aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-special" />
                  <div><p className="font-bold">40 Danbury Rd</p><p className="text-background/65">New Milford, CT</p></div>
                </div>
                <div className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
                  <Clock3 aria-hidden="true" className="mt-0.5 size-6 shrink-0 text-special" />
                  <div className="space-y-1">
                    <p><span className="inline-block w-24 font-bold">Mon–Sat</span> 5am–8pm</p>
                    <p><span className="inline-block w-24 font-bold">Sunday</span> 6am–3pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="map-grid flex min-h-80 items-center justify-center p-8 lg:min-h-full" aria-label="Google Maps placeholder">
              <div className="border border-foreground/15 bg-background px-8 py-7 text-center text-foreground shadow-xl">
                <MapPin aria-hidden="true" className="mx-auto size-8 text-primary" />
                <p className="mt-3 font-display text-lg font-black uppercase">40 Danbury Rd</p>
                <p className="mt-1 text-sm text-muted-foreground">Google Map coming soon</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-background/15 bg-foreground px-4 py-6 text-background sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display font-black uppercase">C&amp;C Delicatessen</p>
          <p className="text-background/60">40 Danbury Rd · New Milford, CT</p>
        </div>
      </footer>
    </div>
  );
}
