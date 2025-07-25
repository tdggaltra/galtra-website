export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/50 dark:from-dark-900 dark:to-dark-800/50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-dark-600 dark:text-dark-300">Carregando...</p>
      </div>
    </div>
  );
}
