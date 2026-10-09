import { useState } from "react";
import { Flame, Search, X, ArrowRight, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export type MenuGroup = "breakfast" | "deli" | "latin";
export type MenuCategory = {
  id: string;
  label: string;
  group: MenuGroup;
  items: { name: string; price: number; description: string }[];
};

const GROUPS: { id: MenuGroup; label: string }[] = [
  { id: "breakfast", label: "Breakfast" },
  { id: "deli", label: "Classic Deli" },
  { id: "latin", label: "Latin & Caribbean" },
];

export function RestaurantMenu({ categories, group, onGroupChange }: {
  categories: MenuCategory[];
  group: MenuGroup;
  onGroupChange: (group: MenuGroup) => void;
}) {
  const [selectedId, setSelectedId] = useState("hot-sandwiches");
  const [search, setSearch] = useState("");
  const groupCategories = categories.filter((category) => category.group === group);
  const selected = groupCategories.find((category) => category.id === selectedId) ?? groupCategories[0];
  const query = search.trim().toLowerCase();
  const shown = query
    ? categories.map((category) => ({ ...category, items: category.items.filter((item) => `${item.name} ${item.description}`.toLowerCase().includes(query)) })).filter((category) => category.items.length > 0)
    : selected ? [selected] : [];
  const count = shown.reduce((sum, category) => sum + category.items.length, 0);

  function changeGroup(value: string) {
    if (value !== "breakfast" && value !== "deli" && value !== "latin") return;
    onGroupChange(value);
    setSearch("");
  }

  return (
    <section id="menu" className="scroll-mt-44 border-b border-border bg-background px-4 py-14 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-extrabold uppercase text-primary">The C&amp;C menu</p>
            <h2 className="mt-3 font-display text-3xl uppercase leading-tight sm:text-5xl">Pick your craving.</h2>
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="pointer-events-none absolute left-3 top-3.5 size-4 text-muted-foreground" aria-hidden="true" />
            <Input type="search" aria-label="Search the full menu" placeholder="Search the menu…" value={search} onChange={(event) => setSearch(event.target.value)} className="h-11 bg-card pl-10 pr-11 shadow-none" />
            {search && <Button variant="ghost" size="icon" aria-label="Clear search" onClick={() => setSearch("")} className="absolute right-1 top-1 size-9"><X className="size-4" /></Button>}
          </div>
        </div>

        <Tabs value={group} onValueChange={changeGroup} className="mt-8">
          <TabsList aria-label="Menu sections" className="grid h-auto w-full grid-cols-3 gap-0 rounded-none border-b border-border bg-transparent p-0">
            {GROUPS.map((entry) => <TabsTrigger key={entry.id} value={entry.id} className="min-h-16 whitespace-normal rounded-none border-b-3 border-transparent px-2 py-3 text-sm font-extrabold leading-snug data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none sm:text-lg">{entry.label}</TabsTrigger>)}
          </TabsList>
        </Tabs>

        <div className="mt-7 grid gap-8 lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-12">
          <aside>
            <div className="lg:hidden">
              <Select value={selected?.id} onValueChange={(value) => { setSelectedId(value); setSearch(""); }}>
                <SelectTrigger aria-label="Dish category" className="h-12 bg-card font-bold shadow-none"><SelectValue /></SelectTrigger>
                <SelectContent>{groupCategories.map((category) => <SelectItem key={category.id} value={category.id}>{category.label}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <nav aria-label="Dish categories" className="hidden border-l border-border lg:flex lg:flex-col">
              {groupCategories.map((category) => <Button key={category.id} variant="ghost" aria-current={!query && selected?.id === category.id ? "true" : undefined} onClick={() => { setSelectedId(category.id); setSearch(""); }} className={`h-auto min-h-12 justify-between gap-2 rounded-none border-l-3 px-4 py-3 text-left whitespace-normal ${!query && selected?.id === category.id ? "border-primary bg-primary/5 text-primary" : "border-transparent text-muted-foreground"}`}><span>{category.label}</span><span className="text-xs tabular-nums">{category.items.length}</span></Button>)}
            </nav>
          </aside>

          <div aria-live="polite" className="min-w-0">
            {query && <div className="mb-6 flex items-center justify-between gap-3 border-b border-border pb-4"><h3 className="text-lg font-bold">Search results</h3><span className="text-sm text-muted-foreground">{count} {count === 1 ? "dish" : "dishes"}</span></div>}
            {shown.map((category) => <div key={category.id} className="mb-8 last:mb-0">
              <div className="mb-2 flex items-center justify-between gap-3 border-b-2 border-foreground pb-4">
                <h3 className="flex min-w-0 items-center gap-2 font-display text-xl uppercase sm:text-2xl">{category.group === "latin" && <Flame className="size-5 shrink-0 text-primary" aria-hidden="true" />}{category.label}</h3>
                <span className="shrink-0 text-xs font-bold text-muted-foreground">{category.items.length} dishes</span>
              </div>
              <div className="grid gap-x-8 md:grid-cols-2">
                {category.items.map((item) => <article key={item.name} className="min-w-0 border-b border-border py-5">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="min-w-0 text-base font-extrabold leading-snug">{item.name}</h4>
                    <span className="shrink-0 text-base font-extrabold text-primary tabular-nums">${item.price.toFixed(2)}</span>
                  </div>
                  {item.description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>}
                </article>)}
              </div>
            </div>)}
            {count === 0 && <div className="py-14 text-center"><UtensilsCrossed className="mx-auto mb-4 size-7 text-muted-foreground" /><h3 className="text-lg font-bold">No dishes found</h3><Button variant="link" onClick={() => setSearch("")}>Back to the menu <ArrowRight className="size-4" /></Button></div>}
          </div>
        </div>
      </div>
    </section>
  );
}