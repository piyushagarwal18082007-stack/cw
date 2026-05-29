import React from 'react';
import { Heart, Users, Shield, Smile } from 'lucide-react';

export const Motive: React.FC = () => {
  return (
    <div className="relative py-12 px-6 sm:px-8 bg-chess-card rounded-2xl border border-chess-teal/15 shadow-xl overflow-hidden text-center max-w-5xl mx-auto">
      {/* Absolute decorative chess pawns faintly in bg */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 text-chess-teal/5 font-serif text-[120px] select-none pointer-events-none">♟️</div>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 text-chess-teal/5 font-serif text-[120px] select-none pointer-events-none">♞</div>
      
      <div className="max-w-3xl mx-auto space-y-6 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-chess-bg text-chess-neon border border-chess-teal/20 text-xs font-semibold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          Our Mission & Heart
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Spreading Joy, Building Community One Move at a Time ♟️
        </h3>
        
        <p className="text-chess-muted text-sm sm:text-base leading-relaxed">
          The Chess Club, IIT Kanpur is a <strong className="text-chess-neon">purely non-profitable organization</strong> run by passionate chess enthusiasts. 
          Our core vision isn't just about cultivating grandmasters; it is about <strong className="text-chess-neon">spreading pure happiness</strong> through the strategic beauty of the game, fostering intellectual curiosity, and building an inclusive, stress-free shelter for the entire campus janta.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
          <div className="bg-chess-bg p-4 rounded-xl border border-chess-teal/10 flex flex-col items-center shadow-md">
            <div className="p-3 rounded-full bg-chess-card text-chess-neon mb-3">
              <Smile className="w-5 h-5 text-chess-neon" />
            </div>
            <h5 className="font-sans font-bold text-sm text-white">Spread Happiness</h5>
            <p className="text-chess-muted text-xs mt-1 text-center leading-relaxed">Making chess enjoyable, lighthearted, and stress-melting for all batches.</p>
          </div>

          <div className="bg-chess-bg p-4 rounded-xl border border-chess-teal/10 flex flex-col items-center shadow-md">
            <div className="p-3 rounded-full bg-chess-card text-chess-teal mb-3">
              <Users className="w-5 h-5 text-chess-teal" />
            </div>
            <h5 className="font-sans font-bold text-sm text-white">Community Bonding</h5>
            <p className="text-chess-muted text-xs mt-1 text-center leading-relaxed">Bridging PG, UG, faculty, and staff through interactive campus sessions.</p>
          </div>

          <div className="bg-chess-bg p-4 rounded-xl border border-chess-teal/10 flex flex-col items-center shadow-md">
            <div className="p-3 rounded-full bg-chess-card text-chess-neon mb-3">
              <Shield className="w-5 h-5 text-chess-neon" />
            </div>
            <h5 className="font-sans font-bold text-sm text-white">Inclusive growth</h5>
            <p className="text-chess-muted text-xs mt-1 text-center leading-relaxed">Zero entry barriers. Everyone from complete beginners to veterans are welcome!</p>
          </div>
        </div>
      </div>
    </div>
  );
};
