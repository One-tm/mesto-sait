type BrandIconProps = {
  name: "telegram" | "max" | "yandex-maps";
  className?: string;
};

export function BrandIcon({ name, className = "h-5 w-5" }: BrandIconProps) {
  if (name === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
        <path
          d="M20.6 4.4 3.9 10.9c-1.1.4-1.1 1.1-.2 1.4l4.3 1.3 1.7 5.1c.2.7.4.9.8.9s.6-.2 1-.5l2.4-2.3 4.9 3.6c.9.5 1.5.3 1.7-.9l3-14c.3-1.2-.5-1.7-1.9-1.1Z"
          fill="currentColor"
        />
        <path d="m8.4 13.2 9.8-6.1-7.7 7.1-.3 3.2-1.8-4.2Z" fill="white" opacity=".82" />
      </svg>
    );
  }

  if (name === "max") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
        <rect x="3" y="4" width="18" height="16" rx="5" fill="currentColor" />
        <path
          d="M7.2 15.7V8.4h1.6l2.7 3.7 2.7-3.7h1.6v7.3h-1.7v-4.5l-2.1 2.9h-1l-2.1-2.9v4.5H7.2Z"
          fill="white"
        />
        <path d="m16.3 15.7 2.1-3.7-2-3.6h1.8l1.1 2.1 1.1-2.1H22l-2 3.5 2.1 3.8h-1.8l-1.2-2.2-1.2 2.2h-1.6Z" fill="white" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <path
        d="M12 2.5c-4.2 0-7.6 3.3-7.6 7.5 0 5.7 7.6 11.5 7.6 11.5s7.6-5.8 7.6-11.5c0-4.2-3.4-7.5-7.6-7.5Z"
        fill="currentColor"
      />
      <circle cx="12" cy="10" r="3" fill="white" />
      <path d="M10.9 9.8 8.6 6.4h1.8l1.4 2.2 1.4-2.2H15l-2.5 3.5v3.7h-1.6V9.8Z" fill="currentColor" />
    </svg>
  );
}
