export const METRIKA_COUNTER_ID = 109840408;

export type MetrikaGoal =
  | "booking_telegram"
  | "booking_max"
  | "phone_click"
  | "yandex_maps_click"
  | "telegram_channel_click"
  | "contact_telegram"
  | "contact_max"
  | "promo_conditions_click"
  | "seo_landing_view"
  | "price_view";

export function reachGoal(goal: MetrikaGoal, params?: Record<string, string>) {
  if (typeof window === "undefined" || !window.ym) {
    return;
  }

  window.ym(METRIKA_COUNTER_ID, "reachGoal", goal, params);
}
