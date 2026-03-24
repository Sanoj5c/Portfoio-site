'use client';

import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [feedback, setFeedback] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setFeedback('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (res.ok) {
                setStatus('success');
                setFeedback('Your message has been sent successfully!');
                setName('');
                setEmail('');
                setMessage('');
            } else {
                setStatus('error');
                setFeedback(data.error || 'Failed to send message. Please try again later.');
            }
        } catch (error) {
            setStatus('error');
            setFeedback('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
                <label htmlFor="name" style={styles.label}>Name</label>
                <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="Your Name" 
                    required 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={status === 'loading'}
                />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="email" style={styles.label}>Email</label>
                <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="you@example.com" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'loading'}
                />
            </div>

            <div style={styles.formGroup}>
                <label htmlFor="message" style={styles.label}>Message</label>
                <textarea 
                    id="message" 
                    className="form-input" 
                    rows={6} 
                    placeholder="How can I help you?" 
                    required 
                    style={styles.textarea}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={status === 'loading'}
                ></textarea>
            </div>

            <button type="submit" className="btn-primary" style={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>

            {feedback && (
                <div style={{ marginTop: '1rem', padding: '0.75rem', borderRadius: '0.5rem', backgroundColor: status === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: status === 'success' ? '#10b981' : '#ef4444', border: `1px solid ${status === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}` }}>
                    {feedback}
                </div>
            )}
        </form>
    );
}

const styles = {
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
};
