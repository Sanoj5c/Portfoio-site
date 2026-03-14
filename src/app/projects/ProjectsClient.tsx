'use client';

import { motion, Variants } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: 'Medicare+',
        description: 'A comprehensive healthcare mobile application developed using Flutter. It connects patients with medical services, offering a seamless and intuitive user experience.',
        stack: ['Flutter', 'Dart', 'Mobile Development', 'UI/UX'],
        link: '#',
    },
    {
        id: 2,
        title: 'Online Auction Site',
        description: 'A full-scale, feature-rich web platform for real-time bidding and auctions. Built with a robust backend and an attractive, responsive frontend.',
        stack: ['Fullstack Web', 'React', 'Node.js', 'Databases'],
        link: '#',
    },
    {
        id: 3,
        title: 'AI Prediction Model',
        description: 'A machine learning prototype built to analyze datasets and provide predictive insights, demonstrating enthusiasm and skills in AI/ML.',
        stack: ['Python', 'Machine Learning', 'Data Science', 'Pandas'],
        link: '#',
    },
    {
        id: 4,
        title: 'Personal Portfolio',
        description: 'A premium, modern, 3D-enhanced web portfolio showcasing my skills, built with Next.js, Glassmorphism, and interactive 3D elements.',
        stack: ['Next.js', 'React', 'Three.js', 'CSS'],
        link: '#',
    },
];

export default function ProjectsClient() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const headerVariants: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
    };

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
    };

    return (
        <motion.div
            className="container"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div style={styles.header} variants={headerVariants}>
                <h1 style={styles.title}>My <span className="gradient-text">Projects</span></h1>
                <p style={styles.subtitle}>A collection of the awesome things I&apos;ve built recently.</p>
            </motion.div>

            <motion.div style={styles.grid}>
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="glass-panel"
                        style={styles.card}
                        variants={cardVariants}
                        whileHover={{
                            y: -10,
                            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 20px var(--accent-glow)"
                        }}
                    >
                        <h2 style={styles.cardTitle}>{project.title}</h2>
                        <p style={styles.cardDescription}>{project.description}</p>

                        <div style={styles.tagContainer}>
                            {project.stack.map(tech => (
                                <span key={tech} style={styles.tag}>{tech}</span>
                            ))}
                        </div>

                        <div style={styles.cardActions}>
                            <motion.a
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                href={project.link}
                                className="btn-secondary"
                                style={{ ...styles.actionButton, display: 'inline-block' }}
                            >
                                View Project
                            </motion.a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
}

const styles = {
    header: {
        padding: '4rem 0 3rem 0',
        textAlign: 'center' as const,
    },
    title: {
        fontSize: '3.5rem',
        marginBottom: '1rem',
    },
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
        gap: '2.5rem',
        paddingBottom: '4rem',
    },
    card: {
        display: 'flex',
        flexDirection: 'column' as const,
        height: '100%',
    },
    cardTitle: {
        fontSize: '1.5rem',
        marginBottom: '1rem',
    },
    cardDescription: {
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        flex: 1,
    },
    tagContainer: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '0.5rem',
        marginBottom: '2rem',
    },
    tag: {
        fontSize: '0.8rem',
        padding: '0.2rem 0.8rem',
        background: 'rgba(109, 40, 217, 0.2)',
        color: '#c084fc',
        borderRadius: '999px',
        border: '1px solid rgba(109, 40, 217, 0.4)',
    },
    cardActions: {
        marginTop: 'auto',
    },
    actionButton: {
        padding: '0.6rem 1.5rem',
        fontSize: '0.9rem',
    }
};
