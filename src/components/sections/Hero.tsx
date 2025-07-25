'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart3, Brain, Zap, Play } from 'lucide-react';
import Link from 'next/link';

// Componente de partículas animadas
const ParticleField = () => {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Só acessa window no lado cliente
    if (typeof window !== 'undefined') {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });

      const handleResize = () => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  // Não renderiza até que esteja montado no cliente
  if (!mounted) {
    return <div className="absolute inset-0 overflow-hidden" />;
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
          initial={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          animate={{
            x: Math.random() * dimensions.width,
            y: Math.random() * dimensions.height,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Componente de estatísticas animadas
const AnimatedStats = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [mounted, setMounted] = useState(false);
  const finalCounts = [250, 98, 15];
  const labels = ['Projetos Entregues', '% Taxa de Sucesso', 'Anos de Experiência'];

  useEffect(() => {
    setMounted(true);
    const duration = 2000;
    const steps = 60;
    const increment = duration / steps;

    finalCounts.forEach((finalCount, index) => {
      let current = 0;
      const stepValue = finalCount / steps;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= finalCount) {
          current = finalCount;
          clearInterval(timer);
        }
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });
      }, increment);
    });
  }, []);

  if (!mounted) {
    return (
      <div className="grid grid-cols-3 gap-8 mt-16">
        {finalCounts.map((count, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">
              {count}{index === 1 ? '%' : '+'}
            </div>
            <div className="text-dark-600 dark:text-dark-400 text-sm mt-2">
              {labels[index]}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-8 mt-16">
      {counts.map((count, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
          className="text-center"
        >
          <div className="text-3xl md:text-4xl font-bold gradient-text">
            {count}{index === 1 ? '%' : '+'}
          </div>
          <div className="text-dark-600 dark:text-dark-400 text-sm mt-2">
            {labels[index]}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

// Componente de código animado - VERSÃO TRANSPARENTE COM EFEITO DE DIGITAÇÃO
const CodeAnimation = () => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [mounted, setMounted] = useState(false);
  const codeLines = [
    'import pandas as pd',
    'from sklearn.model_selection import train_test_split',
    'from sklearn.ensemble import RandomForestClassifier',
    '',
    '# Carregando e preparando os dados',
    'data = pd.read_csv("dataset.csv")',
    'X = data.drop("target", axis=1)',
    'y = data["target"]',
    '',
    '# Treinando o modelo',
    'X_train, X_test, y_train, y_test = train_test_split(X, y)',
    'model = RandomForestClassifier(n_estimators=100)',
    'model.fit(X_train, y_train)',
    '',
    '# Avaliando performance',
    'accuracy = model.score(X_test, y_test)',
    'print(f"Acurácia: {accuracy:.2%}")',
  ];

  useEffect(() => {
    setMounted(true);
    
    const typeNextChar = () => {
      const currentLineText = codeLines[currentLine];
      
      if (currentChar < currentLineText.length) {
        // Continua digitando a linha atual
        setCurrentChar(prev => prev + 1);
      } else {
        // Linha completa, pausa e vai para próxima
        setTimeout(() => {
          setCurrentLine(prev => (prev + 1) % codeLines.length);
          setCurrentChar(0);
        }, currentLineText.length === 0 ? 200 : 800); // Pausa menor em linhas vazias
        return;
      }
    };

    if (mounted) {
      // Velocidade de digitação variável baseada no tipo de caractere
      const currentLineText = codeLines[currentLine];
      const currentCharacter = currentLineText[currentChar];
      
      let delay = 80; // Velocidade base
      
      // Ajustes de velocidade para parecer mais humano
      if (currentCharacter === ' ') delay = 40;  // Espaços são rápidos
      if (currentCharacter === '(') delay = 120; // Pausas em símbolos
      if (currentCharacter === ')') delay = 100;
      if (currentCharacter === '=') delay = 150; // Pausa em operadores
      if (currentCharacter === ',') delay = 200; // Pausa maior em vírgulas
      if (currentLineText.startsWith('#')) delay = 60; // Comentários mais rápidos
      
      const timer = setTimeout(typeNextChar, delay);
      return () => clearTimeout(timer);
    }
  }, [mounted, currentLine, currentChar, codeLines]);

  // Reset quando chega ao final
  useEffect(() => {
    if (currentLine >= codeLines.length) {
      const resetTimer = setTimeout(() => {
        setCurrentLine(0);
        setCurrentChar(0);
      }, 2000);
      return () => clearTimeout(resetTimer);
    }
  }, [currentLine, codeLines.length]);

  return (
    <div className="bg-dark-900/5 dark:bg-dark-900/10 backdrop-blur-sm border border-white/5 dark:border-dark-700/20 rounded-lg p-6 font-mono text-sm overflow-hidden">
      {/* Header mais sutil */}
      <div className="flex items-center space-x-2 mb-4 opacity-40">
        <div className="w-3 h-3 bg-red-400/40 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400/40 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400/40 rounded-full"></div>
        <span className="text-dark-600/50 dark:text-dark-400/50 ml-2">modelo_ia.py</span>
      </div>
      
      {/* Código com efeito de digitação */}
      <div className="space-y-1 relative">
        {codeLines.map((line, lineIndex) => {
          let displayText = '';
          
          if (lineIndex < currentLine) {
            // Linhas já completadas
            displayText = line;
          } else if (lineIndex === currentLine) {
            // Linha sendo digitada
            displayText = line.substring(0, currentChar);
          }
          // Linhas futuras ficam vazias
          
          return (
            <motion.div
              key={lineIndex}
              className={`whitespace-pre transition-all duration-300 min-h-[1.25rem] ${
                lineIndex < currentLine 
                  ? 'text-dark-700/40 dark:text-dark-300/25' // Linhas antigas - muito sutis
                  : lineIndex === currentLine 
                    ? 'text-sky-500/70' // Linha atual - destaque sutil
                    : 'text-transparent' // Linhas futuras - invisíveis
              }`}
            >
              {displayText || '\u00A0'}
              {/* Cursor piscando na linha atual */}
              {lineIndex === currentLine && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="text-sky-400/80 ml-1"
                >
                  |
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
      
      {/* Efeito de brilho muito sutil na linha atual */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-500/2 to-transparent rounded-lg pointer-events-none"
        animate={{
          opacity: [0, 0.1, 0],
        }}
        transition={{
          opacity: { duration: 3, repeat: Infinity },
        }}
      />
    </div>
  );
};

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoClick = () => setIsVideoOpen(true);
  const handleCloseVideo = () => setIsVideoOpen(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-accent-50/20 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      {/* Background Effects */}
      <ParticleField />
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-hero-pattern"></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-primary-50/80 dark:bg-primary-900/30 backdrop-blur-sm border border-primary-200/50 dark:border-primary-800/50 rounded-full px-4 py-2 text-primary-700 dark:text-primary-300 font-medium">
                <Zap className="w-4 h-4" />
                <span>Transformando Dados em Decisões Assertivas</span>
              </div>

              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-balance">
                  <span className="text-dark-900 dark:text-white">
                    Ciência de Dados e{' '}
                  </span>
                  <span className="gradient-text">
                    IA Estratégica
                  </span>
                  <span className="text-dark-900 dark:text-white">
                    {' '}para seu Negócio
                  </span>
                </h1>
                
                <p className="text-xl text-dark-600 dark:text-dark-300 max-w-2xl text-balance">
                  Desbloqueamos insights valiosos dos seus dados usando as tecnologias mais avançadas em 
                  Machine Learning e Inteligência Artificial.
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="/contact"
                  className="group bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
                >
                  <span>Começar Projeto</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                
                <button
                  onClick={handleVideoClick}
                  className="group bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-dark-800 text-dark-900 dark:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 border border-dark-200/50 dark:border-dark-700/50"
                >
                  <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>Ver Demonstração</span>
                </button>
              </div>

              {/* Stats */}
              <AnimatedStats />
            </motion.div>
          </div>

          {/* Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Visual Container */}
            <div className="relative">
              {/* Code Editor - Agora no fundo */}
              <div className="relative z-0">
                <CodeAnimation />
              </div>

              {/* Floating Cards - Afastados da janela do código */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="absolute -top-14 -left-16 z-20 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md border border-white/30 dark:border-dark-700/40 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-dark-900 dark:text-white">
                      Modelo Treinado
                    </div>
                    <div className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                      Acurácia: 94.2%
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="absolute -bottom-8 -right-16 z-20 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md border border-white/30 dark:border-dark-700/40 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center backdrop-blur-sm shadow-lg">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-dark-900 dark:text-white">
                      IA Ativa
                    </div>
                    <div className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                      Processando...
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Connecting Lines - Ajustadas para nova posição */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  d="M 30 30 Q 120 80 200 120"
                  stroke="url(#gradient)"
                  strokeWidth="1"
                  fill="none"
                  className="opacity-30"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ delay: 1.7, duration: 1 }}
                  d="M 300 200 Q 220 160 150 140"
                  stroke="url(#gradient2)"
                  strokeWidth="1"
                  fill="none"
                  className="opacity-30"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6" />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-dark-600 dark:text-dark-400">
          <span className="text-sm font-medium">Explore mais</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-primary-600 to-transparent"
          ></motion.div>
        </div>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={handleCloseVideo}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative w-full max-w-4xl mx-4 aspect-video bg-dark-900 rounded-xl overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={handleCloseVideo}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-200"
            >
              ×
            </button>
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Vídeo de demonstração será integrado aqui</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}