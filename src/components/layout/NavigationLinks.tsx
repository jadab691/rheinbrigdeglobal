"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { navigationItems } from "@/data/navigation";

interface NavigationLinksProps {
  variant: "desktop" | "mobile";
}

export function NavigationLinks({ variant }: NavigationLinksProps) {
  const pathname = usePathname();
  const isMobile = variant === "mobile";
  const closeMenu = (event: MouseEvent<HTMLAnchorElement>) => {
    const menu = event.currentTarget.closest("details");
    if (menu) menu.open = false;
  };

  return (
    <nav
      aria-label={isMobile ? "Mobile navigation" : "Main navigation"}
      className={isMobile ? "mobile-nav__panel" : "desktop-nav"}
    >
      {navigationItems.map((item) => {
        const isCurrent =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <Link
            aria-current={isCurrent ? "page" : undefined}
            className={isMobile ? "mobile-nav__link" : "desktop-nav__link"}
            href={item.href}
            key={item.href}
            onClick={isMobile ? closeMenu : undefined}
          >
            {item.label}
            {isMobile && <span aria-hidden="true">↗</span>}
          </Link>
        );
      })}
      {isMobile && (
        <Link
          className="mobile-nav__cta"
          href="/contact"
          onClick={closeMenu}
        >
          Book a consultation
          <span aria-hidden="true">↗</span>
        </Link>
      )}
    </nav>
  );
}
