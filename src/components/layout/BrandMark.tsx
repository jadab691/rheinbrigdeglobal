import Link from "next/link";

export function BrandMark() {
  return (
    <Link aria-label="RheinBridge Global home" className="brand" href="/">
      <svg
        aria-hidden="true"
        className="brand__symbol"
        fill="none"
        viewBox="0 0 42 42"
      >
        <path d="M5 31.5h32" />
        <path d="M9 29V17.5C9 10.6 14.4 5 21 5s12 5.6 12 12.5V29" />
        <path d="M14.5 29V18a6.5 6.5 0 0 1 13 0v11" />
        <path d="M3.5 35h35" />
      </svg>
      <span className="brand__wordmark">
        <span className="brand__name">RheinBridge</span>
        <span className="brand__descriptor">GLOBAL · EDUCATION GUIDANCE</span>
      </span>
    </Link>
  );
}
