type Props = {
  onDismiss: () => void;
};

export function BingoModal({ onDismiss }: Props) {
  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        style={{ animation: "overlayFade 0.3s ease-in" }}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 flex items-center justify-center z-50 p-4"
        role="dialog"
        aria-modal="true"
        aria-label="Bingo Winner"
      >
        <div
          className="bg-white border-4 border-black p-8 md:p-12 max-w-md w-full text-center"
          style={{ animation: "modalPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
        >
          {/* Bingo Text */}
          <h2
            style={{
              fontFamily: "var(--font-mono-heading)",
              fontSize: "80px",
              fontWeight: "700",
              marginBottom: "32px",
              letterSpacing: "4px",
            }}
          >
            BINGO!
          </h2>

          {/* Play Again Button */}
          <button
            onClick={onDismiss}
            style={{ fontFamily: "var(--font-mono-heading)" }}
            className="w-full px-8 py-4 text-xl font-bold"
            aria-label="Play Again"
          >
            PLAY AGAIN
          </button>
        </div>
      </div>
    </>
  );
}
