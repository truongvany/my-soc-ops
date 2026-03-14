import { BingoSquare } from "./BingoSquare";
import type { BingoSquareData } from "../types";

type Props = {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  onSquareClick: (id: number) => void;
};

export function BingoBoard({ board, onSquareClick }: Props) {
  return (
    <div className="inline-block">
      <div className="grid grid-cols-5 gap-3 p-4 border-4 border-black bg-white">
        {board.map((square) => (
          <BingoSquare
            key={square.id}
            square={square}
            onClick={() => onSquareClick(square.id)}
          />
        ))}
      </div>
    </div>
  );
}
