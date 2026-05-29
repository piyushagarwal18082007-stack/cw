import React, { useState } from 'react';
import { Event } from '../types';
import { Calendar, Clock, MapPin, Trophy, Award, MessageSquare, ChevronRight, HelpCircle, Maximize2, X } from 'lucide-react';

import fclBanner from '../assets/images/fcl_banner_1779548712632.png';
import swissBanner from '../assets/images/swiss_banner_1779548732250.png';
import speedBanner from '../assets/images/speed_banner_1779548750223.png';
import cupBanner from '../assets/images/cup_banner_1779548769168.png';
import sbiBanner from '../assets/images/sbi_banner_1779548784209.png';

export const Events: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>('sbi2026');
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const chessEvents: Event[] = [
    {
      id: 'fcl2025',
      title: "Fresher's Chess League 2025",
      date: "August 22nd - 24nd, 2025",
      tagline: "Your first big move at IITK starts here!",
      description: "Welcome freshers! Witness a full-scale IPL style auction followed by matches testing sheer planning and blitz mechanics.",
      longDescription: "The Fresher's Chess League is a signature hallmark event designed specifically to welcome the incoming batch of freshers into the IITK Chess family. Built upon an offline auction format where team banners bid for fresh talent, followed by a double round-robin fast rapid showdown. It is the ultimate playground to get noticed, selected, and integrated into the core campus teams.",
      format: "IPL-Style Team Drafting & Auction",
      timeControl: "10 minutes + 5 seconds increments (10+5)",
      vibeColor: "border-amber-500 hover:shadow-amber-500/10",
      highlights: [
        "Live Mock Currency Bidding & Auctioneer-led drafts (Aug 22)",
        "Double-elimination rapid brackets (Aug 23 - 24)",
        "Guaranteed onboarding into the official Club Mentorship tracks",
        "Prizes, custom medals, and premium certificates for finalists"
      ],
      pdfPageNum: 1,
      imageUrl: fclBanner
    },
    {
      id: 'swiss2025',
      title: "IITK Grand Swiss Championship Cycle 2025",
      date: "October 24th - 26th, 2025",
      tagline: "The Ultimate 7-Round Showdown!",
      description: "A highly prestigious, grueling 7-round Swiss system tournament testing stamina, positional planning, and tactical precision.",
      longDescription: "Constructed to filter top board seeds for the Inter-IIT matches, the Grand Swiss is an intense, multi-day endurance campaign. Players battle across consecutive standard rounds, tracking tiebreaker averages and live standings projections. Open to all students, faculties, staff, and researchers on campus.",
      format: "FIDE Standard Swiss System (7 Grueling Rounds)",
      timeControl: "10 minutes + 5 seconds increments",
      vibeColor: "border-slate-800 hover:shadow-slate-800/10",
      highlights: [
        "Rigid pairings system utilizing official SwissManager configurations",
        "Official team qualifiers for board-selections",
        "Daily game analysis led by senior rating masters on twitch/discord",
        "Interactive live scoreboard printed in campus notices"
      ],
      pdfPageNum: 2,
      imageUrl: swissBanner
    },
    {
      id: 'speed2025',
      title: "Speed Chess Championship 2025",
      date: "December 26th - 28th, 2025",
      tagline: "Arena & Knockout Lightning Showdowns!",
      description: "Blazing fast bullet and blitz battles. Separate structures for Arena-based qualifiers and tactical double knockouts.",
      longDescription: "Designed to set fire to the winter break, the Speed Chess Championship transitions from open bullet arenas on Day 1 to a high-octane Top-16 single-elimination knockout bracket on Days 2 & 3. It rewards razor-sharp intuition, swift mouse/hand coordination, and physical composure under severe time pressures.",
      format: "Day 1: Bullet Arena | Days 2 & 3: Knockout Matches",
      timeControl: "Blitz (3+1) and Bullet (1+1) Formats",
      vibeColor: "border-orange-500 hover:shadow-orange-500/10",
      highlights: [
        "Day 1: Open Bullet Arena (1 Hr 3+1 and 30 Mins 1+1)",
        "Day 2 & 3: Head-to-Head Knockout matches (45 Mins 3+1 and 30 Mins 1+1)",
        "Screaming commentators and live chess-stream vibes",
        "Interactive custom champion's poster and speed-crown badges"
      ],
      pdfPageNum: 3,
      imageUrl: speedBanner
    },
    {
      id: 'cup2026',
      title: "IITK Chess Cup 2026",
      date: "April 3rd - 5th, 2026",
      tagline: "The Pinnacle Campus Championship",
      description: "Our core annual flag tournament. Begins with online qualification arenas, bridging into offline final rapid knockouts on-campus.",
      longDescription: "The IITK Chess Cup is the most widely anticipated internal cup event of the academic cycle. Melding intermediate-friendly online open qualifiers with high-stakes, pressure-cooked offline playoff boards inside the gymnasium lounge. Champions engrave their names on the rolling campus silver cup.",
      format: "Round 1: Online Qualifier Arena | Round 2: Offline Playoff Knockouts",
      timeControl: "Blitz 3+2 (Qualifier) & Rapid 10+5 (Grand Finals)",
      vibeColor: "border-blue-500 hover:shadow-blue-500/10",
      highlights: [
        "Round 1: Mass Online Qualifier Arena (April 3, 2026)",
        "Round 2: Top-32 Offline Knockout Matches (April 4 - 5, 2026)",
        "Professional digital board display overlays for spectators",
        "Rolling silver cup bragging rights & merit certificates"
      ],
      pdfPageNum: 4,
      imageUrl: cupBanner
    },
    {
      id: 'sbi2026',
      title: "SBI GIC Ltd. FIDE Rated Open Rapid Chess Tournament 2026",
      date: "February 7th, 2026",
      tagline: "Compete at India's Premier Chess Tournament!",
      description: "A collaborative, massive cash FIDE rated tournament hosted on-campus, pulling international rated masters to Kanpur.",
      longDescription: "Sponsored by SBI General Insurance, this tournament marks a historical milestone, bringing internationally rated FIDE arbiters and world-class Grandmasters to IIT Kanpur's soil. Boasting an incredible cash pool, it is the highest-level rapid event in Uttar Pradesh for the 2026 cycle.",
      format: "FIDE-Rated Rapid (Swiss System Matchmaking)",
      timeControl: "15 minutes + 10 seconds rapid FIDE clock",
      vibeColor: "border-purple-600 hover:shadow-purple-600/10",
      highlights: [
        "Incredible Cash Prize Fund: ₹ 2,00,000",
        "Organized under AICF & FIDE sanctioning codes",
        "Open to all rating brackets from amateurs to GMs",
        "Official venue: Main Gym Lounge, IIT Kanpur Campus"
      ],
      pdfPageNum: 5,
      imageUrl: sbiBanner
    }
  ];

  const activeEvent = chessEvents.find(e => e.id === selectedEventId) || chessEvents[4];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chess-card text-chess-neon border border-chess-teal/25 text-xs font-semibold uppercase tracking-wider">
          <Trophy className="w-3.5 h-3.5" />
          Flagship Events Tracker
        </div>
        <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Major Tournaments & Cycles
        </h3>
        <p className="text-chess-muted text-sm max-w-xl mx-auto">
          We host an intensive array of competitive fixtures and chess leagues throughout the academic year. Tap on an event to see detailed logistics.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: Navigation Links of events */}
        <div className="lg:col-span-5 space-y-3">
          {chessEvents.map((evt) => {
            const isSelected = evt.id === selectedEventId;
            return (
              <button
                key={evt.id}
                onClick={() => setSelectedEventId(evt.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-start justify-between group ${
                  isSelected
                    ? 'bg-chess-neon text-chess-bg border-chess-neon shadow-lg shadow-chess-neon/10'
                    : 'bg-chess-card hover:bg-chess-bg/80 border-chess-teal/15 text-white'
                }`}
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-sans font-bold text-sm sm:text-base tracking-tight leading-tight">
                      {evt.title}
                    </span>
                    {evt.id === 'sbi2026' && (
                      <span className={`font-bold text-[9px] px-1.5 py-0.5 rounded uppercase font-mono ${
                        isSelected ? 'bg-chess-bg text-chess-neon' : 'bg-chess-neon/10 text-chess-neon'
                      }`}>
                        FIDE
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <Calendar className={`w-3.5 h-3.5 ${isSelected ? 'text-chess-bg' : 'text-chess-teal'}`} />
                    <span className={isSelected ? 'text-chess-bg/85' : 'text-chess-muted'}>
                      {evt.date}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`w-5 h-5 transition-transform shrink-0 ${
                  isSelected ? 'text-chess-bg translate-x-1' : 'text-chess-teal group-hover:translate-x-1'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Side: Detailed Poster Representation */}
        <div className="lg:col-span-7 bg-chess-card border border-chess-teal/15 rounded-2xl shadow-xl overflow-hidden flex flex-col justify-between min-h-[460px]">
          {/* Official Event Poster Banner */}
          {activeEvent.imageUrl && (
            <div className="relative w-full h-52 sm:h-64 overflow-hidden group/poster border-b border-chess-teal/10 cursor-pointer" onClick={() => setIsZoomed(true)}>
              <img
                src={activeEvent.imageUrl}
                alt={`${activeEvent.title} Official Poster`}
                className="w-full h-full object-cover object-center group-hover/poster:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-chess-card via-chess-card/25 to-transparent" />
              
              {/* Overlay with instructions to zoom */}
              <div className="absolute bottom-4 right-4 bg-chess-bg/85 backdrop-blur-md border border-chess-teal/20 px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-white text-[11px] font-semibold shadow-md opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-3.5 h-3.5 text-chess-neon" />
                <span>View Full Flyer</span>
              </div>
            </div>
          )}

          {/* Header poster band */}
          <div className="bg-gradient-to-tr from-chess-bg via-chess-card to-chess-bg p-6 sm:p-8 text-white relative border-b border-chess-teal/10">
            <div className="absolute top-3 right-4 font-mono text-[9px] text-chess-neon tracking-wider font-bold">
              PDF PAGE {activeEvent.pdfPageNum} REFERENCE
            </div>
            
            <div className="space-y-2">
              <span className="text-[10px] sm:text-xs font-mono tracking-widest text-chess-neon font-bold uppercase block">
                {activeEvent.format}
              </span>
              <h4 className="text-xl sm:text-2xl font-sans font-bold tracking-tight text-white leading-tight">
                {activeEvent.title}
              </h4>
              <p className="text-chess-teal font-sans text-xs sm:text-sm font-medium italic mt-1">
                "{activeEvent.tagline}"
              </p>
            </div>

            {/* Micro details stats grid */}
            <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-chess-teal/10">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <div className="p-1.5 bg-chess-bg rounded text-chess-neon">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-chess-teal uppercase font-bold tracking-wider">Format-Time</div>
                  <div className="font-mono text-[11.5px] mt-0.5 font-bold text-white">{activeEvent.timeControl}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 text-xs sm:text-sm">
                <div className="p-1.5 bg-chess-bg rounded text-chess-neon">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-chess-teal uppercase font-bold tracking-wider">Venue</div>
                  <div className="text-[11.5px] mt-0.5 font-bold text-white">IIT Kanpur Campus</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Highlights */}
          <div className="p-6 sm:p-8 space-y-6 flex-grow">
            <div className="space-y-2">
              <h5 className="font-sans font-bold text-white text-xs sm:text-sm uppercase tracking-wider">About the Tournament</h5>
              <p className="text-chess-muted text-xs sm:text-sm leading-relaxed text-justify">
                {activeEvent.longDescription}
              </p>
            </div>

            {/* Highlights bullet-list */}
            <div className="space-y-3">
              <h5 className="font-sans font-bold text-white text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-chess-neon" /> Key Event Structure
              </h5>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {activeEvent.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-chess-muted">
                    <span className="text-chess-neon font-bold shrink-0 mt-0.5">✔</span>
                    <span className="leading-tight">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Call to action footer */}
          <div className="bg-[#0b0c10]/50 border-t border-chess-teal/10 py-4 px-6 sm:px-8 mt-auto flex items-center justify-between">
            <span className="text-[10px] sm:text-xs text-chess-teal font-sans italic">
              *Rules and details synced with the official student’s rulebook.
            </span>
            <span className="text-xs font-bold text-chess-neon flex items-center gap-1">
              Active Tournament Cycle ♟️
            </span>
          </div>

        </div>
      </div>

      {/* Fullscreen Lightbox Modal for Zoomed Poster */}
      {isZoomed && activeEvent.imageUrl && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6" onClick={() => setIsZoomed(false)}>
          <div className="relative max-w-lg w-full max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute -top-12 right-0 sm:-top-10 sm:-right-4 p-2 bg-chess-card/85 hover:bg-chess-neon hover:text-chess-bg border border-chess-teal/20 text-white rounded-full transition-all shadow-lg"
              title="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full h-full overflow-hidden rounded-2xl border border-chess-teal/30 shadow-2xl bg-chess-card select-none">
              <img
                src={activeEvent.imageUrl}
                alt={`${activeEvent.title} Full Poster`}
                className="w-full max-h-[70vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-chess-card/95 border-t border-chess-teal/15 text-center">
                <h4 className="font-sans font-black text-sm sm:text-base text-white tracking-tight leading-none">
                  ♟️ {activeEvent.title} Official Flyer
                </h4>
                <p className="text-chess-muted text-xs mt-1.5">
                  Official scheduling & formats page {activeEvent.pdfPageNum} reference
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
