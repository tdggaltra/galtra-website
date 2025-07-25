'use client';

import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function TestThemeButton() {
  const [isDark, setIsDark] = useState(false);

  const handleClick = () => {
    setIsDark(!isDark);
    console.log('Botão clicado! Tema:', isDark ? 'light' : 'dark');
    
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">Teste:</span>
      <button
        onClick={handleClick}
        className="p-2 rounded-lg bg-red-100 hover:bg-red-200 border border-red-300"
        style={{ background: 'red', color: 'white', padding: '8px' }}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
}