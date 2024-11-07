import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactCard = ({ 
  icon: Icon, 
  title, 
  value, 
  link 
}: { 
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  link: string;
}) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center p-6 bg-white dark:bg-gray-800 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="p-4 bg-primary bg-opacity-10 rounded-full mr-6">
      <Icon className="w-8 h-8 text-primary" />
    </div>
    <div>
      <h3 className="text-sm text-gray-500 dark:text-gray-400 mb-1">{title}</h3>
      <p className="text-lg font-medium">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      title: "EMAIL",
      value: "le@ioritro.com",
      link: "mailto:le@ioritro.com"
    },
    {
      icon: FaLinkedin,
      title: "LINKEDIN",
      value: "linkedin.com/in/oritromax",
      link: "https://linkedin.com/in/oritromax"
    },
    {
      icon: FaGithub,
      title: "GITHUB",
      value: "github.com/oritromax",
      link: "https://github.com/oritromax"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto"
        >
          {contactInfo.map((info) => (
            <ContactCard
              key={info.title}
              icon={info.icon}
              title={info.title}
              value={info.value}
              link={info.link}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-full shadow-lg">
            <span className="relative flex h-3 w-3 mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <p className="text-gray-600 dark:text-gray-300">
              Currently available for new opportunities
            </p>
          </div>
        </motion.div>

        <footer className="mt-20 text-center text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Oritro. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;