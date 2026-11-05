type IconProps = { className?: string };

export function IconPhone({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        strokeLinecap="round"
        d="M8 3.8H6.6A1.6 1.6 0 0 0 5 5.4v.9A13 13 0 0 0 17.7 19h.9a1.6 1.6 0 0 0 1.6-1.6V16l-3.7-1.8-1.7 1.7a9.2 9.2 0 0 1-4.5-4.5l1.7-1.7L10 5.9 8 3.8Z"
      />
    </svg>
  );
}

export function IconChat({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        d="M5 6.5h14v9H8.2L5 18.2V6.5Z"
      />
    </svg>
  );
}

export function IconMark({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 32 32" width="32" height="32" aria-hidden="true">
      <rect x="1" y="1" width="30" height="30" rx="7" fill="#0058A8" />
      <circle cx="16" cy="16" r="7.5" fill="none" stroke="#00D4FF" strokeWidth="1.75" />
      <circle cx="16" cy="16" r="2.4" fill="#E7F6FF" />
    </svg>
  );
}
