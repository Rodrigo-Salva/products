import { motion } from 'framer-motion';
import { Package, Github, Mail, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Asumiendo uso de React Router

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Categorías', href: '/categorias' },
    { name: 'Productos', href: '/productos' },
  ];

  const legal = [
    { name: 'Privacidad', href: '/privacidad' },
    { name: 'Términos', href: '/terminos' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const social = [
    {
      name: 'GitHub',
      href: 'https://github.com/tu-usuario/microstore',
      icon: Github,
      ariaLabel: 'GitHub de MicroStore'
    },
    {
      name: 'Email',
      href: 'mailto:hello@microstore.com',
      icon: Mail,
      ariaLabel: 'Enviar email a MicroStore'
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/microstore',
      icon: Linkedin,
      ariaLabel: 'LinkedIn de MicroStore'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 py-16"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl border border-purple-500/30">
                <Package className="w-7 h-7 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  MicroStore
                </h2>
                <p className="text-sm text-slate-400 mt-1">Sistema moderno de gestión</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Plataforma escalable de gestión de productos y categorías construida con microservicios. 
              Optimizada para rendimiento y mantenibilidad.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <span>Enlaces</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </h3>
            <nav className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 transition-all duration-200 text-slate-300 hover:text-white hover:shadow-lg"
                  aria-label={`Ir a ${item.name}`}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social & Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <span>Conecta</span>
              <ChevronRight className="w-4 h-4 text-purple-400" />
            </h3>
            <div className="space-y-4 mb-8">
              {social.map((platform) => {
                const Icon = platform.icon;
                return (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-800/50 border border-transparent hover:border-slate-700/50 transition-all duration-200 text-slate-300 hover:text-white hover:shadow-lg"
                    aria-label={platform.ariaLabel}
                  >
                    <div className="p-3 bg-slate-800/50 group-hover:bg-slate-700/50 rounded-2xl transition-all duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-medium">{platform.name}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/50 pt-12 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-slate-400 order-2 md:order-1">
              © {currentYear} MicroStore. Hecho con ❤️ para desarrolladores.
            </p>
            <nav className="flex flex-wrap gap-6 order-1 md:order-2" aria-label="Legal">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-400 hover:text-purple-400 font-medium transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}