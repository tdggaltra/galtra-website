'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function SimpleThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Verifica o tema inicial
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-gray-100 dark:bg-dark-800 hover:bg-gray-200 dark:hover:bg-dark-700 transition-colors duration-200"
      aria-label="Alternar tema"
      title={isDark ? 'Modo claro' : 'Modo escuro'}
      style={{
        border: '1px solid #ccc', // Para garantir que seja visível
        minWidth: '40px',
        minHeight: '40px'
      }}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-accent-400" /> // Roxo do tema
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  );
}