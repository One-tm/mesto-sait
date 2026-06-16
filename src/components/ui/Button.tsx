import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const variants = {
  primary:
    "bg-coral text-white shadow-card hover:bg-[#f35f4b] focus-ring",
  secondary:
    "border border-line bg-white text-mint-dark hover:border-mint hover:bg-paper-mint focus-ring",
  contrast:
    "border border-white bg-white text-ink shadow-card hover:bg-paper-mint focus-ring",
  ghost: "text-mint-dark hover:bg-paper-mint focus-ring"
};

const sizes = {
  sm: "min-h-10 px-4 text-sm",
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-base"
};

type CommonProps = {
  children: ReactNode;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  href,
  ...props
}: ButtonAsButton | ButtonAsLink) {
  const classes = [
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition",
    variants[variant],
    sizes[size],
    className
  ].join(" ");

  if (href) {
    const isExternal = href.startsWith("http");
    const isInternal = href.startsWith("/");
    if (!isInternal) {
      return (
        <a
          href={href}
          className={classes}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <Link
        href={href}
        className={classes}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
