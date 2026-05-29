import { ChessPuzzle, BoardState, ChessPiece } from './types';

function createBoardFromSetup(setup: { [key: string]: ChessPiece }): BoardState {
  const board: BoardState = Array(8).fill(null).map(() => Array(8).fill(null));
  
  for (const coord in setup) {
    const file = coord.charCodeAt(0) - 97; // a -> 0
    const rank = 8 - parseInt(coord.charAt(1)); // 8 -> 0
    if (file >= 0 && file < 8 && rank >= 0 && rank < 8) {
      board[rank][file] = setup[coord];
    }
  }
  return board;
}

// 1. Scholar's Mate Finish (Beginner)
const p1Setup = {
  // Black pieces
  'a8': { type: 'r', color: 'b' } as ChessPiece,
  'b8': { type: 'n', color: 'b' } as ChessPiece,
  'c8': { type: 'b', color: 'b' } as ChessPiece,
  'd8': { type: 'q', color: 'b' } as ChessPiece,
  'e8': { type: 'k', color: 'b' } as ChessPiece,
  'g8': { type: 'n', color: 'b' } as ChessPiece,
  'h8': { type: 'r', color: 'b' } as ChessPiece,
  'a7': { type: 'p', color: 'b' } as ChessPiece,
  'b7': { type: 'p', color: 'b' } as ChessPiece,
  'c7': { type: 'p', color: 'b' } as ChessPiece,
  'd7': { type: 'p', color: 'b' } as ChessPiece,
  'f7': { type: 'p', color: 'b' } as ChessPiece,
  'g7': { type: 'p', color: 'b' } as ChessPiece,
  'h7': { type: 'p', color: 'b' } as ChessPiece,
  'c5': { type: 'b', color: 'b' } as ChessPiece,
  'e5': { type: 'p', color: 'b' } as ChessPiece,
  
  // White pieces
  'a1': { type: 'r', color: 'w' } as ChessPiece,
  'b1': { type: 'n', color: 'w' } as ChessPiece,
  'c1': { type: 'b', color: 'w' } as ChessPiece,
  'f1': { type: 'r', color: 'w' } as ChessPiece,
  'e1': { type: 'k', color: 'w' } as ChessPiece,
  'a2': { type: 'p', color: 'w' } as ChessPiece,
  'b2': { type: 'p', color: 'w' } as ChessPiece,
  'c2': { type: 'p', color: 'w' } as ChessPiece,
  'd2': { type: 'p', color: 'w' } as ChessPiece,
  'g2': { type: 'p', color: 'w' } as ChessPiece,
  'h2': { type: 'p', color: 'w' } as ChessPiece,
  'e4': { type: 'p', color: 'w' } as ChessPiece,
  'c4': { type: 'b', color: 'w' } as ChessPiece,
  'f3': { type: 'q', color: 'w' } as ChessPiece,
  'g1': { type: 'n', color: 'w' } as ChessPiece,
};

// 2. Back Rank Blunder (Intermediate)
const p2Setup = {
  // Black pieces
  'h8': { type: 'k', color: 'b' } as ChessPiece,
  'f7': { type: 'p', color: 'b' } as ChessPiece,
  'g7': { type: 'p', color: 'b' } as ChessPiece,
  'h7': { type: 'p', color: 'b' } as ChessPiece,
  'e8': { type: 'r', color: 'b' } as ChessPiece,
  'a7': { type: 'p', color: 'b' } as ChessPiece,
  'b7': { type: 'p', color: 'b' } as ChessPiece,
  
  // White pieces
  'g1': { type: 'k', color: 'w' } as ChessPiece,
  'f2': { type: 'p', color: 'w' } as ChessPiece,
  'g2': { type: 'p', color: 'w' } as ChessPiece,
  'h2': { type: 'p', color: 'w' } as ChessPiece,
  'd1': { type: 'r', color: 'w' } as ChessPiece,
  'a2': { type: 'p', color: 'w' } as ChessPiece,
  'b2': { type: 'p', color: 'w' } as ChessPiece,
};

// 3. Knight Fork Trap (Advanced)
const p3Setup = {
  // Black pieces
  'g8': { type: 'k', color: 'b' } as ChessPiece,
  'c7': { type: 'q', color: 'b' } as ChessPiece,
  'f7': { type: 'p', color: 'b' } as ChessPiece,
  'g7': { type: 'p', color: 'b' } as ChessPiece,
  'h7': { type: 'p', color: 'b' } as ChessPiece,
  
  // White pieces
  'h1': { type: 'k', color: 'w' } as ChessPiece,
  'f2': { type: 'p', color: 'w' } as ChessPiece,
  'g2': { type: 'p', color: 'w' } as ChessPiece,
  'h2': { type: 'p', color: 'w' } as ChessPiece,
  'd4': { type: 'n', color: 'w' } as ChessPiece,
  'd1': { type: 'r', color: 'w' } as ChessPiece,
};

export const defaultPuzzles: ChessPuzzle[] = [
  {
    id: '1',
    title: "1. The Scholar's Sword",
    description: "Black is focus-locked on building center development, but left the f7 square vulnerable. Find White's crushing move that ends the game immediately!",
    difficulty: 'Beginner',
    turn: 'w',
    initialBoard: createBoardFromSetup(p1Setup),
    solution: [
      {
        from: { r: 5, c: 5 }, // f3
        to: { r: 1, c: 5 },   // f7
      }
    ],
    currentMoveIndex: 0,
    hint: "Your Queen on f3 is eyeing f7, backed up by the powerful light-squared Bishop on c4!"
  },
  {
    id: '2',
    title: '2. Back Rank Smother',
    description: "Black's King is snug behind its pawns but has no escape route. Exploit Black's weak back rank!",
    difficulty: 'Intermediate',
    turn: 'w',
    initialBoard: createBoardFromSetup(p2Setup),
    solution: [
      {
        from: { r: 7, c: 3 }, // d1 (white rook)
        to: { r: 0, c: 3 },   // d8 (black back rank)
      }
    ],
    currentMoveIndex: 0,
    hint: "Use your Rook on d1 to invade the back-rank vertically, placing the King in absolute checkmate!"
  },
  {
    id: '3',
    title: '3. Tactical Decoy Fork',
    description: "Find the high-impact jump for White's Knight to fork the Black King and Queen simultaneously!",
    difficulty: 'Advanced',
    turn: 'w',
    initialBoard: createBoardFromSetup(p3Setup),
    solution: [
      {
        from: { r: 4, c: 3 }, // d4
        to: { r: 2, c: 4 },   // e6 (standard knight fork on g8 and c7!)
      }
    ],
    currentMoveIndex: 0,
    hint: "Look at the e6 square. From d4, can your Knight land on e6, checking the King on g8 while attacking the Queen on c7?"
  }
];

export { createBoardFromSetup };
