import type { Metadata } from 'next';
import { Download, FileText } from 'lucide-react';

export const metadata: Metadata = {
    title: 'About | Sanoj Dayarathna Portfolio',
    description: 'Learn more about Sanoj Dayarathna, my experience, mobile, frontend, backend, and AI/ML skills.',
};

export default function About() {
    return (
        <div className="container animate-fade-in">
            <div style={styles.header}>
                <h1 style={styles.title}>About <span className="gradient-text">Me</span></h1>
            </div>

            <div style={styles.content}>
                <div className="glass-panel" style={styles.textSection}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Who I am</h2>
                    <p style={styles.paragraph}>
                        I am Sanoj Dayarathna, a passionate Fullstack Developer and an AI/ML enthusiast with a strong desire to build scalable and intelligent software solutions.
                    </p>
                    <p style={styles.paragraph}>
                        My expertise spans across both mobile and web development. I have developed complex mobile applications using Flutter, such as my flagship health app <strong>Medicare+</strong>, and built feature-rich web platforms like a fully functional <strong>Auction Site</strong>. My interest in AI/ML allows me to integrate intelligent features and modern solutions into my products, creating software that people love to use.
                    </p>

                    <h3 style={{ fontSize: '1.5rem', margin: '3rem 0 1rem 0' }}>Experience Highlights</h3>
                    <div style={styles.job}>
                        <div style={styles.jobHeader}>
                            <strong style={{ fontSize: '1.2rem' }}>Fullstack & Software Developer</strong>
                            <span style={{ color: 'var(--accent-secondary)' }}>Freelance & Personal Projects</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)' }}>Present</p>
                    </div>
                </div>

                <div className="glass-panel" style={styles.skillsSection}>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>My Skills</h2>
                    <div style={styles.skillsGrid}>
                        <div>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Frontend & Mobile</h4>
                            <ul style={styles.list}>
                                <li>Flutter / Dart</li>
                                <li>React & Next.js</li>
                                <li>HTML / CSS / JS</li>
                                <li>UI/UX Design</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>Backend & Data</h4>
                            <ul style={styles.list}>
                                <li>Node.js / Express</li>
                                <li>Python</li>
                                <li>SQL & NoSQL Databases</li>
                                <li>RESTful APIs</li>
                            </ul>
                        </div>
                        <div>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--accent-primary)' }}>AI & Tools</h4>
                            <ul style={styles.list}>
                                <li>Machine Learning Basics</li>
                                <li>Git & GitHub</li>
                                <li>Cloud Deployments</li>
                                <li>Figma & Design Systems</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Resume Download Section */}
                <div className="glass-panel animate-slide-in-right delay-200" style={styles.resumeSection}>
                    <div style={styles.resumeContent}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <FileText className="gradient-text" size={32} /> Grab My Resume
                            </h2>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                                Want a brief overview of my experience, skills, and projects in a neat PDF format?
                            </p>
                        </div>
                        <a href="/resume.pdf" download className="btn-primary animate-pulse-glow" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', whiteSpace: 'nowrap' }}>
                            <Download size={20} /> Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    header: {
        padding: '4rem 0 3rem 0',
        textAlign: 'center' as const,
    },
    title: {
        fontSize: '3.5rem',
    },
    content: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '3rem',
        paddingBottom: '4rem',
    },
    textSection: {
        padding: '3rem',
    },
    paragraph: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginBottom: '1.5rem',
        lineHeight: 1.8,
    },
    job: {
        marginBottom: '2rem',
        paddingBottom: '2rem',
        borderBottom: '1px solid var(--border-color)',
    },
    jobHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '0.5rem',
    },
    skillsSection: {
        padding: '3rem',
    },
    skillsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem',
    },
    resumeSection: {
        padding: '3rem',
        background: 'linear-gradient(135deg, rgba(26, 29, 36, 0.8), rgba(109, 40, 217, 0.15))',
        border: '1px solid rgba(139, 92, 246, 0.4)',
        boxShadow: '0 10px 30px rgba(109, 40, 217, 0.1)',
    },
    resumeContent: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap' as const,
        gap: '2rem',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '0.8rem',
        color: 'var(--text-secondary)',
    }
};
