type Props = {
  onStart: () => void;
};

export function StartScreen({ onStart }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="text-center max-w-2xl">
        {/* Grid Preview SVG */}
        <svg
          className="w-24 h-24 mx-auto mb-8"
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {Array.from({ length: 25 }).map((_, i) => {
            const row = Math.floor(i / 5);
            const col = i % 5;
            const isCenter = row === 2 && col === 2;
            return (
              <rect
                key={i}
                x={col * 24}
                y={row * 24}
                width="22"
                height="22"
                fill={isCenter ? "#F5F5F5" : "#FFFFFF"}
                stroke="#000000"
                strokeWidth="1"
              />
            );
          })}
        </svg>

        {/* Heading */}
        <h1 style={{fontFamily: "var(--font-mono-heading)"}} className="text-5xl md:text-6xl font-bold tracking-widest mb-6">
          SOC OPS
        </h1>

        {/* Description */}
        <p style={{fontFamily: "var(--font-mono-body)"}} className="text-lg md:text-2xl leading-relaxed mb-12 text-gray-900">
          Find people who match the questions.
          <br />
          Get 5 in a row and win!
        </p>

        {/* CTA Button */}
        <button
          onClick={onStart}
          style={{fontFamily: "var(--font-mono-heading)"}}
          className="px-8 py-4 text-xl font-bold"
          aria-label="Start Game"
        >
          START GAME
        </button>
      </div>
    </div>
  );
}
