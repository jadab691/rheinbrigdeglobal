import type { ReactNode } from "react";
import type { ServiceIconName } from "@/types/homepage";

interface ServiceIconProps {
  name: ServiceIconName;
}

const iconShapes: Record<ServiceIconName, ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="8.25" />
      <path d="m15.4 8.6-2.2 4.6-4.6 2.2 2.2-4.6 4.6-2.2Z" />
    </>
  ),
  document: (
    <>
      <path d="M7 3.75h7l4 4v12.5H7a1.5 1.5 0 0 1-1.5-1.5V5.25A1.5 1.5 0 0 1 7 3.75Z" />
      <path d="M14 4v4h4M8.5 12h7M8.5 15.5h7" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3.5 19 6v5.2c0 4.5-3 7.6-7 9.3-4-1.7-7-4.8-7-9.3V6l7-2.5Z" />
      <path d="m9 11.8 2 2 4-4.2" />
    </>
  ),
  home: (
    <>
      <path d="m3.75 10 8.25-6.5 8.25 6.5v9a1.25 1.25 0 0 1-1.25 1.25H5A1.25 1.25 0 0 1 3.75 19v-9Z" />
      <path d="M9.25 20.25v-6.5h5.5v6.5" />
    </>
  ),
  suitcase: (
    <>
      <rect height="12.5" rx="1.5" width="16" x="4" y="8" />
      <path d="M9 8V5.75c0-.7.55-1.25 1.25-1.25h3.5c.7 0 1.25.55 1.25 1.25V8M4 13h16M9 13v2m6-2v2" />
    </>
  ),
};

export function ServiceIcon({ name }: ServiceIconProps) {
  return (
    <svg
      aria-hidden="true"
      className="service-card__icon"
      fill="none"
      viewBox="0 0 24 24"
    >
      {iconShapes[name]}
    </svg>
  );
}
