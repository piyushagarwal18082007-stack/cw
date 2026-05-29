import React, { useState } from 'react';
import { Motive } from './components/Motive';
import { Coordinators } from './components/Coordinators';
import { Events } from './components/Events';
import { Initiatives } from './components/Initiatives';
import { PuzzleSolver } from './components/PuzzleSolver';
import { SocialHub } from './components/SocialHub';
import { Award, BookOpen, Heart, Users, Share2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'playground' | 'events' | 'initiatives' | 'socials' | 'coordinators'>('playground');

  const tabsInfo = [
    {
      id: 'playground' as const,
      label: 'Tactical Board',
      icon: '♟️',
      subtitle: 'Solve & Upload Puzzles'
    },
    {
      id: 'events' as const,
      label: 'Past Events & Cups',
      icon: '🏆',
      subtitle: 'Tournaments tracker'
    },
    {
      id: 'initiatives' as const,
      label: 'Key Initiatives',
      icon: '🚀',
      subtitle: 'CMPL, Meets & Outreach'
    },
    {
      id: 'socials' as const,
      label: 'Social Media Hub',
      icon: '🔗',
      subtitle: 'Linktree & Portals'
    },
    {
      id: 'coordinators' as const,
      label: 'Core Leadership',
      icon: '👥',
      subtitle: 'Get In Touch'
    }
  ];

  return (
    <div className="min-h-screen bg-chess-bg text-chess-muted font-sans selection:bg-chess-teal/30 selection:text-chess-neon overflow-x-hidden">
      {/* Decorative top ambient grids */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-chess-teal/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-12 right-12 w-64 h-64 bg-chess-neon/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-48 left-12 w-80 h-80 bg-chess-teal/5 rounded-full blur-3xl pointer-events-none" />

      {/* Primary Header/Navbar */}
      <header className="sticky top-0 z-50 bg-chess-bg/90 backdrop-blur-md border-b border-chess-teal/10 shadow-lg transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo with structured vectors */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-chess-neon flex items-center justify-center text-chess-bg font-serif text-2xl font-black shadow-md border border-chess-neon/50">
              ♞
            </div>
            <div>
              <h1 className="font-sans font-black tracking-tight text-sm sm:text-base text-white uppercase">
                CHESS<span className="text-chess-neon">CLUB</span>
              </h1>
              <span className="text-[10px] font-mono tracking-wider text-chess-teal font-bold block -mt-1 uppercase">
                SPREAD PEACE & HAPPINESS
              </span>
            </div>
          </div>

          {/* Quick External Actions */}
          <div className="flex items-center gap-2">
            <a
              href="https://linktr.ee/chessiitk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-chess-card hover:bg-chess-card/85 text-white text-[11px] sm:text-xs font-bold rounded-lg border border-chess-teal/25 transition-colors flex items-center gap-1.5"
            >
              <Share2 className="w-3.5 h-3.5 text-chess-neon" />
              Linktree Hub
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('hub-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setActiveTab('playground');
              }}
              className="px-4 py-1.5 bg-chess-neon hover:bg-chess-neon/90 text-chess-bg text-[11px] sm:text-xs font-bold rounded-lg transition-colors shadow-sm"
            >
              Play Board
            </button>
          </div>

        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16 relative z-10">
        
        {/* Modern Swiss Design Hero Section */}
        <section className="text-center py-8 lg:py-16 space-y-6 max-w-4xl mx-auto relative cursor-default">
          
          {/* Subtle chess piece icons floating */}
          <div className="absolute top-0 right-[15%] text-chess-teal/20 text-5xl animate-bounce-subtle pointer-events-none select-none hidden lg:block">👑</div>
          <div className="absolute bottom-6 left-[10%] text-chess-teal/20 text-6xl rotate-12 pointer-events-none select-none hidden lg:block">♜</div>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-chess-card text-chess-neon border border-chess-teal/25 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-chess-neon animate-pulse" />
              Empowering the Campus Janta
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-white leading-[1.1]">
              Strategic Minds,<br />
              <span className="bg-gradient-to-r from-chess-neon via-[#51e2d7] to-[#3cd3c8] bg-clip-text text-transparent">
                Connected in Happiness.
              </span>
            </h2>
          </div>

          <p className="text-chess-muted text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to the official digital hub of the <strong>IIT Kanpur Chess Club</strong>. 
            We are a dedicated non-profit student initiative promoting creative planning, tactical critical thinking, and social inclusion through the timeless game of chess.
          </p>

          {/* Quick Metrics Dashboard Bar */}
          <div className="grid grid-cols-2 gap-4 p-4 sm:p-5 bg-chess-card border border-chess-teal/20 rounded-2xl shadow-xl max-w-lg mx-auto">
            <div className="text-center p-2.5">
              <div className="text-2xl sm:text-3xl font-mono font-black text-white">10+</div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-chess-teal mt-1">Annual Tournaments</div>
            </div>
            <div className="text-center p-2.5 border-l border-chess-teal/20">
              <div className="text-2xl sm:text-3xl font-mono font-black text-white">100%</div>
              <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-chess-teal mt-1 font-bold">Non-Profit Joy</div>
            </div>
          </div>

        </section>

        {/* Motive Permanently display for clarity */}
        <section id="mission-section">
          <Motive />
        </section>

        {/* Interactive Features tab section */}
        <section id="hub-section" className="space-y-6 pt-6 animate-fade-in">
          
          {/* Navigation tab strip */}
          <div className="border border-chess-teal/15 shadow-2xl rounded-2xl bg-chess-card p-2 flex flex-nowrap overflow-x-auto gap-1 [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-thumb]:bg-chess-teal/35">
            {tabsInfo.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 shrink-0 p-3.5 sm:p-4 rounded-xl text-center select-none transition-all duration-300 flex flex-col items-center justify-center gap-1 min-w-[120px] ${
                    isActive
                      ? 'bg-chess-neon text-chess-bg shadow-md shadow-chess-neon/20 font-bold'
                      : 'hover:bg-chess-bg/60 text-chess-muted hover:text-white'
                  }`}
                >
                  <span className="text-xl sm:text-2xl mb-1">{tab.icon}</span>
                  <span className="font-sans font-bold text-xs leading-none">
                    {tab.label}
                  </span>
                  <span className={`text-[9px] font-sans block leading-none font-semibold ${isActive ? 'text-chess-bg/85' : 'text-chess-teal'}`}>
                    {tab.subtitle}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active component render view */}
          <div className="transition-all duration-300">
            {activeTab === 'playground' && <PuzzleSolver />}
            {activeTab === 'events' && <Events />}
            {activeTab === 'initiatives' && <Initiatives />}
            {activeTab === 'socials' && <SocialHub />}
            {activeTab === 'coordinators' && <Coordinators />}
          </div>

        </section>

      </main>

      {/* Structured Footer */}
      <footer className="bg-[#050608] border-t border-chess-card text-chess-muted py-12 mt-20 relative">
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-chess-teal via-chess-neon to-chess-teal" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-sans font-black tracking-widest text-sm text-white uppercase">
              CHESS<span className="text-chess-neon">CLUB</span> IIT KANPUR
            </h4>
            <p className="text-xs text-[#6F7073]">
              © {new Date().getFullYear()} Chess Club, IITK. Crafted strictly as a non-profitable, joy-spreading community asset.
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-semibold text-chess-teal">
            <button
              onClick={() => {
                const el = document.getElementById('hub-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setActiveTab('socials');
              }}
              className="hover:text-chess-neon cursor-pointer transition-colors"
            >
              Social Channels
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('hub-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setActiveTab('coordinators');
              }}
              className="hover:text-chess-neon cursor-pointer transition-colors"
            >
              Contact Arbiters
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
