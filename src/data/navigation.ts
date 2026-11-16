export interface NavigationItem {
  label: string;
  href: string;
}

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Study in Germany", href: "/study-in-germany" },
  { label: "Universities", href: "/universities" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
