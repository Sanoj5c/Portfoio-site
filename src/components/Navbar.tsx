'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

export default function Navbar() {
    const navVariants: Variants = {
        hidden: { y: -100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 80,
                damping: 20,
                staggerChildren: 0.1,
                delayChildren: 0.1
            }
        }
    };

    const linkVariants: Variants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.nav
            style={styles.nav as any}
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="container" style={styles.container}>
                <motion.div style={styles.logoContainer} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link href="/" style={styles.logo}>
                        Sanoj<span className="gradient-text">.</span>
                    </Link>
                </motion.div>
                <ul style={styles.navLinks}>
                    <motion.li variants={linkVariants} whileHover={{ y: -2 }}><Link href="/" style={styles.link}>Home</Link></motion.li>
                    <motion.li variants={linkVariants} whileHover={{ y: -2 }}><Link href="/projects" style={styles.link}>Projects</Link></motion.li>
                    <motion.li variants={linkVariants} whileHover={{ y: -2 }}><Link href="/about" style={styles.link}>About</Link></motion.li>
                    <motion.li variants={linkVariants} whileHover={{ y: -2 }}><Link href="/contact" style={styles.link}>Contact</Link></motion.li>
                </ul>
            </div>
        </motion.nav>
    );
}

const styles = {
    nav: {
        position: 'fixed' as const,
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'rgba(13, 15, 18, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border-color)',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '5rem',
    },
    logoContainer: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    logo: {
        textDecoration: 'none',
        color: 'var(--text-primary)',
    },
    navLinks: {
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
    },
    link: {
        textDecoration: 'none',
        color: 'var(--text-secondary)',
        fontWeight: 500,
        fontSize: '1rem',
        transition: 'color 0.3s ease',
    },
};
