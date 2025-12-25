import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming Languages',
      skills: ['C', 'C++', 'PHP', 'C#', 'JavaScript', 'TypeScript', 'SQL'],
    },
    {
      title: 'Frontend Technologies',
      skills: ['React', 'Next.js', 'Redux', 'Vue', 'Nuxt', 'Tailwind CSS', 'MUI', 'Shadcn', 'Hooks', 'SPA'],
    },
    {
      title: 'Backend Technologies',
      skills: ['Node', 'Laravel', 'Codeigniter', 'Perl', 'GraphQL', 'gRPC', 'tRPC'],
    },
    {
      title: 'Cloud Platforms',
      skills: ['AWS (EC2, S3, Lambda)'],
    },
    {
      title: 'DevOps & CI/CD Tools',
      skills: ['Git', 'GitHub Actions', 'Bitbucket', 'Jira', 'CI/CD'],
    },
    {
      title: 'Testing & Agile Tools',
      skills: ['TDD', 'Jest', 'Cypress'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Code Pattern Background */}
      <div className="absolute inset-0 code-pattern opacity-25"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-primary-50/30 to-white/90 dark:from-gray-900/90 dark:via-primary-900/20 dark:to-gray-900/90"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A comprehensive toolkit for full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

