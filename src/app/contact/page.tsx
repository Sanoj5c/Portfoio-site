import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | Sanoj Dayarathna Portfolio',
    description: 'Get in touch with Sanoj Dayarathna for freelance projects or employment opportunities.',
};

export default function Contact() {
    return (
        <div className="container animate-fade-in">
            <div style={styles.header}>
                <h1 style={styles.title}>Get in <span className="gradient-text">Touch</span></h1>
                <p style={styles.subtitle}>I&apos;m currently available for freelance work and full-time positions.</p>
            </div>

            <div style={styles.content}>
                <div className="glass-panel" style={styles.formContainer}>
                    <form style={styles.form}>
                        <div style={styles.formGroup}>
                            <label htmlFor="name" style={styles.label}>Name</label>
                            <input type="text" id="name" className="form-input" placeholder="Your Name" required />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="email" style={styles.label}>Email</label>
                            <input type="email" id="email" className="form-input" placeholder="you@example.com" required />
                        </div>

                        <div style={styles.formGroup}>
                            <label htmlFor="message" style={styles.label}>Message</label>
                            <textarea id="message" className="form-input" rows={6} placeholder="How can I help you?" required style={styles.textarea}></textarea>
                        </div>

                        <button type="submit" className="btn-primary" style={styles.submitBtn}>
                            Send Message
                        </button>
                    </form>
                </div>

                <div style={styles.info}>
                    <div className="glass-panel">
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Contact Information</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                            Feel free to reach out via email or connect with me on social media.
                            I try to respond to all inquiries within 24 hours.
                        </p>
                        <ul style={styles.infoList}>
                            <li><strong>Email:</strong> hello@johndoe.com</li>
                            <li><strong>Phone:</strong> +1 (555) 123-4567</li>
                            <li><strong>Location:</strong> San Francisco, CA</li>
                        </ul>

                        <h3 style={{ fontSize: '1.5rem', margin: '2rem 0 1rem 0' }}>Social Profiles</h3>
                        <div style={styles.socialGrid}>
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-secondary" style={styles.socialLink}>GitHub</a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-secondary" style={styles.socialLink}>LinkedIn</a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="btn-secondary" style={styles.socialLink}>Twitter</a>
                        </div>
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
    subtitle: {
        fontSize: '1.2rem',
        color: 'var(--text-secondary)',
        marginTop: '1rem',
    },
    content: {
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)',
        gap: '3rem',
        paddingBottom: '4rem',
    },
    formContainer: {
        padding: '3rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column' as const,
        marginBottom: '1rem',
    },
    label: {
        marginBottom: '0.5rem',
        fontWeight: 500,
        color: 'var(--text-primary)',
    },
    textarea: {
        resize: 'vertical' as const,
        fontFamily: 'inherit',
    },
    submitBtn: {
        marginTop: '1rem',
        alignSelf: 'flex-start',
    },
    info: {
        display: 'flex',
        flexDirection: 'column' as const,
    },
    infoList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
        color: 'var(--text-secondary)',
    },
    socialGrid: {
        display: 'flex',
        flexDirection: 'column' as const,
        gap: '1rem',
    },
    socialLink: {
        textAlign: 'center' as const,
        display: 'block',
        width: '100%',
    }
};
