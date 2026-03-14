import type { BingoSquareData } from "../types";

type Props = {
  square: BingoSquareData;
  onClick: () => void;
};

export function BingoSquare({ square, onClick }: Props) {
  const bgColor = square.isFreeSpace
    ? "#F5F5F5"
    : square.isMarked
      ? "#000000"
      : "#FFFFFF";

  const textColor = square.isFreeSpace
    ? "#000000"
    : square.isMarked
      ? "#FFFFFF"
      : "#000000";

  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-mono-body)",
        width: "60px",
        height: "60px",
        backgroundColor: bgColor,
        color: textColor,
        border: "2px solid #000000",
        fontSize: "14px",
        fontWeight: "700",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "4px",
        cursor: square.isFreeSpace ? "default" : "pointer",
      }}
      aria-pressed={square.isMarked}
      disabled={square.isFreeSpace}
      className="hover:scale-105 active:scale-95 transition-transform duration-100 focus:outline-dashed focus:outline-2 focus:outline-offset-2 focus:outline-black"
    >
      {square.isFreeSpace ? "FREE" : square.text}
    </button>
  );
}
