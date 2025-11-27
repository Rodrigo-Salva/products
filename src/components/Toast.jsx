import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react';

export default function Toast({ 
  message, 
  type = 'info', 
  isVisible, 
  onClose,
  duration = 5000,
  position = 'top-right'
}) {
  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info,
  };

  const colors = {
    success: {
      bg: 'bg-green-500',
      border: 'border-green-400/30',
      text: 'text-green-100',
      hover: 'hover:bg-green-600'
    },
    error: {
      bg: 'bg-red-500',
      border: 'border-red-400/30',
      text: 'text-red-100',
      hover: 'hover:bg-red-600'
    },
    warning: {
      bg: 'bg-yellow-500',
      border: 'border-yellow-400/30',
      text: 'text-yellow-100',
      hover: 'hover:bg-yellow-600'
    },
    info: {
      bg: 'bg-blue-500',
      border: 'border-blue-400/30',
      text: 'text-blue-100',
      hover: 'hover:bg-blue-600'
    },
  };

  const positions = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-4 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2',
  };

  const Icon = icons[type];
  const colorScheme = colors[type];

  const variants = {
    hidden: { 
      opacity: 0, 
      y: position.includes('top') ? -50 : 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        type: 'spring', 
        damping: 20, 
        stiffness: 300 
      }
    },
    exit: { 
      opacity: 0, 
      y: position.includes('top') ? -50 : 50,
      scale: 0.95,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className={`
            fixed max-w-sm w-full mx-4 sm:mx-0 z-[9999] p-4 rounded-2xl shadow-2xl border 
            ${positions[position]} 
            ${colorScheme.bg} ${colorScheme.border} ${colorScheme.text}
            backdrop-blur-sm bg-opacity-95
          `}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-center justify-between space-x-3">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <div className="p-2 bg-white/10 rounded-xl backdrop-blur-sm">
                <Icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <span className="font-medium text-sm leading-5 truncate pr-2">
                {message}
              </span>
            </div>
            
            <button
              onClick={onClose}
              className={`
                p-1.5 rounded-lg hover:bg-white/20 active:bg-white/30 
                transition-all duration-200 flex-shrink-0 group
                focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2
                focus:ring-offset-${colorScheme.bg.replace('bg-', '')}
              `}
              aria-label="Cerrar notificación"
            >
              <X className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Auto-hide progress bar */}
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ 
              scaleX: 0,
              transition: { 
                duration, 
                ease: 'linear' 
              }
            }}
            className="origin-left h-1 bg-white/30 rounded-full mt-3"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}