import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, Clock3, MapPin, Phone, ShoppingBag } from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/cc-deli-hero.jpg";
import logo from "../assets/c_c_logo.jpg.asset.json";
import { Button } from "@/components/ui/button";

const DAILY_SPECIAL = "Today’s hot special: Ask us what’s fresh from the kitchen";
const PHONE_NUMBER = "+18605550101";
const HERO_TAGLINE = "Deli classics. Latin soul.";
const HERO_DESCRIPTION = "Stacked deli sandwiches and homestyle Latin hot food, made fresh for your day.";

const menuSections = {
  deli: {
    label: "Classic Deli",
    eyebrow: "Made to order",
    title: "The classics, done right.",
    items: [
      {
        name: "Bacon, Egg & Cheese",
        description: "Crisp bacon, two eggs and melted American on a hard roll.",
      },
      {
        name: "Italian Combo",
        description: "Ham, salami, capicola and provolone with lettuce, tomato and peppers.",
      },
      {
        name: "Fresh Wraps",
        description: "Your choice of deli meat, cheese and crisp vegetables, rolled to order.",
      },
    ],
  },
  latin: {
    label: "Latin & Caribbean",
    eyebrow: "Hot food counter",
    title: "A real meal, ready when you are.",
    items: [
      {
        name: "Ecuadorian Platters",
        description: "A generous daily plate with seasoned rice, beans and rotating proteins.",
      },
      {
        name: "Beef Stew",
        description: "Slow-simmered beef with potatoes, vegetables and rich house seasoning.",
      },
      {
        name: "Tripe",
        description: "Tender, deeply seasoned tripe prepared in our traditional house style.",
      },
    ],
  },
} as const;

type MenuSection = keyof typeof menuSections;

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
  const [activeMenu, setActiveMenu] = useState<MenuSection>("deli");
  const menu = menuSections[activeMenu];

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
              <p className="mb-5 flex items-center gap-3 text-xs font-extrabold uppercase sm:text-sm">
                <span className="h-0.5 w-8 bg-special" aria-hidden="true" />
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

        <div className="border-b border-border bg-special text-foreground">
          <div className="mx-auto grid max-w-7xl grid-cols-2">
            {(["deli", "latin"] as const).map((key) => (
              <Button key={key} asChild variant="ghost" className="h-auto min-h-20 justify-between gap-3 rounded-none px-5 py-4 text-left hover:bg-foreground/5 sm:min-h-24 sm:px-10 first:border-r first:border-foreground/20">
                <a href="#menu" onClick={() => setActiveMenu(key)}>
                  <span className="whitespace-normal"><span className="block text-[10px] font-bold uppercase sm:text-xs">{key === "deli" ? "The sandwich counter" : "The hot food counter"}</span><span className="mt-1 block font-display text-base uppercase sm:text-2xl">{key === "deli" ? "Classic Deli" : "Latin & Caribbean"}</span></span>
                  <ArrowDown aria-hidden="true" className="shrink-0" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <section id="menu" className="scroll-mt-28 border-b border-border bg-background px-4 py-16 sm:px-6 sm:py-24 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-black uppercase tracking-[0.14em] text-primary">Our menu</p>
              <h2 className="mt-3 font-display text-4xl leading-none font-black uppercase sm:text-6xl">Pick your craving.</h2>
            </div>

            <div className="mt-10 grid grid-cols-2 border-b border-border" role="tablist" aria-label="Menu categories">
              {(Object.keys(menuSections) as MenuSection[]).map((key) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activeMenu === key}
                  aria-controls="menu-panel"
                  onClick={() => setActiveMenu(key)}
                  className={`min-h-16 border-b-4 px-3 py-3 text-left text-sm font-extrabold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:text-lg ${
                    activeMenu === key
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {menuSections[key].label}
                  {key === "latin" && <span className="block text-xs font-bold sm:inline sm:pl-1">Hot Food</span>}
                </button>
              ))}
            </div>

            <div id="menu-panel" role="tabpanel" className="grid gap-10 py-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] md:py-14">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-primary">{menu.eyebrow}</p>
                <h3 className="mt-3 max-w-sm font-display text-3xl leading-tight font-black uppercase sm:text-4xl">{menu.title}</h3>
              </div>
              <div className="divide-y divide-border border-y border-border">
                {menu.items.map((item, index) => (
                  <article key={item.name} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4 py-6 sm:gap-6">
                    <span className="font-display text-sm font-black text-primary">0{index + 1}</span>
                    <div className="min-w-0">
                      <h4 className="font-display text-xl font-black uppercase sm:text-2xl">{item.name}</h4>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

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
