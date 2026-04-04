interface SectionDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

export default function SectionDivider({ from = "#ffffff", to = "#1B2A4A", flip = false }: SectionDividerProps) {
  return (
    <div className={`relative w-full h-16 md:h-24 ${flip ? "rotate-180" : ""}`} style={{ marginTop: "-1px", marginBottom: "-1px" }}>
      <svg
        viewBox="0 0 1440 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        <path d="M0 0H1440V96L0 0Z" fill={to} />
        <path d="M0 0H1440V0L0 96V0Z" fill={from} />
      </svg>
    </div>
  );
}
