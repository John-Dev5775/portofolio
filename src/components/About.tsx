import { motion } from 'framer-motion';

const About = () => {
  const summary = `I'm a Senior Full-Stack Software Engineer with nearly decades of experience designing, building, and deploying high-performance applications for clients across industries — from global enterprises like LexisNexis to startups and government agencies. I combine deep backend expertise in PHP (Laravel), Node.js with modern frontend skills in React, Next.js and Vue, delivering solutions that are scalable, secure, and user-friendly.`;

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Subtle Tech Background */}
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-900/50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-balance">
              {summary}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

