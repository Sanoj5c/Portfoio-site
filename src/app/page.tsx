'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, Smartphone, Monitor, BrainCircuit, ExternalLink, Github, FileText, Linkedin, Twitter } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const devProjects = [
  {
    id: 1,
    title: 'Medicare+ Mobile App',
    description: 'A comprehensive healthcare mobile application developed using Flutter. It connects patients with medical services, offering a seamless and intuitive user experience.',
    stack: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX'],
    link: '#',
    image: '/medicare.png',
  },
  {
    id: 2,
    title: 'Bidfy Online Auction Site',
    description: 'Bidfy is an online auction platform where I served as the sole frontend developer, building the complete React interface from the ground up. From product listings and live countdown timers to real-time bidding and role-based dashboards for sellers and buyers — every pixel of the user experience was designed and developed by me.',
    stack: ['Fullstack Web', 'React', 'Node.js', 'Databases'],
    link: '#',
    image: '/bidfy.png',
  },
  {
    id: 3,
    title: 'AI Prediction Model',
    description: 'A machine learning prototype built to analyze datasets and provide predictive insights, demonstrating enthusiasm and skills in AI/ML.',
    stack: ['Python', 'Machine Learning', 'Data Science', 'Pandas'],
    link: '#',
    image: '/ai_prediction_model.svg',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    description: 'A premium, modern, 3D-enhanced web portfolio showcasing my skills, built with Next.js, Glassmorphism, and interactive 3D elements.',
    stack: ['Next.js', 'React', 'Three.js', 'CSS'],
    link: '#',
    image: '/portfolio.png',
  },
  {
    id: 5,
    title: 'Spendly - Personal Expense Tracker App',
    description: 'Spendly takes the stress out of managing money. Built with Flutter and Firebase and powered by AI, it delivers a smooth, real-time expense tracking experience — helping users log spending, set budgets, and receive smart personalized insights that turn their financial habits into better decisions.',
    stack: ['Flutter', 'Firebase', 'AI', 'Mobile Development', 'UI/UX'],
    link: '#',
    image: '/spendly.png',
  }
];

export default function Home() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <div className="container">
      <section
        style={styles.heroSection}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      >
        <motion.div
          style={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 style={styles.title} variants={itemLeft}>
            Hi, I&apos;m <span className="gradient-text">Sanoj Dayarathna</span>
          </motion.h1>
          <motion.h2 style={styles.subtitle} variants={itemLeft}>
            Undergraduate
          </motion.h2>
          <motion.p style={styles.description} variants={itemLeft}>
            Full Stack Developer | Computer Science Undergraduate|
            I build things that matter. From scalable web applications to AI-powered systems, I bridge the gap between clean code and intelligent solutions — with a growing focus on genomic data science and machine learning research.
          </motion.p>
          <motion.div style={styles.buttonGroup} variants={itemLeft}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/#projects" className="btn-primary animate-pulse-glow" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                View My Work
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/resume.pdf" download className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                <Download size={18} /> Resume
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ ...styles.hero3D, rotateX, rotateY }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          whileHover={{ scale: 1.02, transition: { duration: 0.5 } }}
          suppressHydrationWarning
        >
          <motion.div
            style={{ width: '100%', height: '100%', position: 'relative' }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          >
            <Image
              src="/profile.jpeg"
              alt="Sanoj Dayarathna"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 85%', transform: 'scale(1.15)' }}
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" style={{ paddingTop: '6rem', paddingBottom: '2rem' }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={containerVariants}>
          <motion.h3 style={styles.sectionTitle} variants={cardVariants}>About <span className="gradient-text">Me</span></motion.h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingBottom: '4rem' }}>
            <motion.div className="glass-panel" variants={cardVariants} style={{ padding: '3rem' }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Who I am</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                I'm a Computer Science undergraduate who builds things that matter. With expertise in full stack development and a growing focus on AI/ML, I design and develop applications that are both functional and meaningful. From school management platforms to healthcare booking systems, my projects reflect my drive to solve real-world problems through clean code and intelligent solutions.
              </p>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                My expertise spans across both mobile and web development. I have developed complex mobile applications using Flutter, such as my flagship health app <strong>Medicare+</strong>, and built feature-rich web platforms like a fully functional <strong>Auction Site</strong>. My interest in AI/ML allows me to integrate intelligent features and modern solutions into my products, creating software that people love to use.
              </p>

            </motion.div>

          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <motion.section
        style={{ paddingBottom: '6rem' }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 style={styles.sectionTitle} variants={cardVariants}>Key Skills</motion.h3>
        <div style={styles.skillsGrid}>
          {['Java', 'Python', 'HTML/CSS', 'JavaScript', 'React.js', 'Next.js', 'Node.js', 'Flutter', 'Dart', 'PostgreSQL', 'Firebase', 'Figma', 'Git', 'GitHub'].map((skill, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              style={styles.skillItem}
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.4), 0 0 15px var(--accent-glow)", borderColor: "var(--accent-primary)" }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Featured Section */}
      <motion.section
        style={styles.featureSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h3 style={styles.sectionTitle} variants={cardVariants}>What I Do</motion.h3>
        <div style={styles.grid}>
          <motion.div
            className="glass-panel"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
          >
            <div style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              <Smartphone size={40} />
            </div>
            <h4 style={styles.cardTitle}>Mobile App Development</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Building seamless, high-performance mobile apps for iOS and Android using Flutter & Dart. Creator of the Medicare+ app.</p>
          </motion.div>
          <motion.div
            className="glass-panel"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
          >
            <div style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              <Monitor size={40} />
            </div>
            <h4 style={styles.cardTitle}>Fullstack Web Apps</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Developing interactive web platforms, like Auction Sites, with React, Next.js, and robust backends.</p>
          </motion.div>
          <motion.div
            className="glass-panel"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
          >
            <div style={{ marginBottom: '1.5rem', color: 'var(--accent-primary)' }}>
              <BrainCircuit size={40} />
            </div>
            <h4 style={styles.cardTitle}>AI/ML Integration</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Enthusiastic about integrating Machine Learning models and AI-driven insights to make applications smarter and more capable.</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Projects Section (Dev & Design) */}
      <section id="projects" style={{ paddingTop: '6rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 style={styles.sectionTitle} variants={cardVariants}>Development <span className="gradient-text">Projects</span></motion.h3>
          <div style={styles.grid}>
            {devProjects.map((project) => (
              <motion.div
                key={project.id}
                className="glass-panel"
                variants={cardVariants}
                style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
              >
                {(project as any).image && (
                  <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
                    <Image
                      src={(project as any).image}
                      alt={project.title}
                      fill
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                    />
                  </div>
                )}
                <h4 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h4>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{project.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
                  {project.stack.map(tech => (
                    <span key={tech} style={{ fontSize: '0.8rem', padding: '0.2rem 0.8rem', background: 'rgba(109, 40, 217, 0.2)', color: '#c084fc', borderRadius: '999px', border: '1px solid rgba(109, 40, 217, 0.4)' }}>{tech}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto', flexWrap: 'wrap' }}>
                  <a href={project.link} className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.9rem', padding: '0.6rem 1.2rem', borderRadius: '999px' }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" className="btn-secondary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.9rem', padding: '0.6rem 1.2rem', borderRadius: '999px' }}>
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Design Projects Section */}
        <motion.div
          style={{ paddingTop: '6rem' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 style={styles.sectionTitle} variants={cardVariants}>Design Projects</motion.h3>
          <div style={styles.grid}>
            <motion.div
              className="glass-panel"
              variants={cardVariants}
              style={{ display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
            >
              <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
                <Image
                  src="/lernify.png"
                  alt="Lernify Mobile App UI"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <h4 style={styles.cardTitle}>Lernify Mobile App UI</h4>
              <p style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>Lernify is a mobile application UI designed to bridge the gap between parents, teachers, and students in one unified platform. Parents can track academic progress, view grades and school reports, stay updated on school events, and communicate directly with teachers — keeping the entire school community connected and informed.</p>
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://www.figma.com/proto/Ur4cw6O6JKUv6wmimTsMv8/Untitled?node-id=1215-2226&p=f&t=N3QOnedVB98DUnME-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1219%3A3215" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.9rem', padding: '0.6rem 1.2rem', borderRadius: '999px' }}>
                  <ExternalLink size={16} /> View Prototype
                </a>

              </div>
            </motion.div>
            <motion.div
              className="glass-panel"
              variants={cardVariants}
              style={{ display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
            >
              <div style={{ position: 'relative', width: '100%', height: '220px', marginBottom: '1.5rem', borderRadius: '12px', overflow: 'hidden' }}>
                <Image
                  src="/medicare.png"
                  alt="Medicare+ Mobile App UI"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
              <h4 style={styles.cardTitle}>Medicare+ Mobile app UI</h4>
              <p style={{ color: 'var(--text-secondary)', flexGrow: 1 }}>Medicare+ reimagines how people access healthcare. From browsing clinics to booking appointments in seconds, Medicare+ puts the entire patient experience in the palm of your hand — fast, simple, and stress-free.</p>
              <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a href="https://www.figma.com/make/VuT2huqNAdeBSAnc24tehC/E-Channeling-Mobile-App-UI-Prototype?fullscreen=1&t=lPydolDXUgHgXC3M-1" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', fontSize: '0.9rem', padding: '0.6rem 1.2rem', borderRadius: '999px' }}>
                  <ExternalLink size={16} /> View Prototype
                </a>

              </div>
            </motion.div>

          </div>
        </motion.div>
      </section>


      {/* Contact Section */}
      <section id="contact" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.h3 style={{ ...styles.sectionTitle, fontSize: '3.5rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }} variants={cardVariants}>Let's Build <span className="gradient-text">Together</span></motion.h3>
          <motion.p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }} variants={cardVariants}>
            Have a project in mind? Let's collaborate and create something amazing.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '3rem' }}>
            <motion.div className="glass-panel" variants={cardVariants} style={{ padding: '3rem' }}>
              <ContactForm />
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <motion.div className="glass-panel" variants={cardVariants} style={{ height: '100%', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Information</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                  Feel free to reach out via email or connect with me on social media.
                  I try to respond to all inquiries within 24 hours.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-secondary)' }}>
                  <li><strong>Email:</strong> sanojdayarathna5cc@gmail.com</li>
                  <li><strong>Phone:</strong> +94 752748468</li>
                  <li><strong>Location:</strong> Kegalle, Srilanka</li>
                </ul>

                <h3 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem 0' }}>Social Profiles</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '0.8rem', borderRadius: '8px' }}><Github size={20} /> GitHub</a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '0.8rem', borderRadius: '8px' }}><Linkedin size={20} /> LinkedIn</a>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', width: '100%', padding: '0.8rem', borderRadius: '8px' }}><Twitter size={20} /> Twitter</a>
                </div>
              </motion.div>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            {/* Resume Download */}
            <motion.div className="glass-panel" variants={cardVariants} style={{ padding: '3rem', background: 'linear-gradient(135deg, rgba(26, 29, 36, 0.8), rgba(109, 40, 217, 0.15))', border: '1px solid rgba(139, 92, 246, 0.4)', boxShadow: '0 10px 30px rgba(109, 40, 217, 0.1)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
                <div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <FileText className="gradient-text" size={32} /> Grab My Resume
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    Want a brief overview of my experience, skills, and projects in a neat PDF format?
                  </p>
                </div>
                <a href="/resume.pdf" download className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                  <Download size={20} /> Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

const styles = {
  heroSection: {
    minHeight: '80vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '2rem',
    flexWrap: 'wrap' as const,
    paddingTop: '2rem',
  },
  heroContent: {
    flex: '1 1 500px',
    maxWidth: '650px',
  },
  hero3D: {
    flex: '1 1 400px',
    height: '500px',
    position: 'relative' as const,
    borderRadius: '24px',
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.5), 0 0 40px rgba(109, 40, 217, 0.4)',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  title: {
    fontSize: '4.5rem',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    lineHeight: 1.1,
  },
  subtitle: {
    fontSize: '2rem',
    color: 'var(--text-secondary)',
    marginBottom: '1.5rem',
    fontWeight: 500,
  },
  description: {
    fontSize: '1.2rem',
    color: 'var(--text-secondary)',
    marginBottom: '3rem',
    lineHeight: 1.6,
  },
  buttonGroup: {
    display: 'flex',
    gap: '1rem',
  },
  featureSection: {
    padding: '6rem 0',
  },
  sectionTitle: {
    fontSize: '3.5rem',
    textAlign: 'center' as const,
    marginBottom: '3rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    marginBottom: '1rem',
    color: 'var(--text-primary)',
  },
  skillsGrid: {
    display: 'flex',
    flexWrap: 'wrap' as const,
    gap: '1rem',
    justifyContent: 'center',
  },
  skillItem: {
    padding: '0.8rem 1.8rem',
    borderRadius: '999px',
    fontSize: '1.1rem',
    fontWeight: 500,
    color: 'var(--text-primary)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
  },
};
