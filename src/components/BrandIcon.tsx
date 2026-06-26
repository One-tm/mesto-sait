type BrandIconProps = {
  name: "telegram" | "max" | "yandex-maps";
  className?: string;
};

export function BrandIcon({ name, className = "h-5 w-5" }: BrandIconProps) {
  if (name === "telegram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
        <circle cx="12" cy="12" r="11" fill="#27A7E7" />
        <path
          d="M17.6 7.2 5.5 11.9c-.8.3-.8.8-.1 1l3.1 1 1.2 3.7c.2.5.3.7.6.7s.5-.1.8-.4l1.8-1.7 3.5 2.6c.7.4 1.1.2 1.3-.7l2.1-10.2c.2-.9-.4-1.2-1.4-.8Z"
          fill="white"
        />
        <path d="m8.8 13.6 7.1-4.4-5.6 5.2-.2 2.3-1.3-3.1Z" fill="#D7F1FF" />
      </svg>
    );
  }

  if (name === "max") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
        <rect x="2" y="3" width="20" height="18" rx="6" fill="#0077FF" />
        <path d="M8 18.8c1.2-.4 2.3-1 3.1-1.8h5.2c2 0 3.7-1.7 3.7-3.7V9.7C20 7.7 18.3 6 16.3 6H7.7C5.7 6 4 7.7 4 9.7v3.6c0 1.7 1.2 3.1 2.8 3.6.1.6.4 1.3 1.2 1.9Z" fill="#21C7FF" />
        <path
          d="M6.8 14.3V8.8h1.4l2 2.8 2-2.8h1.4v5.5h-1.5v-3.1l-1.5 2h-.8l-1.5-2v3.1H6.8Z"
          fill="white"
        />
        <path
          d="m14.2 14.3 1.7-2.8-1.6-2.7h1.6l.8 1.5.8-1.5H19l-1.6 2.6 1.7 2.9h-1.6l-.9-1.6-.9 1.6h-1.5Z"
          fill="white"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden className={className} fill="none">
      <rect x="2" y="2" width="20" height="20" rx="6" fill="#FFFFFF" />
      <path
        d="M12 3.1c-3.8 0-6.9 3-6.9 6.8 0 5.2 6.9 11 6.9 11s6.9-5.8 6.9-11c0-3.8-3.1-6.8-6.9-6.8Z"
        fill="#FC3F1D"
      />
      <circle cx="12" cy="10" r="3" fill="white" />
      <path d="M11.1 9.8 8.9 6.6h1.6l1.3 2 1.3-2h1.6l-2.3 3.3v3.5h-1.4V9.8Z" fill="#FC3F1D" />
    </svg>
  );
}
