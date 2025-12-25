import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

interface ExperienceItem {
  company: string;
  position: string;
  period: string;
  location?: string;
  achievements: string[];
  skills: string[];
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      company: 'Cyberdyne Systems, Inc',
      position: 'Senior Backend Developer',
      period: '01/2025 – Present',
      achievements: [
        'Built and scaled InfluencerStudio, an AI-powered content automation platform enabling brands and creators to generate influencer-style videos, voiceovers, and social media posts without traditional shoots',
        'Architected Node.js microservices orchestrating AI pipelines across ElevenLabs(voice cloning), FAL/Akool/Replicate (image & video generation), and Remotion +FFmpeg (media assembly/export)',
        'Eliminated backend bottlenecks and resolved frequent memory leaks by profiling Node.js services, refactoring async workflows, and optimizing API orchestration across multiple third-party AI providers',
        'Implemented a PgBoss-backed distributed job orchestration system, supporting retries, concurrency limits, and safe queuing of large-scale video and audio rendering tasks',
        'Added real-time rendering progress via WebSockets, allowing users to see step-by-step status of media jobs, significantly improving user engagement and retention',
        'Optimized PostgreSQL with indexes, batch updates, and caching, cutting media search latency by ~40% and reducing dashboard load times',
        'Strengthened operational stability with PM2 for process management and Sentry +Datadog for performance/error monitoring, cutting time-to-fix by nearly 50%',
        'Delivered a high-throughput, fault-tolerant backend capable of processing large media batches reliably, directly increasing customer trust, retention, and revenue growth',
      ],
      skills: ['React', 'Next', 'Node', 'Typescript', 'PostgreSQL', 'AWS', 'Docker', 'WebSocket', 'PgBoss', 'AI models', 'OpenAI'],
    },
    {
      company: 'Cyberdyne Systems, Inc',
      position: 'Full Stack Developer',
      period: '07/2022 – 12/2024',
      achievements: [
        'Created a municipal licensing automation platform to digitize and streamline business license applications for city governments',
        'Developed responsive, multi-step web forms in Laravel with Vue3 and React.js components for dynamic validation and live previews',
        'Built secure RESTful APIs in PHP/Laravel to manage application workflows, payment processing, and document generation',
        'Integrated Stripe and PayPal for online payments, replacing legacy gateways',
        'Developed government staff dashboards with React-powered charts and Vue-based inline editing features',
        'Migrated legacy ASP.NET data into the new Laravel system while preserving historical integrity',
        'Implemented automated email/SMS notifications and cloud deployment to AWS for scalability',
      ],
      skills: ['PHP', 'Laravel', 'Vue.js', 'React.js', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'ASP.NET', 'Stripe API', 'PayPal API', 'AWS'],
    },
    {
      company: 'Cyberdyne Systems, Inc',
      position: 'Embedded Software Developer',
      period: '08/2021 – 02/2022',
      achievements: [
        'Engineered an embedded spelling and grammar checking engine for handheld devices with extremely limited RAM and processing power',
        'Wrote memory-optimized algorithms in C/C++ for dictionary compression, tokenization, and string matching, with PHP-based content management tools for rule and dictionary updates',
        'Created a lightweight Laravel admin interface to manage and deploy grammar rule sets',
        'Worked with firmware engineers to integrate the software into production devices while maintaining performance targets',
        'Built a browser-based testing suite using Vue.js for QA teams to validate accuracy across multiple dialects',
        'Reduced software footprint by over 40%, enabling deployment on low-spec consumer devices',
      ],
      skills: ['C++', 'C', 'PHP', 'Laravel', 'Vue.js', 'Embedded Systems', 'Algorithm Development'],
    },
    {
      company: 'Cyberdyne Systems, Inc',
      position: 'Software Engineer',
      period: '11/2019 – 03/2021',
      achievements: [
        'Designed and developed a remote monitoring and management platform for a multi-location healthcare provider to manage patient-care devices and facility systems',
        'Built backend services in Laravel microservices to support modular expansion',
        'Created Windows Services and API endpoints consumed by Vue.js dashboards for live device monitoring',
        'Integrated with HL7-based data exchange protocols for EHR compatibility, using PHP API bridges for interoperability',
        'Developed interactive admin panels in Vue2.js for real-time device status updates, charts, and alert visualizations',
        'Ensured full HIPAA compliance with encrypted data storage, role-based access, and audit trails',
      ],
      skills: ['PHP', 'Laravel', 'Perl', 'SQL Server', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'HL7', 'HIPAA'],
    },
    {
      company: 'Cyberdyne Systems, Inc',
      position: 'Senior Full Stack Developer',
      period: '04/2017 – 07/2019',
      achievements: [
        'Developed a large-scale knowledge management portal for LexisNexis to streamline access to millions of legal, regulatory, and business records',
        'Built backend modules in PHP/Laravel for enhanced maintainability and scalability',
        'Designed SQL Server schemas, stored procedures, and indexing strategies to handle high-volume queries with minimal latency',
        'Implemented advanced filtering, tagging, and full-text search features, with front-end enhancements using React.js components for modernized user interaction',
        'Collaborated with UX designers to produce an intuitive UI using HTML, CSS, JavaScript, and early Vue.js prototypes for dynamic interfaces',
        'Integrated secure authentication and authorization aligned with corporate Active Directory standards',
      ],
      skills: ['PHP', 'Laravel', 'SQL Server', 'React.js', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript', 'XML', 'IIS'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 to-transparent dark:from-gray-800/80"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Nearly a decade of building scalable, high-performance applications
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-2">
                    {exp.company}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary-600 dark:text-primary-400 mt-1.5">▸</span>
                    <span className="text-gray-700 dark:text-gray-300 flex-1">{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
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

export default Experience;

