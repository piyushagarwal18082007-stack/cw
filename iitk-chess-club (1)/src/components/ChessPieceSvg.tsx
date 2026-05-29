import React from 'react';

interface ChessPieceSvgProps {
  type: 'p' | 'r' | 'n' | 'b' | 'q' | 'k';
  color: 'w' | 'b';
  className?: string;
}

export const ChessPieceSvg: React.FC<ChessPieceSvgProps> = ({ type, color, className = "w-full h-full" }) => {
  const isWhite = color === 'w';
  const fillClass = isWhite ? 'fill-slate-50 stroke-slate-800' : 'fill-slate-800 stroke-slate-100';
  const shadowFilterId = `shadow-${color}-${type}`;

  return (
    <svg 
      viewBox="0 0 100 100" 
      className={`${className} transition-transform duration-200 select-none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id={shadowFilterId} x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="1" dy="2" stdDeviation="1.5" floodOpacity={isWhite ? 0.2 : 0.5} />
        </filter>
      </defs>
      
      <g filter={`url(#${shadowFilterId})`} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className={fillClass}>
        {type === 'p' && (
          // Pawn
          <g>
            <path d="M50,22 C44,22 40,26 40,32 C40,36 42.5,39 46,40.5 C40,43.5 36,50 36,60 L64,60 C64,50 60,43.5 54,40.5 C57.5,39 60,36 60,32 C60,26 56,22 50,22 Z" />
            <path d="M32,71 L68,71 C70,71 70,66 68,66 L32,66 C30,66 30,71 32,71 Z" fill="currentColor" opacity="0.1" />
            <path d="M28,77 L72,77 C74,77 74,72 72,72 L28,72 C26,72 26,77 28,77 Z" />
          </g>
        )}

        {type === 'r' && (
          // Rook
          <g>
            <path d="M33,30 L67,30 L67,42 L61,42 L61,36 L55,36 L55,42 L45,42 L45,36 L39,36 L39,42 L33,42 Z" />
            <path d="M37,42 L63,42 L60,65 L40,65 Z" />
            <path d="M30,75 L70,75 L68,67 L32,67 Z" />
            <path d="M26,82 L74,82 L74,77 L26,77 Z" />
          </g>
        )}

        {type === 'n' && (
          // Knight
          <g>
            <path d="M33,78 C33,78 30,65 33,52 C35,46 41,40 45,34 C42,34 35,37 32,42 C28,34 32,22 47,15 C52,13 58,15 62,19 C66,23 68,29 65,36 C64,39 58,42 55,44 C53,45 52,47 52,50 C52,53 58,56 62,58 C66,60 68,64 68,68 C68,74 62,78 62,78 Z" />
            <circle cx="53" cy="27" r="4.5" className={isWhite ? 'fill-slate-800' : 'fill-slate-50'} />
            <path d="M28,84 L72,84 L72,79 L28,79 Z" />
          </g>
        )}

        {type === 'b' && (
          // Bishop
          <g>
            <path d="M50,14 C48,14 47,15 47,17 C47,19 48,20 50,20 C52,20 53,19 53,17 C53,15 52,14 50,14 Z" />
            <path d="M50,22 C43,22 36,32 36,45 C36,52 40,58 45,61 L45,68 L55,68 L55,61 C60,58 64,52 64,45 C64,32 57,22 50,22 Z" />
            <path d="M42,40 L58,48" strokeWidth="3" />
            <path d="M30,78 L70,78 L68,70 L32,70 Z" />
            <path d="M26,84 L74,84 L74,79 L26,79 Z" />
          </g>
        )}

        {type === 'q' && (
          // Queen
          <g>
            <path d="M50,18 C48,18 47,19 47,21 C47,23 48,24 50,24 C52,24 53,23 53,21 C53,19 52,18 50,18 Z" />
            <path d="M25,35 L33,65 L67,65 L75,35 L61,50 L50,26 L39,50 Z" />
            <circle cx="25" cy="33" r="3" />
            <circle cx="75" cy="33" r="3" />
            <circle cx="61" cy="46" r="3" />
            <circle cx="39" cy="46" r="3" />
            <path d="M28,74 L72,74 L70,67 L30,67 Z" />
            <path d="M22,82 L78,82 L78,76 L22,76 Z" />
          </g>
        )}

        {type === 'k' && (
          // King
          <g>
            {/* Crown Cross */}
            <path d="M50,12 L50,24" strokeWidth="4" />
            <path d="M44,16 L56,16" strokeWidth="4" />
            {/* Crown Body */}
            <path d="M30,30 L50,24 L70,30 L64,65 L36,65 Z" />
            {/* Gems */}
            <circle cx="30" cy="28" r="3" />
            <circle cx="70" cy="28" r="3" />
            <circle cx="50" cy="22" r="3" />
            <path d="M28,74 L72,74 L70,67 L30,67 Z" />
            <path d="M22,82 L78,82 L78,76 L22,76 Z" />
          </g>
        )}
      </g>
    </svg>
  );
};
