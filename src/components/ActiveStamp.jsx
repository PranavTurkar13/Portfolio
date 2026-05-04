export default function ActiveStamp() {
  return (
    <svg
      viewBox="0 0 220 80"
      className="w-[140px] h-auto rotate-[-8deg]"
    >
      <defs>
        {/* Rough edges */}
        <filter id="rough">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="2"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
        </filter>

        {/* Light smudge */}
        <filter id="smudge">
          <feGaussianBlur stdDeviation="0.4" />
        </filter>
      </defs>

      {/* Border */}
      <rect
        x="5"
        y="10"
        width="210"
        height="60"
        rx="6"
        fill="none"
        stroke="#22c55e"
        strokeWidth="4"
        filter="url(#rough)"
        opacity="0.9"
      />

      {/* Text */}
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="28"
        fontWeight="900"
        fill="#22c55e"
        letterSpacing="3"
        filter="url(#smudge)"
        style={{ fontFamily: "Impact, sans-serif" }}
      >
        ACTIVE
      </text>

      {/* tiny imperfections */}
      <circle cx="25" cy="25" r="1.5" fill="#22c55e" opacity="0.5" />
      <circle cx="180" cy="55" r="1" fill="#22c55e" opacity="0.4" />
    </svg>
  );
}