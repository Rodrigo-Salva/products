import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div
      role="status"
      aria-label="Cargando contenido"
      className="flex items-center justify-center min-h-screen bg-gray-900"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full"
      />
      <span className="sr-only">Cargando...</span>
    </div>
  );
}