"use client";

import type { PetType } from "@/data/price";

type PriceFiltersProps = {
  petType: PetType | "all";
  category: string;
  query: string;
  categories: string[];
  onPetTypeChange: (value: PetType | "all") => void;
  onCategoryChange: (value: string) => void;
  onQueryChange: (value: string) => void;
};

const petOptions: Array<{ value: PetType | "all"; label: string }> = [
  { value: "all", label: "Все" },
  { value: "dog", label: "Собаки" },
  { value: "cat", label: "Кошки" }
];

export function PriceFilters({
  petType,
  category,
  query,
  categories,
  onPetTypeChange,
  onCategoryChange,
  onQueryChange
}: PriceFiltersProps) {
  return (
    <div className="mt-10 rounded-[28px] border border-line bg-white p-4 shadow-sm">
      <div className="grid gap-4 lg:grid-cols-[auto_1fr_auto]">
        <div className="flex rounded-full bg-paper p-1">
          {petOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => onPetTypeChange(option.value)}
              className={[
                "focus-ring min-h-11 rounded-full px-4 text-sm font-semibold transition",
                petType === option.value ? "bg-mint-dark text-white" : "text-muted hover:text-mint-dark"
              ].join(" ")}
            >
              {option.label}
            </button>
          ))}
        </div>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Порода, услуга или тип шерсти"
          className="focus-ring min-h-12 rounded-full border border-line bg-paper px-5 text-ink outline-none"
        />
        <select
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
          className="focus-ring min-h-12 rounded-full border border-line bg-paper px-5 text-ink outline-none"
        >
          <option value="all">Все услуги</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
