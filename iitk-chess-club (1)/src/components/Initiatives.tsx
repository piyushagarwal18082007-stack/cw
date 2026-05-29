import React from 'react';
import { Award, Laptop, Users, Presentation, Smile, ShieldCheck } from 'lucide-react';

export const Initiatives: React.FC = () => {
  const initiatives = [
    {
      id: 'cmpl',
      title: 'CMPL (Club Member\'s Premier League)',
      description: 'Our premier intraclub team-battle. Group captains draft active players using custom mock monetary balances, paving the road for intense round-robin matchdays spanning multiple weeks. Engenders healthy competition and camaraderie.',
      badge: 'Highly Popular',
      icon: <Award className="w-6 h-6 text-chess-neon" />
    },
    {
      id: 'meets',
      title: 'Weekly Chess Meets',
      description: 'Regular, relaxed weekend meetups at the Gymkhana lounge. Pull up a chair, grab a board, and enjoy continuous over-the-board friendly blitz games, posture feedback sessions, and tactical analysis with peers.',
      badge: 'Over-The-Board',
      icon: <Users className="w-6 h-6 text-chess-teal" />
    },
    {
      id: 'arenas',
      title: 'Weekly Online Arenas',
      description: 'Structured internet battles hosted under Lichess.com/Chess.com club portals. Designed for students who prefer solving positions in digital grids. Includes custom cash vouchers and merit points for winners.',
      badge: 'Digital Speed',
      icon: <Laptop className="w-6 h-6 text-chess-neon" />
    },
    {
      id: 'lectures',
      title: 'Chess Lectures & Masterclasses',
      description: 'Carefully curated technical workshops covering opening theory (Catalan, Caro-Kann, Najdorf), middlegame positional decision-making, and critical pawn endgames led by elite campus players and guest coaches.',
      badge: 'Academic Wing',
      icon: <Presentation className="w-6 h-6 text-chess-teal" />
    },
    {
      id: 'outreach',
      title: 'Junior School Outreach',
      description: 'An altruistic community action. We visit nearby public schools and child centers on weekends to introduce kids to chess, teaching basic coordinates and tactile mating traps to nurture cognitive growth and pure happiness.',
      badge: 'Social Impact',
      icon: <Smile className="w-6 h-6 text-chess-neon" />
    }
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chess-card text-chess-neon border border-chess-teal/25 text-xs font-semibold">
          <ShieldCheck className="w-4 h-4 text-chess-neon" />
          Campus Pillars of Chess
        </div>
        <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Our initiatives & Campuses Wing
        </h3>
        <p className="text-chess-muted text-sm max-w-xl mx-auto">
          We combine a multitude of strategic, learning, social, and competition-centered pathways to promote community engagement for the campus janta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initiatives.map((init) => (
          <div
            key={init.id}
            className="bg-chess-card hover:bg-chess-bg/60 border border-chess-teal/15 hover:border-chess-neon/30 rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl hover:shadow-chess-neon/5 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-chess-bg rounded-xl border border-chess-teal/15 transition-colors shadow-inner">
                  {init.icon}
                </div>
                <span className="text-[9.5px] uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-chess-bg text-chess-teal border border-chess-teal/10 transition-colors">
                  {init.badge}
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-sans font-bold text-white text-base group-hover:text-chess-neon transition-colors font-sans">
                  {init.title}
                </h4>
                <p className="text-chess-muted text-xs sm:text-sm leading-relaxed text-justify">
                  {init.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-chess-teal/15 flex items-center justify-between text-[11px] font-bold text-chess-teal group-hover:text-chess-neon transition-colors">
              <span>ACTIVE INITIATIVE</span>
              <span>♟️</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
