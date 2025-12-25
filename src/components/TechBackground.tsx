import { motion } from 'framer-motion';

interface FloatingCode {
  text: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const TechBackground = () => {
  const codeElements: FloatingCode[] = [
    { text: '<React />', x: 10, y: 20, delay: 0, duration: 15 },
    { text: 'const code', x: 85, y: 15, delay: 2, duration: 18 },
    { text: 'function()', x: 15, y: 60, delay: 4, duration: 20 },
    { text: '{ }', x: 90, y: 55, delay: 1, duration: 16 },
    { text: '=>', x: 20, y: 80, delay: 3, duration: 17 },
    { text: 'TypeScript', x: 80, y: 85, delay: 5, duration: 19 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10 dark:opacity-15">
      {codeElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-primary-600 dark:text-primary-400 font-mono text-sm md:text-base font-bold"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {element.text}
        </motion.div>
      ))}
    </div>
  );
};

export default TechBackground;

