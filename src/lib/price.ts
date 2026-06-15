import type { PetType, PriceItem } from "@/data/price";

export type PriceFilters = {
  petType?: PetType | "all";
  query?: string;
  category?: string;
};

export function filterPriceItems(items: PriceItem[], filters: PriceFilters) {
  const query = filters.query?.trim().toLowerCase();

  return items.filter((item) => {
    const matchesPet = !filters.petType || filters.petType === "all" || item.petType === filters.petType;
    const matchesCategory =
      !filters.category || filters.category === "all" || item.serviceCategory === filters.category;
    const matchesQuery =
      !query ||
      [item.breed, item.serviceName, item.serviceCategory, item.coatType]
        .filter(Boolean)
        .some((value) => value!.toLowerCase().includes(query));

    return matchesPet && matchesCategory && matchesQuery;
  });
}
