import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'superwizard0831@gmail.com',
      href: 'mailto:superwizard0831@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(786) 372-0091',
      href: 'tel:+17863720091',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bayonne, New Jersey, US',
      href: null,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/jaquesf',
      href: 'https://linkedin.com/in/jaquesf',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-purple-50/40 to-white/90 dark:from-gray-900/90 dark:via-purple-900/20 dark:to-gray-900/90"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm always open to discussing new opportunities and interesting projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            const content = method.href ? (
              <motion.a
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-all hover:scale-105 group"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{method.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{method.value}</p>
                </div>
              </motion.a>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-4 p-6 bg-gray-50 dark:bg-gray-800 rounded-xl"
              >
                <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                  <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{method.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{method.value}</p>
                </div>
              </motion.div>
            );
            return <div key={index}>{content}</div>;
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="mailto:superwizard0831@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors shadow-lg hover:shadow-xl"
          >
            <Send className="w-5 h-5" />
            Send Message
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

