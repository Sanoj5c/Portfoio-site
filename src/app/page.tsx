'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

export default function Home() {
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
      <section style={styles.heroSection}>
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
            Computer science undergraduate
          </motion.h2>
          <motion.p style={styles.description} variants={itemLeft}>
            I am a Computer science student at NSBM Green University, where I am pursuing my passion for software development and learning new technologies. I have a strong foundation in programming languages such as Java, Python, and C++, and web development technologies such as HTML, CSS, JavaScript, React js, Next js and Node js. I have also completed certificate courses in Python programming and web design from the University of Moratuwa, and earned the AI/ML Engineer Stage 1 certification from SLIIT. Besides my academic achievements, I am also an entrepreneur and a community leader.
          </motion.p>
          <motion.div style={styles.buttonGroup} variants={itemLeft}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/projects" className="btn-primary animate-pulse-glow" style={{ display: 'inline-block' }}>
                View My Work
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/contact" className="btn-secondary" style={{ display: 'inline-block' }}>
                Contact Me
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          style={styles.hero3D}
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          whileHover={{ rotateY: 5, scale: 1.02, transition: { duration: 0.5 } }}
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
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </motion.div>
        </motion.div>
      </section>

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
            <h4 style={styles.cardTitle}>Mobile App Development</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Building seamless, high-performance mobile apps for iOS and Android using Flutter & Dart. Creator of the Medicare+ app.</p>
          </motion.div>
          <motion.div
            className="glass-panel"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
          >
            <h4 style={styles.cardTitle}>Fullstack Web Apps</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Developing interactive web platforms, like Auction Sites, with React, Next.js, and robust backends.</p>
          </motion.div>
          <motion.div
            className="glass-panel"
            variants={cardVariants}
            whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)" }}
          >
            <h4 style={styles.cardTitle}>AI/ML Integration</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Enthusiastic about integrating Machine Learning models and AI-driven insights to make applications smarter and more capable.</p>
          </motion.div>
        </div>
      </motion.section>
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
    fontSize: '2.5rem',
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
};
