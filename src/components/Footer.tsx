export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={styles.footer}>
            <div className="container">
                <p style={styles.text}>
                    &copy; {currentYear} John Doe. Built with Next.js & Vanilla CSS.
                </p>
            </div>
        </footer>
    );
}

const styles = {
    footer: {
        padding: '2rem 0',
        borderTop: '1px solid var(--border-color)',
        textAlign: 'center' as const,
        marginTop: 'auto',
    },
    text: {
        color: 'var(--text-secondary)',
        fontSize: '0.9rem',
    }
};
