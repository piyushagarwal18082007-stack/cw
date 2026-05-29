import React from 'react';
import { Share2, Instagram, Facebook, Linkedin, ExternalLink, Globe, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';

export const SocialHub: React.FC = () => {
  const socials = [
    {
      name: 'Official Linktree',
      username: 'linktr.ee/chessiitk',
      url: 'https://linktr.ee/chessiitk',
      description: 'The ultimate shortcut to our matches, registrations, rule books, and resources.',
      color: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/25 text-emerald-300',
      badgeColor: 'bg-emerald-500/15 text-emerald-300',
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      isMain: true
    },
    {
      name: 'Instagram',
      username: '@chessiitk',
      url: 'https://instagram.com/chessiitk',
      description: 'Follow our daily visual updates, tournament coverage, blitz reels, and meme streams.',
      color: 'from-pink-500/10 to-rose-500/10 border-pink-500/20 text-pink-300',
      badgeColor: 'bg-pink-500/15 text-pink-300',
      icon: <Instagram className="w-6 h-6 text-pink-400" />
    },
    {
      name: 'Facebook',
      username: 'chessclubiitk',
      url: 'https://facebook.com/chessclubiitk',
      description: 'Interact with historic group records, event archives, and updates in Gymkhana boards.',
      color: 'from-blue-600/10 to-indigo-600/10 border-blue-500/20 text-blue-300',
      badgeColor: 'bg-blue-500/15 text-blue-300',
      icon: <Facebook className="w-6 h-6 text-blue-400" />
    },
    {
      name: 'LinkedIn',
      username: 'chessclubiitkanpur',
      url: 'https://linkedin.com/company/chessclubiitkanpur',
      description: 'Stay connected with professional club coordinates, alumni circles, and sponsorship news.',
      color: 'from-cyan-500/10 to-blue-500/10 border-cyan-500/20 text-cyan-300',
      badgeColor: 'bg-cyan-500/15 text-cyan-300',
      icon: <Linkedin className="w-6 h-6 text-cyan-400" />
    }
  ];

  return (
    <div className="bg-chess-card rounded-2xl border border-chess-teal/15 shadow-2xl overflow-hidden max-w-5xl mx-auto">
      {/* Top Banner with dynamic glassmorphism */}
      <div className="bg-gradient-to-br from-chess-bg to-chess-card p-6 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-b border-chess-teal/10 relative">
        <div className="absolute top-0 right-0 w-48 h-48 bg-chess-neon/5 rounded-full blur-2xl pointer-events-none" />
        
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chess-neon/10 text-chess-neon text-xs font-mono font-bold uppercase tracking-widest border border-chess-neon/20">
            <Share2 className="w-3.5 h-3.5 text-chess-neon" />
            CONNECT WITH US
          </div>
          <h3 className="text-xl sm:text-2xl font-sans font-black tracking-tight text-white flex items-center gap-2">
            Social Media Hub & Community
          </h3>
          <p className="text-chess-muted text-xs sm:text-sm max-w-xl">
            Never miss a tournament bracket, lecture meetup, or live stream. Follow our official portals and join the IITK chess collective.
          </p>
        </div>

        {/* Featured Big Linktree Action */}
        <a
          href="https://linktr.ee/chessiitk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3.5 bg-chess-neon hover:bg-chess-neon/90 text-chess-bg font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 select-none group relative z-10"
        >
          <span>Visit Chess Linktree</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Large Highlighted Linktree Card */}
        <div className="bg-gradient-to-r from-chess-bg/80 via-emerald-950/25 to-chess-bg/80 border border-emerald-500/35 rounded-2xl p-6 sm:p-8 relative overflow-hidden group">
          <div className="absolute -right-4 -bottom-4 text-emerald-500/5 text-9xl font-mono font-black select-none pointer-events-none group-hover:scale-110 transition-transform duration-500">
            LINK
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest text-emerald-400 block uppercase">RECOMMENDED GATEWAY</span>
                  <h4 className="font-sans font-black text-white text-base sm:text-lg">The Complete Linktree Hub</h4>
                </div>
              </div>
              <p className="text-chess-muted text-xs sm:text-sm leading-relaxed max-w-xl">
                One link to rule them all. Access all our registered portals, event signup links, active PDF chess rule books, group coordination forms, and past championship score sheets directly from your phone.
              </p>
              <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg inline-block border border-emerald-500/20">
                ⭐ Featured Link: <a href="https://linktr.ee/chessiitk" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">linktr.ee/chessiitk</a>
              </div>
            </div>

            <a
              href="https://linktr.ee/chessiitk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto text-center px-6 py-3 border border-emerald-400/30 hover:border-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/25 text-white font-bold text-xs rounded-xl transition-all shadow-md uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Explore All Socials</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Directory Cards Grid */}
        <div className="space-y-4">
          <h4 className="text-xs sm:text-sm font-bold text-white uppercase tracking-wider block border-l-2 border-chess-neon pl-2.5">
            Active Social Networks
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {socials.filter(s => !s.isMain).map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gradient-to-b ${social.color} border rounded-xl p-5 hover:scale-[1.02] transition-all flex flex-col justify-between group cursor-pointer relative overflow-hidden`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-chess-bg/75 border border-chess-teal/10">
                      {social.icon}
                    </div>
                    <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-md ${social.badgeColor}`}>
                      {social.username}
                    </span>
                  </div>
                  <div>
                    <h5 className="font-sans font-bold text-white text-sm flex items-center gap-1.5">
                      {social.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h5>
                    <p className="text-chess-muted text-xs leading-relaxed mt-1 text-justify">
                      {social.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-chess-teal/10 flex items-center justify-between text-[10px] font-mono font-bold tracking-wide text-chess-teal">
                  <span>FOLLOW US</span>
                  <span className="group-hover:text-white transition-colors">GO ↗</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Community Standard Disclaimer */}
        <div className="bg-chess-bg border border-chess-teal/15 rounded-xl p-4 flex items-center gap-3.5">
          <MessageSquare className="w-6 h-6 text-chess-neon shrink-0" />
          <div className="space-y-0.5">
            <h5 className="font-sans font-bold text-white text-xs sm:text-sm">Join the Active Dialogue</h5>
            <p className="text-chess-muted text-[11px] sm:text-xs leading-relaxed text-justify">
              Our community spaces respect free learning and positive encouragement. Feel free to ping the Core Coordinators or post chess puzzles and tournament feedback on any of our channels. Peace and happiness always!
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
