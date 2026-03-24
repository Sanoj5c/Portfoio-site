import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Configure the email transport using Nodemailer
        // NOTE: In production, store your password/secrets in .env files (e.g. process.env.EMAIL_PASS)
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Change if you use another provider like Outlook, SendGrid, etc.
            auth: {
                user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with your email
                pass: process.env.EMAIL_PASS || 'your-app-password', // Replace with your App Password
            },
        });

        // Email to yourself (Notification)
        const mailOptions = {
            from: process.env.EMAIL_USER || 'your-email@gmail.com',
            to: 'sanojdayarathna5cc@gmail.com', // Your actual email address from the contact page
            subject: `New Portfolio Message from ${name}`,
            text: `You have received a new message from your portfolio website.\n\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
            html: `
                <h3>New Message from Portfolio Website</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br/>')}</p>
            `,
        };

        // Try to send the email
        // If EMAIL_USER and EMAIL_PASS are not set, this will fail. We will log it instead for testing.
        if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ message: 'Email sent successfully!' }, { status: 200 });
        } else {
            console.log("Mock Email (Configure .env.local to send real emails):");
            console.log(mailOptions);
            return NextResponse.json({ message: 'Email logged for testing. Please configure SMTP.' }, { status: 200 });
        }
        
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
    }
}
