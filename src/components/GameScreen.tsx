import { BingoBoard } from "./BingoBoard";
import { BingoModal } from "./BingoModal";
import type { BingoSquareData } from "../types";

type Props = {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (id: number) => void;
  onReset: () => void;
};

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: Props) {
  return (
    <div className="min-h-screen bg-white p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center max-w-2xl mx-auto">
          <h2 style={{ fontFamily: "var(--font-mono-heading)" }} className="text-2xl font-bold">
            SCORE
          </h2>
          <button
            onClick={onReset}
            style={{ fontFamily: "var(--font-mono-heading)" }}
            className="px-6 py-2 text-lg font-bold"
            aria-label="Reset Game"
          >
            RESET
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex justify-center">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>

      {/* Bingo Modal */}
      {hasBingo && <BingoModal onDismiss={onReset} />}
    </div>
  );
}
