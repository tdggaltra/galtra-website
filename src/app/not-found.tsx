import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
            Página não encontrada
          </h2>
          <p className="text-lg text-dark-600 dark:text-dark-300 max-w-md mx-auto">
            A página que você está procurando não existe ou foi movida para outro local.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Home className="w-5 h-5" />
            <span>Voltar ao Início</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="bg-white dark:bg-dark-800 text-dark-900 dark:text-white px-6 py-3 rounded-lg font-semibold border border-dark-200 dark:border-dark-700 hover:bg-gray-50 dark:hover:bg-dark-700 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Página Anterior</span>
          </button>
        </div>
      </div>
    </div>
  );
}
