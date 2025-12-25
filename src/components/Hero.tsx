import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, ChevronDown } from 'lucide-react';
import TechBackground from './TechBackground';

const Hero = () => {
  const contactInfo = [
    { icon: Mail, text: 'superwizard0831@gmail.com', href: 'mailto:superwizard0831@gmail.com' },
    { icon: Phone, text: '(786) 372-0091', href: 'tel:+17863720091' },
    { icon: MapPin, text: 'Bayonne, New Jersey, US', href: null },
    { icon: Linkedin, text: 'linkedin.com/in/jaquesf', href: 'https://linkedin.com/in/jaquesf' },
  ];

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-40"></div>
      
      {/* Code Pattern Overlay */}
      <div className="absolute inset-0 code-pattern opacity-30"></div>
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/80 via-white/90 to-purple-50/80 dark:from-gray-900/95 dark:via-gray-800/95 dark:to-gray-900/95"></div>
      
      {/* Animated Tech Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="tech-line top-1/4 w-full" style={{ animationDelay: '0s' }}></div>
        <div className="tech-line top-1/2 w-full" style={{ animationDelay: '2s' }}></div>
        <div className="tech-line top-3/4 w-full" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Floating Code Elements */}
      <TechBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400"
          >
            Jaques Fang
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-12 font-light italic"
          >
            Senior Full Stack Developer
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              const content = item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105 text-gray-700 dark:text-gray-300"
                >
                  <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm md:text-base">{item.text}</span>
                </a>
              ) : (
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg shadow-md text-gray-700 dark:text-gray-300">
                  <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  <span className="text-sm md:text-base">{item.text}</span>
                </div>
              );
              return <div key={index}>{content}</div>;
            })}
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={scrollToAbout}
            className="mt-8 p-3 rounded-full bg-primary-600 dark:bg-primary-500 text-white hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl animate-bounce"
            aria-label="Scroll to about"
          >
            <ChevronDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;

