import Link from "next/link";
import type { ReactNode } from "react";

interface PrimaryButtonProps {
  href: string;
  children: ReactNode;
  variant?: "light" | "dark" | "outline";
  className?: string;
}

export function PrimaryButton({
  href,
  children,
  variant = "dark",
  className = "",
}: PrimaryButtonProps) {
  return (
    <Link className={`button button--${variant} ${className}`.trim()} href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className="button__arrow">
        ↗
      </span>
    </Link>
  );
}
