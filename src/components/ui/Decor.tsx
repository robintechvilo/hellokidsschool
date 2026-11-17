/** Playful SVG decorations: waves, clouds, stars, doodles. */

export function Wave({ className = "", flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className={`block w-full ${flip ? "rotate-180" : ""} ${className}`} aria-hidden>
      <path fill="currentColor" d="M0 45c120-40 240-40 360 0s240 40 360 0 240-40 360 0 240 40 360 0v45H0z" />
    </svg>
  );
}

export function Cloud({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 90" className={className} aria-hidden>
      <path fill="#fff" d="M52 86h104a34 34 0 0 0 4-68 44 44 0 0 0-82-6A30 30 0 0 0 30 40a24 24 0 0 0 22 46z" />
    </svg>
  );
}

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path fill="currentColor" d="M12 1.5l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.6l-6.4 3.5L7 14l-5.3-5 7.2-.9z" />
    </svg>
  );
}

export function Pencil({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <rect x="22" y="4" width="20" height="40" rx="3" fill="#ffc20e" transform="rotate(35 32 32)" />
      <path d="M20 46l-6 14 13-8z" fill="#f6d3a1" />
      <path d="M14 60l2.5-6 3.5 2.5z" fill="#1e2a78" />
      <rect x="40" y="-2" width="20" height="8" rx="3" fill="#e6197e" transform="rotate(35 32 32)" />
    </svg>
  );
}

export function Plane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <path d="M4 30L60 6 44 58 32 38z" fill="#fff" stroke="#1e2a78" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M60 6L32 38l-4 16 8-12" fill="#cfeaf8" stroke="#1e2a78" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Blocks({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden>
      <rect x="4" y="38" width="36" height="36" rx="5" fill="#e32d2d" />
      <text x="22" y="66" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff" fontFamily="sans-serif">A</text>
      <rect x="40" y="38" width="36" height="36" rx="5" fill="#0e8fa6" />
      <text x="58" y="66" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff" fontFamily="sans-serif">B</text>
      <rect x="22" y="2" width="36" height="36" rx="5" fill="#1b8f3a" />
      <text x="40" y="30" textAnchor="middle" fontSize="26" fontWeight="700" fill="#fff" fontFamily="sans-serif">C</text>
    </svg>
  );
}
