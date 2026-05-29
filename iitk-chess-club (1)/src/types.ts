export interface Event {
  id: string;
  title: string;
  date: string;
  tagline: string;
  description: string;
  longDescription: string;
  format: string;
  timeControl: string;
  vibeColor: string; // e.g., 'primary', 'amber', 'emerald', 'indigo', 'rose'
  highlights: string[];
  pdfPageNum: number;
  imageUrl?: string;
}

export interface Coordinator {
  name: string;
  phone: string;
  email: string;
  role: string;
  imageUrl?: string;
}

export interface ChessPiece {
  type: 'p' | 'r' | 'n' | 'b' | 'q' | 'k';
  color: 'w' | 'b';
}

export type BoardState = (ChessPiece | null)[][];

export interface ChessPuzzle {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  turn: 'w' | 'b'; // Who plays next
  // Board representation representing rows from rank 8 (black) to rank 1 (white)
  initialBoard: BoardState;
  solution: { from: { r: number; c: number }; to: { r: number; c: number } }[];
  currentMoveIndex: number;
  hint: string;
  isUserUploaded?: boolean;
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}
