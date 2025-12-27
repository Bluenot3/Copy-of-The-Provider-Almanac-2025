
import React from 'react';
import LogoOrb from './LogoOrb';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 glass border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-5">
          <LogoOrb size={42} />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold tracking-tight text-white leading-none">THE PROVIDER ALMANAC</h1>
            <p className="text-[10px] font-mono text-white/40 uppercase tracking-widest mt-1">Presented by ZEN AI Co.</p>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <div className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[11px] font-black text-white/80 tracking-widest uppercase">
            System_Audit_2025
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
