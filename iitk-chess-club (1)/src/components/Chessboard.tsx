import React, { useState } from 'react';
import { BoardState, ChessPiece } from '../types';
import { ChessPieceSvg } from './ChessPieceSvg';

interface ChessboardProps {
  board: BoardState;
  onMove?: (from: { r: number; c: number }, to: { r: number; c: number }) => void;
  turn?: 'w' | 'b';
  interactive?: boolean;
  lastMove?: { from: { r: number; c: number }; to: { r: number; c: number } } | null;
  showCoordinates?: boolean;
}

export const Chessboard: React.FC<ChessboardProps> = ({
  board,
  onMove,
  turn = 'w',
  interactive = true,
  lastMove = null,
  showCoordinates = true,
}) => {
  const [selectedSquare, setSelectedSquare] = useState<{ r: number; c: number } | null>(null);

  const handleSquareClick = (r: number, c: number) => {
    if (!interactive) return;

    const clickedPiece = board[r][c];

    if (selectedSquare) {
      // If we clicked the same square, deselect it
      if (selectedSquare.r === r && selectedSquare.c === c) {
        setSelectedSquare(null);
        return;
      }

      // If we click another piece of our own color, change selection
      if (clickedPiece && clickedPiece.color === turn) {
        setSelectedSquare({ r, c });
        return;
      }

      // Otherwise, attempt a move
      if (onMove) {
        onMove(selectedSquare, { r, c });
      }
      setSelectedSquare(null);
    } else {
      // Direct selection: select if piece exists and matches current turn
      if (clickedPiece && clickedPiece.color === turn) {
        setSelectedSquare({ r, c });
      }
    }
  };

  // Drag handlers
  const handleDragStart = (e: React.DragEvent, r: number, c: number) => {
    if (!interactive) {
      e.preventDefault();
      return;
    }
    const piece = board[r][c];
    if (!piece || piece.color !== turn) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('application/json', JSON.stringify({ r, c }));
    setSelectedSquare({ r, c });
    // Make transparent drag ghost image if desired or standard drag element
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Required to allow drop
  };

  const handleDrop = (e: React.DragEvent, r: number, c: number) => {
    e.preventDefault();
    if (!interactive || !onMove) return;

    try {
      const dataStr = e.dataTransfer.getData('application/json');
      if (!dataStr) return;
      
      const from = JSON.parse(dataStr) as { r: number; c: number };
      if (from.r === r && from.c === c) return;

      onMove(from, { r, c });
      setSelectedSquare(null);
    } catch (err) {
      console.error("Drop error", err);
    }
  };

  const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const ranks = ['8', '7', '6', '5', '4', '3', '2', '1'];

  return (
    <div className="relative w-full max-w-[440px] aspect-square rounded-xl shadow-2xl bg-slate-900 border border-slate-700/50 p-3 sm:p-4 select-none mx-auto overflow-hidden">
      {/* Visual background gloss */}
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/10 to-white/5 pointer-events-none" />

      <div className="grid grid-cols-8 grid-rows-8 w-full h-full relative border border-slate-950/50 overflow-hidden rounded-md">
        {board.map((row, r) =>
          row.map((piece, c) => {
            const isDark = (r + c) % 2 === 1;
            const isSelected = selectedSquare && selectedSquare.r === r && selectedSquare.c === c;
            
            const isLastMoveSrc = lastMove && lastMove.from.r === r && lastMove.from.c === c;
            const isLastMoveDst = lastMove && lastMove.to.r === r && lastMove.to.c === c;

            // Highlight status
            let bgClass = isDark ? 'bg-[#70845c]' : 'bg-[#e2e8cc]'; // Classic smooth sage olive & cream
            
            if (isSelected) {
              bgClass = 'bg-[#cca43b]'; // gold/yellow high contrast for active selection
            } else if (isLastMoveSrc || isLastMoveDst) {
              bgClass = isDark ? 'bg-[#4056a1]/80' : 'bg-[#d0dbf5]'; // blue tint highlight for last move
            }

            return (
              <div
                key={`${r}-${c}`}
                className={`relative flex items-center justify-center cursor-pointer transition-colors duration-200 group ${bgClass}`}
                onClick={() => handleSquareClick(r, c)}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, r, c)}
              >
                {/* Chess piece */}
                {piece && (
                  <div
                    draggable={interactive && piece.color === turn}
                    onDragStart={(e) => handleDragStart(e, r, c)}
                    className={`w-[84%] h-[84%] flex items-center justify-center z-10 ${
                      interactive && piece.color === turn 
                        ? 'hover:scale-105 active:scale-95 cursor-grab active:cursor-grabbing' 
                        : ''
                    }`}
                  >
                    <ChessPieceSvg type={piece.type} color={piece.color} />
                  </div>
                )}

                {/* Selected highlight dot overlay (if empty & we have active selected square) */}
                {interactive && selectedSquare && !piece && (
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-slate-900/15 z-20 pointer-events-none group-hover:bg-slate-950/25 transition-all" />
                )}

                {/* Coordinates labels */}
                {showCoordinates && (
                  <>
                    {/* Rank indices on left column */}
                    {c === 0 && (
                      <span className={`absolute top-0.5 left-1 font-mono text-[9px] font-bold select-none ${
                        isDark ? 'text-[#e2e8cc]' : 'text-[#70845c]'
                      }`}>
                        {ranks[r]}
                      </span>
                    )}
                    {/* File indices on bottom row */}
                    {r === 7 && (
                      <span className={`absolute bottom-0.5 right-1 font-mono text-[9px] font-bold select-none ${
                        isDark ? 'text-[#e2e8cc]' : 'text-[#70845c]'
                      }`}>
                        {files[c]}
                      </span>
                    )}
                  </>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
