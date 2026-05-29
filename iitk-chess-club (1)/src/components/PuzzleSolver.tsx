import React, { useState } from 'react';
import { ChessPuzzle, BoardState, ChessPiece } from '../types';
import { defaultPuzzles, createBoardFromSetup } from '../puzzles';
import { Chessboard } from './Chessboard';
import { Lightbulb, RotateCcw, Plus, CheckCircle2, AlertCircle, Trash2, HelpCircle } from 'lucide-react';

export const PuzzleSolver: React.FC = () => {
  const [puzzles, setPuzzles] = useState<ChessPuzzle[]>(defaultPuzzles);
  const [activePuzzleId, setActivePuzzleId] = useState<string>('1');
  const [status, setStatus] = useState<'solving' | 'success' | 'incorrect'>('solving');
  const [showHint, setShowHint] = useState<boolean>(false);
  const [lastMove, setLastMove] = useState<{ from: { r: number; c: number }; to: { r: number; c: number } } | null>(null);

  // Puzzle Creator Form State
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>('My Tactics Arena');
  const [newDesc, setNewDesc] = useState<string>('Find the lethal tactics to crack this position.');
  const [newDifficulty, setNewDifficulty] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'>('Intermediate');
  const [newTurn, setNewTurn] = useState<'w' | 'b'>('w');
  const [newHint, setNewHint] = useState<string>('Think about attacking the king or material gain.');
  
  // Builder board: starts as an empty board or a simple setup
  const [builderBoard, setBuilderBoard] = useState<BoardState>(() => {
    const board: BoardState = Array(8).fill(null).map(() => Array(8).fill(null));
    // Let's populate white king and black king by default to be valid
    board[7][4] = { type: 'k', color: 'w' };
    board[0][4] = { type: 'k', color: 'b' };
    return board;
  });
  
  const [selectedBuilderPiece, setSelectedBuilderPiece] = useState<{ type: 'p'|'r'|'n'|'b'|'q'|'k', color: 'w'|'b' } | null>(null);
  const [builderSourceSquare, setBuilderSourceSquare] = useState<string>('e1');
  const [builderDestSquare, setBuilderDestSquare] = useState<string>('e2');

  const activePuzzle = puzzles.find((p) => p.id === activePuzzleId) || puzzles[0];

  // Keep a copy of the board for resetting
  const [puzzleBoard, setPuzzleBoard] = useState<BoardState>(() => {
    // deep copy the active puzzle board
    return JSON.parse(JSON.stringify(activePuzzle.initialBoard));
  });

  const handleSelectPuzzle = (pId: string) => {
    const puzzle = puzzles.find((p) => p.id === pId);
    if (puzzle) {
      setActivePuzzleId(pId);
      setPuzzleBoard(JSON.parse(JSON.stringify(puzzle.initialBoard)));
      setStatus('solving');
      setShowHint(false);
      setLastMove(null);
    }
  };

  const handleReset = () => {
    setPuzzleBoard(JSON.parse(JSON.stringify(activePuzzle.initialBoard)));
    setStatus('solving');
    setShowHint(false);
    setLastMove(null);
  };

  const handleMove = (from: { r: number; c: number }, to: { r: number; c: number }) => {
    if (status === 'success') return; // already solved

    // Check if move matches the active puzzle's solution step
    const correctStep = activePuzzle.solution[activePuzzle.currentMoveIndex];
    
    // Perform move on puzzleBoard representation
    const updatedBoard = [...puzzleBoard.map(row => [...row])];
    const piece = updatedBoard[from.r][from.c];
    
    if (!piece) return;

    // Check if move is correct
    const isCorrect = 
      correctStep.from.r === from.r && 
      correctStep.from.c === from.c &&
      correctStep.to.r === to.r && 
      correctStep.to.c === to.c;

    if (isCorrect) {
      updatedBoard[to.r][to.c] = piece;
      updatedBoard[from.r][from.c] = null;
      setPuzzleBoard(updatedBoard);
      setLastMove({ from, to });
      setStatus('success');
    } else {
      // Show incorrect move momentarily but allow retry
      setStatus('incorrect');
      // Still make the move visually so they see their mistake, let them reset
      updatedBoard[to.r][to.c] = piece;
      updatedBoard[from.r][from.c] = null;
      setPuzzleBoard(updatedBoard);
      setLastMove({ from, to });
    }
  };

  // Custom puzzle placement methods
  const handleBuilderSquareClick = (r: number, c: number) => {
    const nextBoard = [...builderBoard.map(row => [...row])];
    if (selectedBuilderPiece) {
      // Place piece
      nextBoard[r][c] = { ...selectedBuilderPiece };
    } else {
      // Clear cell
      nextBoard[r][c] = null;
    }
    setBuilderBoard(nextBoard);
  };

  const handleAddCustomPuzzle = (e: React.FormEvent) => {
    e.preventDefault();

    // Parse src/dest coordinates (e.g., 'e2' -> r: 6, c: 4)
    const parseCoord = (coordStr: string) => {
      const cleaned = coordStr.trim().toLowerCase();
      if (cleaned.length !== 2) return { r: 0, c: 0 };
      const file = cleaned.charCodeAt(0) - 97; // a -> 0
      const rank = 8 - parseInt(cleaned.charAt(1)); // 8 -> 0
      return { r: rank, c: file };
    };

    const fromSquare = parseCoord(builderSourceSquare);
    const toSquare = parseCoord(builderDestSquare);

    const newPuzzle: ChessPuzzle = {
      id: String(Date.now()),
      title: `⚡ User Puzzle: ${newTitle}`,
      description: newDesc,
      difficulty: newDifficulty,
      turn: newTurn,
      initialBoard: JSON.parse(JSON.stringify(builderBoard)),
      solution: [
        {
          from: fromSquare,
          to: toSquare
        }
      ],
      currentMoveIndex: 0,
      hint: newHint,
      isUserUploaded: true
    };

    const updatedPuzzles = [...puzzles, newPuzzle];
    setPuzzles(updatedPuzzles);
    setActivePuzzleId(newPuzzle.id);
    setPuzzleBoard(newPuzzle.initialBoard);
    setStatus('solving');
    setShowHint(false);
    setLastMove(null);
    setIsCreating(false);
  };

  const handleDeletePuzzle = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = puzzles.filter(p => p.id !== id);
    setPuzzles(updated);
    if (activePuzzleId === id && updated.length > 0) {
      handleSelectPuzzle(updated[0].id);
    }
  };

  return (
    <div className="bg-chess-card rounded-2xl border border-chess-teal/15 shadow-2xl overflow-hidden overflow-y-auto">
      {/* Visual Header Banner */}
      <div className="bg-gradient-to-r from-chess-bg via-chess-card to-chess-bg border-b border-chess-teal/10 p-6 sm:p-8 text-white relative">
        <div className="absolute top-2 right-4 text-[10px] font-mono tracking-widest text-chess-neon">PLAYGROUND</div>
        <h3 className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-white flex items-center gap-3">
          ♟️ Campus Chess Board & Tactical Puzzles
        </h3>
        <p className="text-chess-muted text-xs sm:text-sm mt-1 max-w-2xl font-sans">
          Solve hand-crafted campus tactical puzzles or click "Create Custom" to build, place pieces, and challenge players!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 sm:p-6 lg:p-8">
        
        {/* Left Side: Active Puzzle Stats & Controls */}
        <div className="lg:col-span-4 flex flex-col justify-between space-y-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-1 rounded-full border ${
                activePuzzle.difficulty === 'Beginner' ? 'bg-chess-bg text-emerald-400 border-emerald-500/30' :
                activePuzzle.difficulty === 'Intermediate' ? 'bg-chess-bg text-amber-400 border-amber-500/30' :
                activePuzzle.difficulty === 'Advanced' ? 'bg-chess-bg text-indigo-400 border-indigo-500/30' :
                'bg-chess-bg text-rose-400 border-rose-500/30'
              }`}>
                {activePuzzle.difficulty}
              </span>
              <span className="text-[11px] font-mono text-chess-teal font-bold flex items-center gap-1.5">
                <span className={`w-2 h-2 rounded-full ${activePuzzle.turn === 'w' ? 'bg-white border border-chess-teal/50' : 'bg-black border border-chess-teal/50'}`} />
                {activePuzzle.turn === 'w' ? 'White to move' : 'Black to move'}
              </span>
            </div>

            <div>
              <h4 className="text-lg font-sans font-bold text-white leading-tight">
                {activePuzzle.title}
              </h4>
              <p className="text-chess-muted text-xs sm:text-sm mt-1.5 leading-relaxed">
                {activePuzzle.description}
              </p>
            </div>

            {/* Status Feedbacks */}
            {status === 'success' && (
              <div className="bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 rounded-xl p-3 sm:p-4 flex items-start gap-3 mt-4 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-bold text-xs sm:text-sm text-white">Solved Perfectly!</h5>
                  <p className="text-[#dcfce7] text-[11px] sm:text-xs mt-0.5">Crushing positional squeeze! Spot on.</p>
                </div>
              </div>
            )}

            {status === 'incorrect' && (
              <div className="bg-rose-950/40 border border-rose-500/30 text-rose-300 rounded-xl p-3 sm:p-4 flex items-start gap-3 mt-4 animate-bounce-subtle">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-sans font-bold text-xs sm:text-sm text-white">Not the best move...</h5>
                  <p className="text-[#fee2e2] text-[11px] sm:text-xs mt-0.5">That move releases the tension. Tap 'Reset' below and crack it again!</p>
                </div>
              </div>
            )}

            {/* Hint Box */}
            {showHint && (
              <div className="bg-chess-bg border border-chess-teal/25 rounded-xl p-3.5 mt-2 animate-fade-in">
                <div className="flex items-center gap-2 mb-1.5">
                  <Lightbulb className="w-4 h-4 text-chess-neon" />
                  <span className="text-xs font-semibold text-white">Tactical Hint</span>
                </div>
                <p className="text-chess-muted text-[11.5px] leading-relaxed">
                  {activePuzzle.hint}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 pt-4">
            <button
              onClick={() => setShowHint(!showHint)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-chess-bg hover:bg-chess-teal/10 text-white text-xs font-bold rounded-lg transition-colors border border-chess-teal/20"
            >
              <Lightbulb className="w-4 h-4 text-chess-neon" />
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            <button
              onClick={handleReset}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-chess-neon hover:bg-chess-neon/90 text-chess-bg text-xs font-black rounded-lg transition-colors shadow-md shadow-chess-neon/10"
            >
              <RotateCcw className="w-4 h-4" />
              Reset Posture
            </button>
          </div>
        </div>

        {/* Center Canvas: Chessboard Renders here */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center py-2">
          <Chessboard 
            board={puzzleBoard} 
            onMove={handleMove}
            turn={activePuzzle.turn}
            interactive={status !== 'success'}
            lastMove={lastMove}
          />
        </div>

        {/* Right Side: Tabulated Selection List & Creator Flow */}
        <div className="lg:col-span-4 flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-xs sm:text-sm text-white tracking-tight flex items-center gap-2">
              🧭 Select Puzzle
            </h4>
            <button
              onClick={() => setIsCreating(!isCreating)}
              className="px-2.5 py-1.5 bg-chess-neon hover:bg-chess-neon/90 text-chess-bg text-[11px] font-bold rounded-md flex items-center gap-1 transition-all shadow-md"
            >
              <Plus className="w-3.5 h-3.5" />
              Create Custom
            </button>
          </div>

          {!isCreating ? (
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {puzzles.map((p) => {
                const isActive = p.id === activePuzzleId;
                return (
                  <div
                    key={p.id}
                    onClick={() => handleSelectPuzzle(p.id)}
                    className={`p-3 rounded-xl border transition-all cursor-pointer group flex items-start justify-between ${
                      isActive
                        ? 'bg-chess-neon border-chess-neon text-chess-bg shadow-md shadow-chess-neon/10 font-bold'
                        : 'bg-chess-bg/85 hover:bg-chess-bg border-chess-teal/10 text-white'
                    }`}
                  >
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="font-sans font-bold text-xs leading-none">
                          {p.title}
                        </span>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                          isActive 
                            ? 'bg-chess-bg text-chess-neon font-black' 
                            : 'bg-chess-card text-chess-teal border border-chess-teal/10'
                        }`}>
                          {p.difficulty}
                        </span>
                      </div>
                      <p className={`text-[11px] line-clamp-1 mt-1 ${isActive ? 'text-chess-bg/80' : 'text-chess-muted'}`}>
                        {p.description}
                      </p>
                    </div>

                    {p.isUserUploaded && (
                      <button
                        onClick={(e) => handleDeletePuzzle(p.id, e)}
                        className={`p-1.5 rounded-md hover:bg-red-500/20 shrink-0 text-red-400 transition-colors ml-1 ${
                          isActive ? 'text-chess-bg hover:bg-chess-bg/15' : ''
                        }`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            // Live Puzzle Creator / Editor View
            <form onSubmit={handleAddCustomPuzzle} className="bg-chess-bg border border-chess-teal/15 rounded-xl p-4 space-y-3.5 animate-fade-in max-h-[460px] overflow-y-auto">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">🎨 Visual Chess Builder</span>
                <button
                  type="button"
                  onClick={() => setIsCreating(false)}
                  className="text-[11px] text-chess-neon hover:underline font-semibold"
                >
                  Cancel
                </button>
              </div>

              {/* Step 1: Place Pieces Palette */}
              <div className="space-y-1.5 bg-chess-card p-2.5 rounded-lg border border-chess-teal/15">
                <span className="text-[10px] font-bold text-chess-teal uppercase tracking-widest block leading-tight">Step 1: Select Piece and Click the 8x8 Board Below!</span>
                <div className="grid grid-cols-6 gap-1.5 pt-1">
                  {/* Pawns & Knights & Rooks etc */}
                  {(['p', 'r', 'n', 'b', 'q', 'k'] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSelectedBuilderPiece({ type: t, color: 'w' })}
                      className={`p-1 rounded border transition-all flex items-center justify-center aspect-square ${
                        selectedBuilderPiece?.type === t && selectedBuilderPiece?.color === 'w'
                          ? 'border-chess-neon bg-chess-neon text-chess-bg font-sans font-black'
                          : 'border-chess-teal/15 hover:border-chess-teal/30 text-white bg-chess-bg/50'
                      }`}
                      title={`White ${t}`}
                    >
                      <span className="text-xs font-mono font-bold">{t.toUpperCase()}</span>
                    </button>
                  ))}
                  {(['p', 'r', 'n', 'b', 'q', 'k'] as const).map((t) => (
                    <button
                      key={`b-${t}`}
                      type="button"
                      onClick={() => setSelectedBuilderPiece({ type: t, color: 'b' })}
                      className={`p-1 rounded border transition-all flex items-center justify-center aspect-square ${
                        selectedBuilderPiece?.type === t && selectedBuilderPiece?.color === 'b'
                          ? 'border-chess-neon bg-chess-bg text-chess-neon font-sans font-black'
                          : 'border-chess-teal/15 hover:border-chess-teal/30 text-[#8e8d8d] bg-chess-bg/50'
                      }`}
                      title={`Black ${t}`}
                    >
                      <span className="text-xs font-mono font-bold">{t}</span>
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedBuilderPiece(null)}
                  className={`w-full mt-1.5 py-1.5 text-[10px] font-bold rounded border ${
                    selectedBuilderPiece === null ? 'bg-[#ff5555] text-white border-red-600' : 'bg-chess-bg hover:bg-chess-bg/80 text-chess-muted'
                  }`}
                >
                  Eraser Mode (Zero out squares)
                </button>
              </div>

              {/* Small builder placement board grid */}
              <div className="bg-chess-card p-1.5 rounded-lg max-w-[200px] mx-auto border border-chess-teal/15">
                <div className="grid grid-cols-8 grid-rows-8 aspect-square w-full rounded overflow-hidden">
                  {builderBoard.map((row, r) =>
                    row.map((piece, c) => {
                      const isDark = (r + c) % 2 === 1;
                      return (
                        <div
                          key={`build-${r}-${c}`}
                          onClick={() => handleBuilderSquareClick(r, c)}
                          className={`flex items-center justify-center cursor-pointer text-[9px] font-bold h-full w-full ${
                            isDark ? 'bg-chess-teal/30 text-white' : 'bg-chess-bg text-white'
                          } hover:bg-chess-neon/40 transition-colors`}
                        >
                          {piece ? (
                            <span className={piece.color === 'w' ? 'text-chess-neon font-black' : 'text-chess-teal font-black'}>
                              {piece.type.toUpperCase()}
                            </span>
                          ) : '.'}
                        </div>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Step 2: Form Details */}
              <div className="space-y-2.5 pt-2 border-t border-chess-teal/15">
                <div>
                  <label className="text-[10px] font-bold text-chess-teal uppercase">Step 2: Define Solution Move (Files a-h, Ranks 1-8)</label>
                  <div className="grid grid-cols-2 gap-2 mt-1">
                    <div>
                      <span className="text-[10px] text-chess-muted block">From Square:</span>
                      <input 
                        type="text" 
                        placeholder="e2" 
                        value={builderSourceSquare}
                        onChange={(e) => setBuilderSourceSquare(e.target.value)}
                        className="w-full bg-chess-card border border-chess-teal/15 rounded p-1.5 text-xs font-mono text-center text-white focus:outline-chess-neon"
                        maxLength={2}
                      />
                    </div>
                    <div>
                      <span className="text-[10px] text-chess-muted block">To Square:</span>
                      <input 
                        type="text" 
                        placeholder="e4" 
                        value={builderDestSquare}
                        onChange={(e) => setBuilderDestSquare(e.target.value)}
                        className="w-full bg-chess-card border border-chess-teal/15 rounded p-1.5 text-xs font-mono text-center text-white focus:outline-chess-neon"
                        maxLength={2}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-chess-muted block font-bold">Puzzle Title:</span>
                  <input 
                    type="text"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full bg-chess-card border border-chess-teal/15 text-white rounded p-1.5 text-xs font-sans mt-0.5"
                    required
                  />
                </div>

                <div>
                  <span className="text-[10px] text-chess-muted block font-bold">Who's Turn to Play?</span>
                  <select 
                    value={newTurn} 
                    onChange={(e) => setNewTurn(e.target.value as 'w' | 'b')}
                    className="w-full bg-chess-card border border-chess-teal/15 text-white rounded p-1.5 text-xs mt-0.5"
                  >
                    <option value="w">White to play</option>
                    <option value="b">Black to play</option>
                  </select>
                </div>

                <div>
                  <span className="text-[10px] text-chess-muted block font-bold">Hint:</span>
                  <input 
                    type="text"
                    value={newHint}
                    onChange={(e) => setNewHint(e.target.value)}
                    className="w-full bg-chess-card border border-chess-teal/15 text-white rounded p-1.5 text-xs mt-0.5"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-chess-neon hover:bg-chess-neon/90 text-chess-bg font-black text-xs rounded-lg transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <Plus className="w-4 h-4" />
                Add Challenge
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
