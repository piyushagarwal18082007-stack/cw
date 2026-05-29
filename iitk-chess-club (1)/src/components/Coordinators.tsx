import React from 'react';
import { Coordinator } from '../types';
import { Phone, MessageSquare, Mail, Award, UserCheck } from 'lucide-react';

export const Coordinators: React.FC = () => {
  const coordinatorList: Coordinator[] = [
    {
      name: 'Inesh Aggarwal',
      phone: '+91 8437708390',
      email: 'ineshag@iitk.ac.in',
      role: 'Coordinator',
    },
    {
      name: 'Laksh Dhir',
      phone: '+91 8968847741',
      email: 'lakshdhir@iitk.ac.in',
      role: 'Coordinator',
    },
    {
      name: 'Rishi Gupta',
      phone: '+91 7838658260',
      email: 'rishigup@iitk.ac.in',
      role: 'coordinator',
    },
    {
      name: 'Rudra Dwivedi',
      phone: '+91 9546708859',
      email: 'rudradw@iitk.ac.in',
      role: 'coordinator',
    },
    {
      name: 'Shaurya Vats',
      phone: '+91 9868020994',
      email: 'shaurya@iitk.ac.in',
      role: 'coordinator',
    },
  ];

  // Helper inside loop to get first letters
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((part) => part[0])
      .join('');
  };

  // Profile decorative background gradients
  const bgStyles = [
    'from-emerald-900 to-slate-900',
    'from-amber-900 to-slate-900',
    'from-indigo-900 to-slate-900',
    'from-rose-900 to-slate-900',
    'from-teal-900 to-slate-900',
  ];

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-chess-card text-chess-neon border border-chess-teal/25 text-xs font-semibold">
          <UserCheck className="w-4 h-4 text-chess-neon" />
          The Leadership Team
        </div>
        <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-white">
          Meet Our Coordinators
        </h3>
        <p className="text-chess-muted text-sm max-w-xl mx-auto">
          Have queries about tournament schedules, rules, or want to join the core wing? Feel free to reach out to any list members below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        {coordinatorList.map((coordinator, idx) => {
          const initials = getInitials(coordinator.name);
          const cleanPhone = coordinator.phone.replace(/[^0-9]/g, ''); // 918437708390 style
          const whatsappUrl = `https://wa.me/${cleanPhone}`;

          return (
            <div
              key={coordinator.name}
              className="bg-chess-card border border-chess-teal/15 hover:border-chess-neon/30 rounded-2xl p-5 text-center flex flex-col justify-between hover:shadow-2xl hover:shadow-chess-neon/5 transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Custom profile avatar representing a chess master silhouette */}
                <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${bgStyles[idx % bgStyles.length]} flex items-center justify-center text-white border-2 border-chess-teal/40 shadow-inner relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                  
                  {/* Outer subtle lens sheen */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                  
                  {/* Decorative miniature king crown in top corner */}
                  <span className="absolute top-1 right-2 text-[7px] opacity-40 select-none">👑</span>

                  {/* Initials */}
                  <span className="font-mono font-bold tracking-tight text-sm sm:text-base text-white">
                    {initials}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-white text-sm group-hover:text-chess-neon transition-colors">
                    {coordinator.name}
                  </h4>
                  <div className="inline-flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-chess-bg text-chess-teal border border-chess-teal/15">
                    <Award className="w-3 h-3 text-chess-neon" />
                    {coordinator.role}
                  </div>
                </div>
              </div>

              {/* Direct Communication Badges */}
              <div className="mt-5 pt-4 border-t border-chess-teal/15 space-y-2">
                <a
                  href={`tel:${coordinator.phone}`}
                  className="flex items-center justify-center gap-2 py-1.5 px-3 rounded-lg text-xs font-medium text-chess-muted hover:text-chess-neon bg-chess-bg hover:bg-chess-teal/10 border border-chess-teal/15 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-chess-teal" />
                  {coordinator.phone}
                </a>

                <div className="grid grid-cols-2 gap-1.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-semibold text-chess-bg bg-chess-neon hover:bg-chess-neon/90 transition-colors"
                  >
                    <MessageSquare className="w-3 h-3 text-chess-bg" />
                    Chat
                  </a>
                  <a
                    href={`mailto:${coordinator.email}`}
                    className="flex items-center justify-center gap-1.5 py-1.5 px-2 rounded-lg text-[11px] font-semibold text-white bg-chess-bg hover:bg-chess-card border border-chess-teal/15 transition-colors"
                  >
                    <Mail className="w-3 h-3 text-chess-teal" />
                    Email
                  </a>
                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};
