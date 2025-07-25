#!/bin/bash

# Script para corrigir os bugs encontrados no projeto Galtra
echo "🔧 Finalizando correções de bugs do projeto Galtra..."

echo "9️⃣ Criando arquivo globals.css para garantir que os estilos existam..."
cat > src/app/globals.css << 'EOF'
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* CSS Variables */
:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  --accent-50: #fdf4ff;
  --accent-100: #fae8ff;
  --accent-200: #f5d0fe;
  --accent-300: #f0abfc;
  --accent-400: #e879f9;
  --accent-500: #d946ef;
  --accent-600: #c026d3;
  --accent-700: #a21caf;
  --accent-800: #86198f;
  --accent-900: #701a75;

  --dark-50: #f8fafc;
  --dark-100: #f1f5f9;
  --dark-200: #e2e8f0;
  --dark-300: #cbd5e1;
  --dark-400: #94a3b8;
  --dark-500: #64748b;
  --dark-600: #475569;
  --dark-700: #334155;
  --dark-800: #1e293b;
  --dark-900: #0f172a;
}

/* Base Styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-inter, system-ui, sans-serif);
}

/* Custom Components */
.glass-effect {
  @apply bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50;
}

.gradient-text {
  @apply bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent;
}

.section-padding {
  @apply py-16 lg:py-24;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Animations */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Background Pattern */
.bg-hero-pattern {
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0);
  background-size: 20px 20px;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Focus styles */
:focus-visible {
  @apply outline-2 outline-offset-2 outline-primary-600;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-dark-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-dark-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-dark-500;
}
EOF

echo "🔟 Criando um favicon SVG básico para evitar erros..."
mkdir -p public
cat > public/icon.svg << 'EOF'
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="#2563eb"/>
  <path d="M8 12h16v2H8v-2zm0 4h16v2H8v-2zm0 4h12v2H8v-2z" fill="white"/>
  <circle cx="24" cy="8" r="4" fill="#8b5cf6"/>
</svg>
EOF

echo "1️⃣1️⃣ Criando manifest.json..."
cat > public/manifest.json << 'EOF'
{
  "name": "Galtra - Ciência de Dados e IA",
  "short_name": "Galtra",
  "description": "Transformamos dados em insights valiosos",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#2563eb",
  "icons": [
    {
      "src": "/icon.svg",
      "sizes": "any",
      "type": "image/svg+xml"
    }
  ]
}
EOF

echo "1️⃣2️⃣ Corrigindo imports no globals.css (removendo paths que podem não existir)..."
cat > src/app/globals.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* CSS Variables */
:root {
  --primary-50: #eff6ff;
  --primary-100: #dbeafe;
  --primary-200: #bfdbfe;
  --primary-300: #93c5fd;
  --primary-400: #60a5fa;
  --primary-500: #3b82f6;
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-800: #1e40af;
  --primary-900: #1e3a8a;

  --accent-50: #fdf4ff;
  --accent-100: #fae8ff;
  --accent-200: #f5d0fe;
  --accent-300: #f0abfc;
  --accent-400: #e879f9;
  --accent-500: #d946ef;
  --accent-600: #c026d3;
  --accent-700: #a21caf;
  --accent-800: #86198f;
  --accent-900: #701a75;

  --dark-50: #f8fafc;
  --dark-100: #f1f5f9;
  --dark-200: #e2e8f0;
  --dark-300: #cbd5e1;
  --dark-400: #94a3b8;
  --dark-500: #64748b;
  --dark-600: #475569;
  --dark-700: #334155;
  --dark-800: #1e293b;
  --dark-900: #0f172a;
}

/* Base Styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-inter, system-ui, sans-serif);
}

/* Custom Components */
.glass-effect {
  @apply bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm border border-white/20 dark:border-dark-700/50;
}

.gradient-text {
  @apply bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent;
}

.section-padding {
  @apply py-16 lg:py-24;
}

.container {
  @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8;
}

/* Animations */
@keyframes pulse-slow {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

/* Background Pattern */
.bg-hero-pattern {
  background-image: 
    radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0);
  background-size: 20px 20px;
}

/* Smooth transitions */
* {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Focus styles */
:focus-visible {
  @apply outline-2 outline-offset-2 outline-primary-600;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100 dark:bg-dark-800;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 dark:bg-dark-600 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400 dark:bg-dark-500;
}
EOF

echo "1️⃣3️⃣ Verificando e corrigindo package.json dependencies..."
echo "Certifique-se de que as seguintes dependências estão instaladas:"
echo "npm install framer-motion lucide-react next react react-dom"
echo "npm install -D @types/node @types/react @types/react-dom typescript tailwindcss postcss autoprefixer"

echo "1️⃣4️⃣ Criando tsconfig.json básico..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

echo "1️⃣5️⃣ Criando tailwind.config.js completo..."
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backgroundImage: {
        'hero-pattern': 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
EOF

echo "1️⃣6️⃣ Criando postcss.config.js..."
cat > postcss.config.js << 'EOF'
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

echo ""
echo "✅ Correções concluídas! Os principais bugs foram corrigidos:"
echo "   - Hero.tsx: Corrigido problema com window undefined"
echo "   - ServiceDetail.tsx: Corrigido problema de sintaxe"
echo "   - next.config.js: Removida configuração obsoleta"
echo "   - layout.tsx: Completado e corrigido"
echo "   - Adicionados arquivos de configuração essenciais"
echo "   - Criados assets básicos (favicon, manifest)"
echo ""
echo "🚀 Próximos passos:"
echo "   1. Execute: npm install"
echo "   2. Execute: npm run dev"
echo "   3. Teste o site em http://localhost:3000"
echo ""
echo "📝 Notas importantes:"
echo "   - Substitua os códigos de verificação do Google/Yandex pelos reais"
echo "   - Adicione as imagens necessárias na pasta public/images/"
echo "   - Configure as variáveis de ambiente se necessário"
EOF
</invoke>